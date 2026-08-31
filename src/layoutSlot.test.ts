import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  applyColumnLayoutSlot,
  applyCoreBlockLayoutSlot,
  applyFlexItemLayoutSlot,
  columnFractionByBreakpoint,
  getLayoutSlot,
} from "./layoutSlot.js";

describe("layoutSlot re-exports", () => {
  it("re-exports core helpers from @cloakwp/container", () => {
    assert.equal(typeof applyColumnLayoutSlot, "function");
    assert.equal(typeof applyFlexItemLayoutSlot, "function");
    assert.equal(typeof applyCoreBlockLayoutSlot, "function");
    assert.equal(typeof columnFractionByBreakpoint, "function");
    assert.equal(typeof getLayoutSlot, "function");
  });
});
