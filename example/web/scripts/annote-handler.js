(function() {
	document.addEventListener('DOMContentLoaded', initializeHandler, true);

	function initializeHandler() {
		addEventListeners();
	}

	function addEventListeners() {
		document.getElementById('highlight').addEventListener('click', function() {
			highlightText();
		});
	}

	function highlightText() {
		console.log(annotatePDF);
	}
})();