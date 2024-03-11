import { styled } from "@mui/material";
import {
  ROW_ALIGN_CENTER__SPACE_B,
  ROW_CENTER,
  COLUMN_JUSTIFY_START__ALIGN_CENTER,
  DESKTOP_WIDTH,
} from "../../styles/global-styles";
import { breakpoints } from "../../styles/media-queries";

export const FooterStyled = styled("footer")`
  ${COLUMN_JUSTIFY_START__ALIGN_CENTER};
  min-width: 320px;
  margin: auto;
  ${DESKTOP_WIDTH}
  max-width: 1303px;
  min-width: 1100px;
  @media (min-width: ${breakpoints.xxs}px) and (max-width: ${breakpoints.lg}px) {
    min-width: unset;
  }
  @media (max-width: ${breakpoints.xxs}px) {
    min-width: unset;
  }
  & .upper-section {
    ${ROW_ALIGN_CENTER__SPACE_B};
    height: 152px;
    background-color: var(--White);
    margin: auto;
    width: 100%;
    @media (max-width: ${breakpoints.lg}px) {
      margin-bottom: 76px;
    }
    @media (min-width: ${breakpoints.xxs}px) and (max-width: ${breakpoints.lg}px) {
      flex-direction: column;
      gap: 58.59px;
      margin-top: 93.59px;
      height: unset;
    }
    @media (max-width: ${breakpoints.xxs}px) {
      flex-direction: column;
      gap: 58.59px;
      margin-top: 58.59px;
      height: unset;
    }
  }
  & .footer-logo {
    height: 34.82px;
    :hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
  & .social-section {
    ${ROW_ALIGN_CENTER__SPACE_B}
    gap:24.5px;
    @media (min-width: ${breakpoints.xxs}px) and (max-width: ${breakpoints.lg}px) {
      margin-top: 12px;
    }
    @media (max-width: ${breakpoints.xxs}px) {
      margin-top: 12px;
    }
  }
  & .bottom-section {
    ${ROW_ALIGN_CENTER__SPACE_B}
    margin: auto;
    text-transform: uppercase;
    width: 100%;
    @media (max-width: ${breakpoints.lg}px) {
      flex-direction: column;
    }
    @media (min-width: ${breakpoints.xxs}px) and (max-width: ${breakpoints.lg}px) {
      height: unset;
      margin-bottom: 58px;
    }
    @media (max-width: ${breakpoints.xxs}px) {
      height: unset;
      margin-bottom: 36px;
    }
  }
  & .footer-copyright {
    ${ROW_CENTER}
  }
  & .footer-text {
    font-size: 11px;
    line-height: 14px;
    display: flex;
    align-items: center;
    letter-spacing: 0.15em;
    height: 86px;
    text-align: center;
    @media (max-width: ${breakpoints.lg}px) {
      height: 70px;
    }
  }
  & .policy-condition-wrapper {
    ${ROW_ALIGN_CENTER__SPACE_B}
    gap:24px;
    @media (max-width: ${breakpoints.lg}px) {
      flex-direction: column;
      gap: 0;
    }
  }
  & .vertical-line {
    border-left: 1px solid var(--Solitude);
    height: 14px;
    @media (max-width: ${breakpoints.lg}px) {
      display: none;
    }
  }

  .magnet-container {
    text-align: center;
    margin: -10px;
  }

  .magnet-item {
    position: relative;
    cursor: pointer;
    margin: 10px;
    transition: transform 0.75s linear;
  }
  .hoverable {
    cursor: pointer;
  }
`;
