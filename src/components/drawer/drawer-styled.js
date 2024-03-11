import styled from "@emotion/styled";
import {
  COLUMN_ALIGN_CENTER__SPACE_B,
  ROW_ALIGN_CENTER__SPACE_B,
} from "../../styles/global-styles";
import { Drawer, css } from "@mui/material";
import { TEXT_20 } from "../../styles/globalTypography";

export const TitleWrapper = styled("div")`
  ${ROW_ALIGN_CENTER__SPACE_B}
  padding: 24px 32px;
  width: 100%;
  min-width: 320px;
`;
export const StyledDrawer = styled(Drawer)`
  ${COLUMN_ALIGN_CENTER__SPACE_B};
  & .MuiPaper-root {
    align-items: center;
  }
`;
export const NavigationStyled = styled("nav")`
  ${COLUMN_ALIGN_CENTER__SPACE_B};
  flex: 1;
  justify-content: space-around;
  p {
    ${(props) =>
      props.hoveredItem
        ? css`
            transition: opacity 0.3s;
            opacity: 0.2;
          `
        : css`
            transition: opacity 0.3s;
            opacity: 1;
          `}
  }
  & .content-nav {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 100px;
    padding-bottom: 100px;
    align-items: center;
    max-height: 700px;
    min-height: 500px;
    gap: 56px;
  }
  & .nav-items {
    ${TEXT_20}
    color: var(--River-bed);
    cursor: pointer;
    :hover {
      opacity: 1;
      cursor: pointer;
    }
  }
`;
export const StyledSocialSection = styled("div")`
  ${ROW_ALIGN_CENTER__SPACE_B};
  padding: 42px 0;
  gap: 20px;
`;
