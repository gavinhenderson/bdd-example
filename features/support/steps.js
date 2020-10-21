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

When("I subtract x and y", function () {
  return "pending";
});

When("I divide x by y", function () {
  return "pending";
});

Then("the result is {int}", function (int) {
  assert.equal(this.result, int);
});
