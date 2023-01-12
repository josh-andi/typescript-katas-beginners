"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var solution_exports = {};
__export(solution_exports, {
  Dog: () => Dog,
  Size: () => Size
});
module.exports = __toCommonJS(solution_exports);
var Size = /* @__PURE__ */ ((Size2) => {
  Size2[Size2["Small"] = 0] = "Small";
  return Size2;
})(Size || {});
class Dog {
  size;
  happiness;
  tiredness;
  constructor(size) {
    this.size = size;
    this.happiness = "happy";
    this.tiredness = 0;
  }
  walk = function(distance) {
  };
  getTiredness = () => {
    return this.tiredness;
  };
  getHappiness = () => {
    return this.happiness;
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Dog,
  Size
});
//# sourceMappingURL=solution.js.map
