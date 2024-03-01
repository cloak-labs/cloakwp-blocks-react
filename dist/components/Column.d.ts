import type { GenericParentComponent } from "@cloakui/types";
import type { CSSProperties, ReactNode } from "react";
import React from "react";
export type ColumnProps = GenericParentComponent<CSSProperties, ReactNode> & {
    span: number;
};
export declare const Column: React.ForwardRefExoticComponent<import("@cloakui/types").ComponentStyleProps<CSSProperties> & {
    children?: ReactNode;
} & {
    span: number;
} & React.RefAttributes<HTMLDivElement>>;
