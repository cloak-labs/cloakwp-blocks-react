import { htmlDataRouter } from "@cloakwp/block-data-routers";
import { configurableBlockPreset } from "../configurableBlockPreset";
import { HtmlParser } from "@cloakui/react-primitives/HtmlParser";
import { withContainer } from "@cloakui/react-primitives/withContainer";
export const html = configurableBlockPreset("core/html", {
    dataRouter: htmlDataRouter,
    component: withContainer(HtmlParser),
});
