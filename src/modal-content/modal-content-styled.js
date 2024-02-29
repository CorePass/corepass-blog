import { styled } from "@mui/material";
import {
  COLUMN_ALIGN_START__JUSTIFY_START,
  DESKTOP_WIDTH,
  GradientFontStyle,
  ROW_ALIGN_CENTER__SPACE_B,
  ROW_ALIGN_START__SPACE_B,
  ROW_CENTER,
  ROW_JUSTIFY_START__ALIGN_CENTER,
} from "../styles/global-styles";

import {
  TEXT_11,
  TEXT_40,
  TEXT_56,
  TEXT_64,
} from "../styles/globalTypography";
import { breakpoints } from "../styles/media-queries";

export const ModalContentStyled = styled("section")`
  background-color: var(--White);
  border-radius: 16px;
  min-width: 320px;

  @media (min-width: ${breakpoints.xxs}px) and (max-width: ${breakpoints.md}px) {
    min-height: 100vh;
    height: 100vh;
    overflow: auto;
  }

  @media (max-width: ${breakpoints.xxs}px) {
    min-height: 100vh;
    height: 100%;
    border-radius: 0px;
  }

  & .content {
    ${ROW_ALIGN_START__SPACE_B}
    min-width: 1170px;
    padding-left: 122px;
    padding-right: 28px;
    @media (min-width: ${breakpoints.lg}px) and (max-width: ${breakpoints.xxxl}px) {
      transform: scale(0.8);
      transform-origin: top;
      height: 578.4px;
      justify-content: center;
      min-width: unset;
      padding-left: unset;
      padding-right: unset;
    }
    @media (min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg}px) {
      min-width: 1296px;
      transform: scale(0.6);
      transform-origin: center 0;
      height: 433.8px;
      justify-content: center;
      min-width: unset;
      padding-left: unset;
      padding-right: unset;
    }

    @media (max-width: ${breakpoints.md}px) {
      padding: 0;
      width: 100%;
      flex-direction: column;
      justify-content: flex-start;
      height: auto;
      min-height: 100vh;
      min-width: unset;
    }
    @media (max-width: ${breakpoints.xxs}px) {
      width: 100%;
      height: 100vh;
      min-height: 915px;
      flex-direction: column;
      justify-content: flex-start;
      overflow-y: clip;
    }
    @media (max-width: ${breakpoints.xxxs}px) {
      min-height: 845px;
    }
    @media (max-width: ${breakpoints.xxxxs}px) {
      min-height: 805px;
    }
  }
  & .download-left-column {
    ${COLUMN_ALIGN_START__JUSTIFY_START}
    gap:56px;
    min-width: 420px;
    margin-top: 156px;
    @media (max-width: ${breakpoints.md}px) {
      align-items: center;
      ${DESKTOP_WIDTH}
      margin: 0px auto;
    }
    @media (max-width: ${breakpoints.xxs}px) {
      margin-top: 50px;
      margin-bottom: 33px;
      align-items: center;
      min-width: 320px;
    }
  }
  & .modal-blue-button {
    width: 163px;
    height: 45px;
    border-radius: 40px;
    padding: 16px 32px;
    justify-content: flex-start;
    @media (min-width: ${breakpoints.md}px) {
      padding-left: 0;
    }
    &:hover {
      background: transparent;
      box-shadow: none;
      cursor: unset;
    }
    &::before {
      display: none;
    }
    &:hover::before {
      display: none;
    }
  }
  & .modal-button-text {
    min-width: 101px;
    ${TEXT_11}
    text-transform: uppercase;
  }
  & .download-right-column-container {
    ${ROW_CENTER}
    width: 100%;
  }
  & .download-right-column {
    pointer-events: none;
    margin-top: -54px;
    @media (min-width: ${breakpoints.xxs}px) and (max-width: ${breakpoints.md}px) {
      overflow: hidden;
      width: 85%;
      margin: auto;
      margin-top: 47px;
    }
    @media (max-width: ${breakpoints.xxs}px) {
      width: 100%;
      margin: 0px;
      overflow: clip;
    }
  }
  & .download-white-title {
    ${TEXT_56}
    @media (min-width: ${breakpoints.xxs}px) and (max-width: ${breakpoints.md}px) {
      ${TEXT_64}
      text-align: center;
    }
    @media (max-width: ${breakpoints.xxs}px) {
      ${TEXT_40}
      text-align: center;
    }
  }

  & .modal-button-container {
    ${ROW_JUSTIFY_START__ALIGN_CENTER}
    gap: 16px;
    width: 337px;
    @media (max-width: ${breakpoints.md}px) {
      gap: 8px;
      width: 271px;
      display: flex;
    }
    @media (max-width: ${breakpoints.xxs}px) {
      flex-direction: column;
    }
  }

  & .scale-restore {
    @media (min-width: ${breakpoints.lg}px) and (max-width: ${breakpoints.xxxl}px) {
      transform: scale(1.25);
      margin-left: 30px;
    }
    @media (min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg}px) {
      transform: scale(1.66);
      margin-left: 95px;
    }
  }

  & .gradient-font {
    ${GradientFontStyle}
  }
  & .close-button {
    position: absolute;
    top: 32px;
    right: 48px;
    cursor: pointer;
    @media (max-width: ${breakpoints.md}px) {
      display: none;
    }
  }
  & .corepass-modal-logo {
    position: absolute;
    top: 32px;
    left: 48px;
    @media (max-width: ${breakpoints.md}px) {
      display: none;
    }
  }
  & .hide-for-tablet {
    display: inline;
    color: var(--Black);
    @media (min-width: ${breakpoints.xxs}px) and (max-width: ${breakpoints.md}px) {
      display: none;
    }
  }
  & .show-for-tablet {
    display: none;
    @media (min-width: ${breakpoints.xxs}px) and (max-width: ${breakpoints.md}px) {
      display: inline;
    }
  }
  & .tablet-header {
    ${ROW_ALIGN_CENTER__SPACE_B};
    padding: 32px 48px;
    width: 100%;
    display: none;
    @media (max-width: ${breakpoints.md}px) {
      display: flex;
    }
    @media (max-width: ${breakpoints.xxs}px) {
      padding: 24px 32px;
    }
  }
  & .close-button-tablet {
    display: inline;
    @media (max-width: ${breakpoints.xxs}px) {
      display: none;
    }
  }
  & .close-mobile-button {
    @media (max-width: ${breakpoints.xxs}px) {
      // display: inline;
    }
  }
  & .show-for-mobile {
    display: none;
    @media (max-width: ${breakpoints.xxs}px) {
      display: inline;
    }
  }
`;
