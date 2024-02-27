import { css, styled } from "@mui/material";
import { ROW_ALIGN_CENTER__SPACE_B } from "../../../styles/global-styles.js";
import { breakpoints } from "../../../styles/media-queries.js";


export const FooterNavigationStyled = styled("nav")`
  ${ROW_ALIGN_CENTER__SPACE_B};
  gap: 56px;
  width: 649px;
  @media (min-width: ${breakpoints.xxs}px) and (max-width: ${breakpoints.lg}px) {
    flex-direction: column;
    width: unset;
  }
  @media (max-width: ${breakpoints.xxs}px) {
    flex-direction: column;
    width: unset;
  }
  transition: opacity 1s;
  * {
    ${(props) =>
      props.hoveredItem
        ? css`
            transition: opacity 0.6s;
            opacity: 0.5;
          `
        : css`
            transition: opacity 0.6s;
            opacity: 1;
          `}
  }

  & .nav-items {
    color: var(--River-bed);
    text-transform: uppercase;
    font-size: 11px;
    line-height: 130%;
    display: flex;
    align-items: center;
    letter-spacing: 0.15em;
    margin: -10px -20px;
    padding: 10px 20px;
    :hover {
      opacity: 1;
      cursor: pointer;
    }
  }
`;