import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { cx } from "@cloakui/styles";
export const Column = React.forwardRef(({ span, className, style, children, ...props }, ref) => {
    console.log("col className: ", className);
    return (_jsx("div", { ref: ref, className: cx("flex flex-col", `col-span-${span}`, className), style: style, ...props, children: typeof children == "function" ? children() : children }));
});
Column.displayName = "Column";
