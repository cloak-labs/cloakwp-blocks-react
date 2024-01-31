import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from "@cloakui/styles";
export const ButtonsContainer = ({ children, className, style, ...props }) => {
    return (_jsx("div", { className: cx("flex items-start gap-3", className), style: style, ...props, children: children }));
};
