// features/support/steps.js
const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert").strict;
const { add } = require("../../src");

Given("x is set to {int}", function (x) {
  this.x = x;
});

Given("y is set to {int}", function (y) {
  this.y = y;
});

When("I add x and y", function () {
  this.result = add(this.x, this.y);
});

Then("the result is {int}", function (int) {
  assert.equal(this.result, int);
});
