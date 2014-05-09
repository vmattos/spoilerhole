var Browser = require("zombie");
var assert = require("assert");
var chai = require("chai");

describe("User", function() {

	var browser;

	before(function(done) {
  		browser = new Browser();
    	browser
    		.visit("http://localhost:3000")
    		.then(done, done);
    });

	it("should be able to create a new media", function() {
    	return browser.clickLink("New media")
    			.then(function() {

    				return browser
    					.fill("media[title]", "Harry Potter")
    					.pressButton("Save")
    				
    			})
    			.then(function() {
    				var html = browser.html();
		    		chai.expect(html).to.contain('Harry Potter');
	    		});
    });

    it("should be able to delete medias", function() {
    	return browser.clickLink("Harry Potter")
    			.then(function() {
    				return browser
    						.pressButton("Delete media")
    			})
    			.then(function() {
    				var html = browser.html();
    				chai.expect(html).to.not.contain('Harry Potter');
    			});
    });


});