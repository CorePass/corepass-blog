import { ButtonStyled } from "./styled-base";

export const CBaseButton = ({ children, className, ...props }) => {
  return (
    <ButtonStyled
      variant="contained"
      sx={{ backgroundColor: "var(--Blue)" }}
      className={className}
      disableRipple
      {...props}
    >
      {children}
    </ButtonStyled>
  );
};
