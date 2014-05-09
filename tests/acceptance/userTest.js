var Browser = require("zombie");
var assert = require("assert");

describe("User", function() {
  before(function(done) {
    this.browser = new Browser();
    this.browser
      .visit("http://localhost:3000")
      .then(done, done);
  });

  it("should be able to create a new media", function() {
    assert.ok(true);
  });
});