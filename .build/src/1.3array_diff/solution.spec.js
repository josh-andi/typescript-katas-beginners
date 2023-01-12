"use strict";
var import_chai = require("chai");
var import_solution = require("./solution");
describe("Basic tests", () => {
  it("Basic test should work", () => {
    (0, import_chai.expect)((0, import_solution.arrayDiff)([], [4, 5])).to.eql([], "a was [], b was [4,5]");
    (0, import_chai.expect)((0, import_solution.arrayDiff)([3, 4], [3])).to.eql([4], "a was [3, 4], b was [3]");
    (0, import_chai.expect)((0, import_solution.arrayDiff)([1, 8, 2], [])).to.eql([1, 8, 2], "a was [1, 8, 2], b was []");
    (0, import_chai.expect)((0, import_solution.arrayDiff)([1, 2, 3], [1, 2])).to.eql([3], "a was [1, 2, 3], b was [1, 2]");
  });
});
//# sourceMappingURL=solution.spec.js.map
