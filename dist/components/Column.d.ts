import type { GenericParentComponent } from "@cloakui/types";
import type { CSSProperties, ReactNode, FC } from "react";
export type ColumnProps = GenericParentComponent<CSSProperties, ReactNode> & {
    span: number;
};
export declare const Column: FC<ColumnProps>;
