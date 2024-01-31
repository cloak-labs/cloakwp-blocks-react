"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buttons = void 0;
const block_data_routers_1 = require("@cloakwp/block-data-routers");
const ButtonsContainer_1 = require("../components/ButtonsContainer");
const configurableBlockPreset_1 = require("../configurableBlockPreset");
exports.buttons = (0, configurableBlockPreset_1.configurableBlockPreset)("core/buttons", {
    dataRouter: block_data_routers_1.buttonsDataRouter,
    component: ButtonsContainer_1.ButtonsContainer,
});
