"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.columns = void 0;
const block_data_routers_1 = require("@cloakwp/block-data-routers");
const Columns_1 = require("../components/Columns");
const configurableBlockPreset_1 = require("../configurableBlockPreset");
exports.columns = (0, configurableBlockPreset_1.configurableBlockPreset)("core/columns", {
    dataRouter: block_data_routers_1.columnsDataRouter,
    component: Columns_1.Columns,
});
