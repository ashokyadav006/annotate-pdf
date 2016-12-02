import {Annotation} from './annotation';
import {config} from './config';

export class CanvasHolder {

	constructor(canvas, page, width, height){
		this.canvas = canvas;
		this.page = page;
		this.originalCanvasDimension = {};
		this.annotations = [];

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

		this.addEventListeners();
	}

	addEventListeners() {
		var pageContainer = document.getElementById("pageContainer"+this.page);
		pageContainer.addEventListener('contextmenu', this.showContextMenu)
	}

	updateCanvasDimensions() {
		var scale = PDFViewerApplication.pdfViewer.currentScale;
		
		this.canvas.width = this.originalCanvasDimension.width * scale;
		this.canvas.height = this.originalCanvasDimension.height * scale;
	}

	showContextMenu(evt) {
		let selectedText = window.getSelection().toString();
		if(selectedText && config.annotationType === 'HIGHLIGHT') {
			evt.preventDefault();
		}
	}

	addAnnotation(type, config) {

	}
}