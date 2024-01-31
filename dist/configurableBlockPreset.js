"use strict";
// import {
//   WPBlocksConfigReact,
//   WPSingleBlockConfigWithVariantsReact,
//   WPSingleBlockConfigWithoutVariantsReact,
// } from "@cloakwp/react";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configurableBlockPreset = void 0;
const configurableBlockPreset = (blockName, blockConfig) => (userOverrides) => ({
    [blockName]: {
        ...blockConfig,
        ...userOverrides,
    },
});
exports.configurableBlockPreset = configurableBlockPreset;
