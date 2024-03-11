import { Dialog, styled } from "@mui/material";

import {
  DESKTOP_WIDTH,
  ROW_ALIGN_CENTER__SPACE_B,
} from "../../styles/global-styles";
import { H2_REGULAR } from "../..//styles/globalTypography";
import { breakpoints } from "../../styles/media-queries";

export const StyledDialog = styled(Dialog)`
  backdrop-filter: blur(15px);
  @media (max-width: ${breakpoints.xxs}px) {
    overflow-x: scroll;
  }
  .MuiDialog-paper {
    border-radius: 12px !important ;
    width: 100%;
    max-width: unset;
    z-index: 3;
    padding: 0;
    padding-top: 54px;
    background: transparent;
    box-shadow: none;
    max-width: 1320px;
    margin: 0;
    position: static;
    overflow-y: visible;

    @media (min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.xxl}px) {
      ${DESKTOP_WIDTH}
    }
    @media (max-width: ${breakpoints.md}px) {
      padding: 0;
    }
  }
`;

export const Wrapper = styled("div")`
  border-radius: 20px;
  width: 100%;
  cursor: auto;
`;
export const ChildWrapper = styled("div")`
  width: 100%;

  margin-left: auto;
  margin-right: auto;
`;
export const TopWrapper = styled("div")`
  ${ROW_ALIGN_CENTER__SPACE_B}
  width: 100%;
  margin-bottom: 40px;
`;
export const Title = styled("h1")`
  ${H2_REGULAR}
  color: var(--greyscale-800);
`;
