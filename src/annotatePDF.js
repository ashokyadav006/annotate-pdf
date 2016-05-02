import {CanvasHolder} from './canvas-holder';

export default {
	fillColor: 'black'
};
 
let canvasHolders = [];

//This is where the action begins start listening to page rendered event
//emitted by pdf js when a page gets rendered on the screen, we create
//our own canvas to draw annotation on top of it.
document.addEventListener('pagerendered', function(event) {
	let pageNumber = event.detail.pageNumber;
	let pageContainer = event.target;

	let annotationLayer = null, canvasHolder;
	
	if(canvasHolders[pageNumber - 1]) {
		canvasHolder = canvasHolders[pageNumber - 1];
		annotationLayer = canvasHolder.canvas;
		canvasHolder.updateCanvasDimensions();
	} else {
		annotationLayer = generateNewAnnoationLayer(pageNumber);
		let pdfCanvas = pageContainer.firstChild.firstChild;
	   	canvasHolder = new CanvasHolder(annotationLayer, pageNumber, pdfCanvas.width, pdfCanvas.height);

    	canvasHolders.push(canvasHolder);
	}

    pageContainer.appendChild(annotationLayer);
});

function generateNewAnnoationLayer(pageNumber)  {
	let canvas = document.createElement('canvas');
	canvas.setAttribute('id', 'annotationpage' + pageNumber);
	canvas.style.zIndex = 900; 
	canvas.style.position = 'absolute';
	canvas.style.top = '0';
	canvas.style.pointerEvents = 'none';

	return canvas;
}
