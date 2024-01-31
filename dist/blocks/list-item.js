"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listItem = void 0;
const block_data_routers_1 = require("@cloakwp/block-data-routers");
const react_primitives_1 = require("@cloakui/react-primitives");
const configurableBlockPreset_1 = require("../configurableBlockPreset");
exports.listItem = (0, configurableBlockPreset_1.configurableBlockPreset)("core/list-item", {
    dataRouter: block_data_routers_1.listItemDataRouter,
    component: react_primitives_1.TypographyListItem,
});
