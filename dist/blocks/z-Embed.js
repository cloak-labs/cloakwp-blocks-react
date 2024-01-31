"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Embed = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@cloakui/styles");
// Used for YouTube embeds
function Embed({ block, className }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, styles_1.cx)(`aspect-w-16 aspect-h-9 w-full`, className), children: (0, jsx_runtime_1.jsx)("iframe", { src: block.attrs.url, allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }) }));
}
exports.Embed = Embed;
