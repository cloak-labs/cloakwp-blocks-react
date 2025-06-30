import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { cx } from "@cloakui/styles";
export const Column = React.forwardRef(({ span, totalSiblings, className, style, children, ...props }, ref) => (_jsx("div", { ref: ref, className: cx("flex flex-col col-span-full", totalSiblings == 2 && `md:col-span-${span}`, totalSiblings >= 3 && `sm:col-span-${span}`, className), style: style, ...props, children: typeof children == "function" ? children() : children })));
Column.displayName = "Column";
