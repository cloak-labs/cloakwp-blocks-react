"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paragraph = void 0;
const react_primitives_1 = require("@cloakui/react-primitives");
const block_data_routers_1 = require("@cloakwp/block-data-routers");
const configurableBlockPreset_1 = require("../configurableBlockPreset");
exports.paragraph = (0, configurableBlockPreset_1.configurableBlockPreset)("core/paragraph", {
    dataRouter: block_data_routers_1.typographyDataRouter,
    component: react_primitives_1.TypographyP,
});
