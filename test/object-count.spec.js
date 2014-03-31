/**
* @license object-count https://github.com/cosmosio/object-count
*
* The MIT License (MIT)
*
* Copyright (c) 2014 Olivier Scherrer <pode.fr@gmail.com>
*/
var sut = require("../index");

var chai = require("chai"),
	expect = chai.expect;

describe("count", function () {

	var object = function () { this.a=10; this.b=20;};
		object.prototype.c = 30;
		object = new object();

	var array = [];
		array.length=3;

	it("should be a function", function () {
		expect(typeof sut).to.equal("function");
	});

	it("should count the number of properties of an object", function () {
		expect(sut(object)).to.equal(2);
	});

	it("should count the number of properties of an array", function () {
		expect(sut(array)).to.equal(3);
	});

});
