"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.column = void 0;
const block_data_routers_1 = require("@cloakwp/block-data-routers");
const Column_1 = require("../components/Column");
const configurableBlockPreset_1 = require("../configurableBlockPreset");
exports.column = (0, configurableBlockPreset_1.configurableBlockPreset)("core/column", {
    dataRouter: block_data_routers_1.columnDataRouter,
    component: Column_1.Column,
});
