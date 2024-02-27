import { styled } from "@mui/material";
import { CBaseButton } from "./base";

export const GradientButtonStyled = styled(CBaseButton)`
  width: ${(props) => [props.width]};

  background-color: transparent;
  &:hover {
    background-color: unset;
    box-shadow: none;
    cursor: unset;
  }
  &:active {
    background-color: unset;
    box-shadow: none;
    cursor: unset;
  }
`;
