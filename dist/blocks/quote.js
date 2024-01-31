"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quote = void 0;
const react_primitives_1 = require("@cloakui/react-primitives");
const block_data_routers_1 = require("@cloakwp/block-data-routers");
const configurableBlockPreset_1 = require("../configurableBlockPreset");
exports.quote = (0, configurableBlockPreset_1.configurableBlockPreset)("core/quote", {
    dataRouter: block_data_routers_1.blockquoteDataRouter,
    component: react_primitives_1.TypographyBlockquote,
});
