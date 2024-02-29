import { css, styled } from "@mui/material";
import { ROW_ALIGN_CENTER__SPACE_B } from "../../../styles/global-styles";
import { breakpoints } from "../../../styles/media-queries";

export const NavigationStyled = styled("nav")`
  ${ROW_ALIGN_CENTER__SPACE_B};
  -webkit-animation: slide-in-bottom 1.5s cubic-bezier(0.1, 0.8, 0.1, 1) both;
  animation: slide-in-bottom 1.5s cubic-bezier(0.1, 0.8, 0.1, 1) both;
  animation-delay: 200ms;
  @-webkit-keyframes slide-in-bottom {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes slide-in-bottom {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  gap: 56px;
  // width: 649px;
  min-width: 649px;
  @media (max-width: ${breakpoints.lg}px) {
    display: none;
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
    letter-spacing: 0.1em;
    line-height: 130%;
    margin: -10px -20px;
    padding: 10px 20px;
    :hover {
      opacity: 1;
      cursor: pointer;
    }
  }
`;
