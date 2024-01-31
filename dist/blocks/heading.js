"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.heading = void 0;
const block_data_routers_1 = require("@cloakwp/block-data-routers");
const configurableBlockPreset_1 = require("../configurableBlockPreset");
const react_primitives_1 = require("@cloakui/react-primitives");
exports.heading = (0, configurableBlockPreset_1.configurableBlockPreset)("core/heading", {
    variantsRouter: (block) => `h${block.attrs.level}`,
    variants: {
        h1: {
            dataRouter: block_data_routers_1.typographyDataRouter,
            component: react_primitives_1.TypographyH1,
        },
        h2: {
            dataRouter: block_data_routers_1.typographyDataRouter,
            component: react_primitives_1.TypographyH2,
        },
        h3: {
            dataRouter: block_data_routers_1.typographyDataRouter,
            component: react_primitives_1.TypographyH3,
        },
        h4: {
            dataRouter: block_data_routers_1.typographyDataRouter,
            component: react_primitives_1.TypographyH4,
        },
        h5: {
            dataRouter: block_data_routers_1.typographyDataRouter,
            component: react_primitives_1.TypographyH5,
        },
        h6: {
            dataRouter: block_data_routers_1.typographyDataRouter,
            component: react_primitives_1.TypographyH6,
        },
    },
});
