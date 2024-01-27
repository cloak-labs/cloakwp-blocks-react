import {
  Button,
  Link,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyList,
  TypographyListItem,
  TypographyP,
  TypographyBlockquote,
  CodeBlock,
  Html,
  TypographyH5,
  TypographyH6,
  Separator,
} from "@cloakui/react-primitives";
import {
  buttonDataRouter,
  buttonsDataRouter,
  listDataRouter,
  listItemDataRouter,
  typographyDataRouter,
  blockquoteDataRouter,
  htmlDataRouter,
  columnsDataRouter,
  columnDataRouter,
  separatorDataRouter,
} from "@cloakwp/block-data-routers";
import { codeDataRouter } from "./data-routers/codeDataRouter";
import { Columns } from "./components/Columns";
import { Column } from "./components/Column";
import type { WPBlocksConfig } from "cloakwp";
import { ButtonsContainer } from "./components/ButtonsContainer";

export const CoreBlocksConfig: WPBlocksConfig = {
  "core/paragraph": {
    dataRouter: typographyDataRouter,
    component: TypographyP,
  },
  "core/heading": {
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
  },
  "core/quote": {
    dataRouter: blockquoteDataRouter,
    component: TypographyBlockquote,
  },
  "core/code": {
    dataRouter: codeDataRouter({ showLineNumbers: true }),
    component: CodeBlock,
  },
  // "core/embed": {
  //   component: Embed,
  // },
  "core/html": {
    dataRouter: htmlDataRouter,
    component: Html,
  },
  "core/columns": {
    dataRouter: columnsDataRouter,
    component: Columns,
  },
  "core/column": {
    dataRouter: columnDataRouter,
    component: Column,
  },
  "core/separator": {
    dataRouter: separatorDataRouter,
    component: Separator,
  },
  // "core/group": {
  //   component: Group,
  // },
  "core/list": {
    dataRouter: listDataRouter,
    component: TypographyList,
  },
  "core/list-item": {
    dataRouter: listItemDataRouter,
    component: TypographyListItem,
  },
  "core/buttons": {
    dataRouter: buttonsDataRouter,
    component: ButtonsContainer,
  },
  "core/button": {
    variantsRouter: (block) => (block.attrs.url ? "link" : "default"),
    variants: {
      default: {
        dataRouter: buttonDataRouter,
        component: Button,
      },
      link: {
        dataRouter: buttonDataRouter,
        component: ({ href, children, ...rest }) => (
          <Button asChild {...rest}>
            <Link href={href}>{children}</Link>
          </Button>
        ),
      },
    },
  },
};
