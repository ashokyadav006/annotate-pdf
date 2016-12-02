export {generateNewAnnotationLayer, rotateCanvas, getMousePosition}

function generateNewAnnotationLayer(pageNumber)  {
	let canvas = document.createElement('canvas');
	canvas.setAttribute('id', 'annotationpage' + pageNumber);
	canvas.style.zIndex = 900; 
	canvas.style.position = 'absolute';
	canvas.style.top = '0';
	canvas.style.pointerEvents = 'none';

	return canvas;
}

function rotateCanvas(canvas, degree) {

}

function getMousePosition(canvas, mouseEvent) {
	var rect = canvas.getBoundingClientRect();

	return {
	    x: mouseEvent.clientX - rect.left,
	    y: mouseEvent.clientY - rect.top
	};
}