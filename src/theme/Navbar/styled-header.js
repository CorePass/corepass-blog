import { css, styled } from "@mui/material";
import {
  ROW_ALIGN_CENTER__SPACE_B,
  STICKY_POSITION,
} from "../../styles/global-styles";
import { breakpoints } from "../../styles/media-queries";
import { CBaseButton } from "@site/src/components/button/base";

export const HeaderStyled = styled("header")`
  ${ROW_ALIGN_CENTER__SPACE_B};
  min-width: 320px;
  padding: 16px 48px;
  ${(props) =>
    !props.scrollingUp && props.hideHeader
      ? css`
          visibility: hidden;
          transition:
            visibility 0.3s linear,
            opacity 0.3s linear;
          opacity: 0;
        `
      : css`
          visibility: visible;
          opacity: 1;
          transition:
            visibility 0.3s linear,
            opacity 0.3s linear;
        `}
  ${STICKY_POSITION}

  top: 0;
  background-color: var(--White);
  z-index: 300;
  background: ${(props) =>
    props.screenBegining ? "transparent" : "rgba(255, 255, 255, 0.5)"};
  backdrop-filter: ${(props) =>
    props.screenBegining ? "unset" : " blur(20px)"};
  & .button-text {
    line-height: 24px;
    letter-spacing: -0.02em;
    text-transform: none;
    width: 86px;
    z-index: 1;
    position: relative;
  }
  @media (max-width: ${breakpoints.xxs}px) {
    margin: 0;
    height: auto;
    width: 100%;
    padding: 24px 32px;
  }
  & .hamburger-menu {
    :hover {
      cursor: pointer;
    }
    display: none;
    @media (max-width: ${breakpoints.lg}px) {
      display: inline;
    }
  }
  .magnet-container {
    position: relative;
    text-align: center;
    cursor: pointer;
    margin: -15px;
    @media (max-width: ${breakpoints.xs}px) {
      display: none;
    }
  }

  .magnet-item {
    position: relative;
    display: inline-block;
    margin: 15px;
    transition: transform 0.75s linear;
    z-index: 1;
  }

  .right-side-container {
    display: flex;
    flex-direction: row-reverse;
    gap: 32px;
    align-items: center;
  }
  .logo-header {
    cursor: pointer;
    :hover {
      opacity: 0.8;
    }
  }
  .header-entrance-anime {
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
  }
`;

export const HideAbleBaseButton = styled(CBaseButton)`
  background: #1066df;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: all 0.25s ease;
    border-radius: 100px;
    transition-duration: 0.5s;
    box-shadow: inset 0 0 0 1px #1555b0;
  }
  &:hover::before {
    box-shadow: inset 0 0 0 56px #1555b0;
    z-index: -1;
  }
  :hover {
    box-shadow: none;
    background-color: #1066df;
  }
  &.MuiButtonBase-root:hover {
    background: #1066df;
  }
  @media (max-width: ${breakpoints.xxs}px) {
    display: none;
  }
`;
