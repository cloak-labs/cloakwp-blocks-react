import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from "@cloakui/styles";
export const Columns = ({ className, style, children, ...props }) => (_jsx("div", { className: cx("grid", className), style: style, ...props, children: children }));
