import { GenericParentComponent } from "@cloakui/types";
import { cx } from "@cloakui/styles";
import { CSSProperties, ReactNode, FC } from "react";

export const ButtonsContainer: FC<
  GenericParentComponent<CSSProperties, ReactNode>
> = ({ children, className, style, ...props }) => {
  return (
    <div
      className={cx("flex items-start gap-3", className)}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};
