import { spacerDataRouter } from "@cloakwp/block-data-routers";
import { Spacer } from "../components/Spacer";
import { configurableBlockPreset } from "../configurableBlockPreset";
export const spacer = configurableBlockPreset("core/spacer", {
    dataRouter: spacerDataRouter,
    component: Spacer,
});
