"use strict";
var import_chai = require("chai");
var import_solution = require("./solution");
describe("Hello world", () => {
  it("should print a greeting message", () => {
    (0, import_chai.expect)((0, import_solution.helloWorld)()).to.eql("Hello world!!!");
  });
});
//# sourceMappingURL=solution.spec.js.map
