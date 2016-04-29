import AnnotatePDF from '../src/annotatePDF';

var expect = require('chai').expect;

describe('Testing works', function() {
	it('should work', function() {
		expect(AnnotatePDF.annotationType).to.be.equal(1);
	});
});