import { getColumnsLayout } from "@cloakwp/container";
import type { RestApiBlockData } from "cloakwp/blocks";

/** Render `innerBlocks` into the `children` prop. */
export const innerBlocksChildren = {
  trees: (block: { innerBlocks?: RestApiBlockData[] }) =>
    block.innerBlocks?.length ? [{ blocks: block.innerBlocks }] : [],
  attach: (props: Record<string, any>, rendered: { output: unknown }[]) => {
    props.children = rendered[0]?.output;
  },
};

/** Render column children with `fromParent.colSpans` for span layout. */
export const columnsNestedBlocks = {
  ...innerBlocksChildren,
  renderOptions: (block: { innerBlocks?: RestApiBlockData[] }) => {
    const { colSpans } = getColumnsLayout(block.innerBlocks ?? []);
    return { fromParent: { colSpans } };
  },
};
