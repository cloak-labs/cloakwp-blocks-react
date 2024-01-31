"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.html = void 0;
const react_primitives_1 = require("@cloakui/react-primitives");
const block_data_routers_1 = require("@cloakwp/block-data-routers");
const configurableBlockPreset_1 = require("../configurableBlockPreset");
exports.html = (0, configurableBlockPreset_1.configurableBlockPreset)("core/html", {
    dataRouter: block_data_routers_1.htmlDataRouter,
    component: react_primitives_1.Html,
});
