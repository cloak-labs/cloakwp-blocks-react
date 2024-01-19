"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonsContainer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@cloakui/styles");
const ButtonsContainer = ({ children, className, style, ...props }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, styles_1.cx)("flex items-start gap-3", className), style: style, ...props, children: children }));
};
exports.ButtonsContainer = ButtonsContainer;
