"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreBlocksConfig = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_primitives_1 = require("@cloakui/react-primitives");
const block_data_routers_1 = require("@cloakwp/block-data-routers");
const codeDataRouter_1 = require("./data-routers/codeDataRouter");
const Columns_1 = require("./components/Columns");
const Column_1 = require("./components/Column");
const ButtonsContainer_1 = require("./components/ButtonsContainer");
exports.CoreBlocksConfig = {
    "core/paragraph": {
        dataRouter: block_data_routers_1.typographyDataRouter,
        component: react_primitives_1.TypographyP,
    },
    "core/heading": {
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
    },
    "core/quote": {
        dataRouter: block_data_routers_1.blockquoteDataRouter,
        component: react_primitives_1.TypographyBlockquote,
    },
    "core/code": {
        dataRouter: (0, codeDataRouter_1.codeDataRouter)({ showLineNumbers: true }),
        component: react_primitives_1.CodeBlock,
    },
    // "core/embed": {
    //   component: Embed,
    // },
    "core/html": {
        dataRouter: block_data_routers_1.htmlDataRouter,
        component: react_primitives_1.Html,
    },
    "core/columns": {
        dataRouter: block_data_routers_1.columnsDataRouter,
        component: Columns_1.Columns,
    },
    "core/column": {
        dataRouter: block_data_routers_1.columnDataRouter,
        component: Column_1.Column,
    },
    // "core/group": {
    //   component: Group,
    // },
    "core/list": {
        dataRouter: block_data_routers_1.listDataRouter,
        component: react_primitives_1.TypographyList,
    },
    "core/list-item": {
        dataRouter: block_data_routers_1.listItemDataRouter,
        component: react_primitives_1.TypographyListItem,
    },
    "core/buttons": {
        dataRouter: block_data_routers_1.buttonsDataRouter,
        component: ButtonsContainer_1.ButtonsContainer,
    },
    "core/button": {
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
    },
};
