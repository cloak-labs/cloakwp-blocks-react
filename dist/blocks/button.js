import { jsx as _jsx } from "react/jsx-runtime";
import { buttonDataRouter } from "@cloakwp/block-data-routers";
import { Button } from "@cloakui/react-primitives/Button";
import { Link } from "@cloakui/react-primitives/Link";
import { configurableBlockPreset } from "../configurableBlockPreset";
export const button = configurableBlockPreset("core/button", {
    variantsRouter: (block) => (block.attrs.url ? "link" : "default"),
    variants: {
        default: {
            dataRouter: buttonDataRouter,
            component: Button,
        },
        link: {
            dataRouter: buttonDataRouter,
            component: ({ href, children, ...rest }) => (_jsx(Button, { asChild: true, ...rest, children: _jsx(Link, { href: href, children: children }) })),
        },
    },
});
