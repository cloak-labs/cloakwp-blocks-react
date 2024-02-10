import { typographyDataRouter } from "@cloakwp/block-data-routers";
import { configurableBlockPreset } from "../configurableBlockPreset";
import { TypographyH1 } from "@cloakui/react-primitives/TypographyH1";
import { TypographyH2 } from "@cloakui/react-primitives/TypographyH2";
import { TypographyH3 } from "@cloakui/react-primitives/TypographyH3";
import { TypographyH4 } from "@cloakui/react-primitives/TypographyH4";
import { TypographyH5 } from "@cloakui/react-primitives/TypographyH5";
import { TypographyH6 } from "@cloakui/react-primitives/TypographyH6";

export const heading = configurableBlockPreset("core/heading", {
  variantsRouter: (block) => `h${block.attrs.level}`,
  variants: {
    h1: {
      dataRouter: typographyDataRouter,
      component: TypographyH1,
    },
    h2: {
      dataRouter: typographyDataRouter,
      component: TypographyH2,
    },
    h3: {
      dataRouter: typographyDataRouter,
      component: TypographyH3,
    },
    h4: {
      dataRouter: typographyDataRouter,
      component: TypographyH4,
    },
    h5: {
      dataRouter: typographyDataRouter,
      component: TypographyH5,
    },
    h6: {
      dataRouter: typographyDataRouter,
      component: TypographyH6,
    },
  },
});
