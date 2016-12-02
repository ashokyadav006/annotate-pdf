import {CanvasHolder} from './canvas-holder';
import {generateNewAnnotationLayer} from './util.js';
import {config} from './config.js';

export default {
	createAnnotation: createAnnotation
};
 
let canvasHolders = [], canvasHolder;

function createAnnotation(annotationType, config) {
	if(annotationType) {
		canvasHolder.addAnnotation(annotationType, config);
	}
}

//This is where the action begins start listening to page rendered event
//emitted by pdf js when a page gets rendered on the screen, we create
//our own canvas to draw annotation on top of it.
document.addEventListener('pagerendered', function(event) {
	let pageNumber = event.detail.pageNumber;
	let pageContainer = event.target;

	let annotationLayer = null;
	
	if(canvasHolders[pageNumber - 1]) {
		canvasHolder = canvasHolders[pageNumber - 1];
		annotationLayer = canvasHolder.canvas;
		canvasHolder.updateCanvasDimensions();
	} else {
		annotationLayer = generateNewAnnotationLayer(pageNumber);
		let pdfCanvas = pageContainer.firstChild.firstChild;
	   	canvasHolder = new CanvasHolder(annotationLayer, pageNumber, pdfCanvas.width, pdfCanvas.height);

    	canvasHolders.push(canvasHolder);
	}

    pageContainer.appendChild(annotationLayer);
});