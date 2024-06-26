import type { GenericParentComponent } from "@cloakui/types";
import type { CSSProperties, ReactNode } from "react";
import React from "react";
export type ColumnProps = GenericParentComponent<CSSProperties, React.ReactNode | (() => React.ReactNode)> & {
    span: number;
};
export declare const Column: React.ForwardRefExoticComponent<import("@cloakui/types").ComponentStyleProps<CSSProperties> & {
    children?: ReactNode | (() => React.ReactNode);
} & {
    span: number;
} & React.RefAttributes<HTMLDivElement>>;
