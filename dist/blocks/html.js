import { Html } from "@cloakui/react-primitives";
import { htmlDataRouter } from "@cloakwp/block-data-routers";
import { configurableBlockPreset } from "../configurableBlockPreset.js";
export const html = configurableBlockPreset("core/html", {
    dataRouter: htmlDataRouter,
    component: Html,
});
