"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.code = void 0;
const react_primitives_1 = require("@cloakui/react-primitives");
const configurableBlockPreset_1 = require("../configurableBlockPreset");
const codeDataRouter_1 = require("../data-routers/codeDataRouter");
exports.code = (0, configurableBlockPreset_1.configurableBlockPreset)("core/code", {
    dataRouter: (0, codeDataRouter_1.codeDataRouter)({ showLineNumbers: true }),
    component: react_primitives_1.CodeBlock,
});
