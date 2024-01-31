"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = void 0;
const block_data_routers_1 = require("@cloakwp/block-data-routers");
const react_primitives_1 = require("@cloakui/react-primitives");
const configurableBlockPreset_1 = require("../configurableBlockPreset");
exports.list = (0, configurableBlockPreset_1.configurableBlockPreset)("core/list", {
    dataRouter: block_data_routers_1.listDataRouter,
    component: react_primitives_1.TypographyList,
});
