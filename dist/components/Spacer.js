import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { cx } from "@cloakui/styles";
export const Spacer = React.forwardRef(({ className, style, ...props }, ref) => (_jsx("div", { ref: ref, "aria-hidden": true, className: cx("shrink-0", className), style: style, ...props })));
Spacer.displayName = "Spacer";
