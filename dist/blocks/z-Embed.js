import { jsx as _jsx } from "react/jsx-runtime";
import { cx } from "@cloakui/styles";
// Used for YouTube embeds
export function Embed({ block, className }) {
    return (_jsx("div", { className: cx(`aspect-w-16 aspect-h-9 w-full`, className), children: _jsx("iframe", { src: block.attrs.url, allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }) }));
}
