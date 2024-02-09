import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from "@cloakui/styles";
export const Column = ({ span, className, style, children, ...props }) => (_jsx("div", { className: cx("flex flex-col", `col-span-${span}`, className), style: style, ...props, children: children }));
