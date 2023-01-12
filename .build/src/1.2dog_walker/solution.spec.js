"use strict";
var import_chai = require("chai");
var import_solution = require("./solution");
describe("Given you have a small dog", () => {
  describe("when you take it on a walk", () => {
    describe("when the walk is long", () => {
      it("should make the dog tired", () => {
        const smallDog = new import_solution.Dog(import_solution.Size.Small);
        smallDog.walk(100);
        (0, import_chai.expect)(smallDog.getHappiness()).to.be("very happy");
        (0, import_chai.expect)(smallDog.getTiredness()).to.eql(100);
      });
    });
  });
});
//# sourceMappingURL=solution.spec.js.map
