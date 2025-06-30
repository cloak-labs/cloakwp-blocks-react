import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from "@cloakui/styles";
export const ButtonsContainer = ({ children, className, ...props }) => {
    return (_jsx("div", { className: cx("flex flex-wrap items-start gap-3", className), ...props, children: children }));
};
