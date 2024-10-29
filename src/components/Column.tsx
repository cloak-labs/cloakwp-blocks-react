import React from "react";
import { cx } from "@cloakui/styles";
import { type ReactGenericParentComponentWithCx } from "@cloakui/react-primitives";

export type ColumnProps = ReactGenericParentComponentWithCx<
  React.ReactNode | (() => React.ReactNode)
> & {
  span: number;
};

export const Column = React.forwardRef<HTMLDivElement, ColumnProps>(
  ({ span, className, style, children, ...props }, ref) => {
    console.log("col className: ", className);
    return (
      <div
        ref={ref}
        className={cx("flex flex-col", `col-span-${span}`, className)}
        style={style}
        {...props}
      >
        {typeof children == "function" ? children() : children}
      </div>
    );
  }
);

Column.displayName = "Column";
