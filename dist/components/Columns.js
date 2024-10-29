import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from "@cloakui/styles";
export const Columns = ({ className, children, ...props }) => (_jsx("div", { className: cx("grid", className), ...props, children: children }));
