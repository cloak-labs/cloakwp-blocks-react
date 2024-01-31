"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const block_data_routers_1 = require("@cloakwp/block-data-routers");
const react_primitives_1 = require("@cloakui/react-primitives");
const configurableBlockPreset_1 = require("../configurableBlockPreset");
exports.button = (0, configurableBlockPreset_1.configurableBlockPreset)("core/button", {
    variantsRouter: (block) => (block.attrs.url ? "link" : "default"),
    variants: {
        default: {
            dataRouter: block_data_routers_1.buttonDataRouter,
            component: react_primitives_1.Button,
        },
        link: {
            dataRouter: block_data_routers_1.buttonDataRouter,
            component: ({ href, children, ...rest }) => ((0, jsx_runtime_1.jsx)(react_primitives_1.Button, { asChild: true, ...rest, children: (0, jsx_runtime_1.jsx)(react_primitives_1.Link, { href: href, children: children }) })),
        },
    },
});
