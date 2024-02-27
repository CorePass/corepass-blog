import { GradientButtonStyled } from "./styled-gradient";

export const CGradientButton = ({ children, width, ...props }) => {
  return (
    <GradientButtonStyled disableRipple width={width} {...props}>
      {children}
    </GradientButtonStyled>
  );
};
