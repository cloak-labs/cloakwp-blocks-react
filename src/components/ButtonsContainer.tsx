import { cx } from "@cloakui/styles";
import { type FC } from "react";
import { type ReactGenericParentComponent } from "@cloakui/react-primitives";

export const ButtonsContainer: FC<ReactGenericParentComponent> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cx("flex flex-wrap items-start gap-3", className)}
      {...props}
    >
      {children}
    </div>
  );
};
