import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { cx } from "@cloakui/styles";
export const Columns = React.forwardRef(({ className, children, ...props }, ref) => (_jsx("div", { ref: ref, className: cx("grid", className), ...props, children: children })));
Columns.displayName = "Columns";
