"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Container_1 = require("../components/Container");
const styles_1 = require("@cloakui/styles");
const cloakwp_1 = require("cloakwp");
function Group({ block }) {
    const { classes, styles } = (0, cloakwp_1.wpBlockStyleBuilder)(block);
    if (!block?.innerBlocks)
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
    const { layout, align } = block.attrs;
    const numBlocks = block?.innerBlocks?.length;
    const groupClasses = (0, styles_1.cx)("flex gap-x-4 md:gap-x-6 flex-wrap", layout.type == "flex"
        ? layout.flexWrap
            ? "flex-row"
            : "flex-col"
        : "flex-col", numBlocks <= 2
        ? "sm:flex-nowrap"
        : numBlocks <= 3
            ? "md:flex-nowrap"
            : numBlocks <= 4
                ? "lg:flex-nowrap"
                : "");
    if (align != "full") {
        return ((0, jsx_runtime_1.jsx)(Container_1.default, { className: (0, styles_1.cx)("relative"), children: (0, jsx_runtime_1.jsx)("div", { className: (0, styles_1.cx)(styles.margin && "rounded-lg", groupClasses, classes), style: styles, children: block?.innerBlocks?.map((innerBlock, index) => ((0, jsx_runtime_1.jsx)(cloakwp_1.Block, { block: innerBlock, parentBlock: block.data, isNested: true, className: "min-w-[150px]" }, index))) }) }));
    }
    else {
        return ((0, jsx_runtime_1.jsx)("div", { className: (0, styles_1.cx)(classes), style: styles, children: (0, jsx_runtime_1.jsx)(Container_1.default, { className: "relative", innerClassName: groupClasses, children: block?.innerBlocks?.map((innerBlock, index) => ((0, jsx_runtime_1.jsx)(cloakwp_1.Block, { block: innerBlock, parentBlock: block.data, isNested: true, className: "min-w-[150px]" }, index))) }) }));
    }
}
exports.Group = Group;
