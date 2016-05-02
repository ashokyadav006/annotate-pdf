import Annotation from './annotation';

export class CanvasHolder {

	constructor(canvas, page, width, height){
		this.canvas = canvas;
		this.page = page;
		this.originalCanvasDimension = {}

		var scale = PDFViewerApplication.pdfViewer.currentScale;

		canvas.width = width;
		canvas.height = height;
		if(scale === 1) {
			this.originalCanvasDimension.width = width;
			this.originalCanvasDimension.height = height;
		} else {
			this.originalCanvasDimension.width = width / scale;
			this.originalCanvasDimension.height = height / scale;

		}
	}

	updateCanvasDimensions() {
		var scale = PDFViewerApplication.pdfViewer.currentScale;

		this.canvas.width = this.originalCanvasDimension.width * scale;
		this.canvas.height = this.originalCanvasDimension.height * scale;
	}
}