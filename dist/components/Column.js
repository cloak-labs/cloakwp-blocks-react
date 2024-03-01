import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from "@cloakui/styles";
import React from "react";
export const Column = React.forwardRef(({ span, className, style, children, ...props }, ref) => (_jsx("div", { ref: ref, className: cx("flex flex-col", `col-span-${span}`, className), style: style, ...props, children: children })));
