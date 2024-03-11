import React from "react";
import TypographyStyled from "./typography-styled";

const CTypography = ({
  size,
  weight,
  children,
  variant,
  className,
  color,
  id,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  return (
    <TypographyStyled
      size={size}
      weight={weight}
      variant={variant}
      className={className}
      color={color}
      id={id}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      component={"div"}
    >
      {children}
    </TypographyStyled>
  );
};

export default CTypography;
