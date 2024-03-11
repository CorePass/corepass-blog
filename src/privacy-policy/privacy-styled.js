import { styled } from "@mui/material";
import {
  BULLET_TEXT_BODY,
  COLUMN_ALIGN_START__JUSTIFY_START,
  DESKTOP_WIDTH,
  MOBILE_WIDTH,
  ROW_JUSTIFY_START__ALIGN_CENTER,
  TABLET_WIDTH,
} from "@site/src/styles/global-styles";
import CTypography from "@site/src/components/typography";
import { breakpoints } from "@site/src/styles/media-queries.js";
import BulletIcon from "@site/src/assets/icons/center-blue-bullet.png";
import {
  TEXT_11,
  TEXT_16_500,
  TEXT_24_700,
  TEXT_56,
} from "@site/src/styles/globalTypography";

export const TermsStyled = styled("section")`
  ${COLUMN_ALIGN_START__JUSTIFY_START};
  padding: 80px 0 160px;
  gap: 64px;
  width: 100%;
  margin: auto;
  max-width: 1296px;
  @media (min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.xxl}px) {
    ${DESKTOP_WIDTH}
  }
  @media (max-width: ${breakpoints.sm}px) {
    ${TABLET_WIDTH}
  }
  @media (max-width: ${breakpoints.xxs}px) {
    ${MOBILE_WIDTH}
  }
`;

export const TitleWrapper = styled("div")`
  ${COLUMN_ALIGN_START__JUSTIFY_START};
  gap: 16px;

  & .privacy-badge {
    width: 163px;
    height: 45px;
    background: transparent;
    border-radius: 40px;
    padding: 16px 32px;
    justify-content: flex-start;
    margin-bottom: 16px;
    padding-left: 0;
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

  & .privacy-button-text {
    min-width: 101px;
    ${TEXT_11}
    text-transform: uppercase;
  }
`;

export const MainTitle = styled(CTypography)`
  ${TEXT_56}
  font-weight: 700;
  letter-spacing: -2.8px;
`;

export const ItemContainer = styled("div")`
  ${COLUMN_ALIGN_START__JUSTIFY_START};
  gap: 24px;
  width: 100%;
`;
export const ItemTitle = styled("div")`
  color: #000;
  ${TEXT_24_700}
  ${ROW_JUSTIFY_START__ALIGN_CENTER};
  gap: 16px;
`;
export const ItemTitlePrefix = styled("div")``;
export const ItemBodyGrey = styled("p")`
  color: var(--Grey);
  span {
    color: var(--Black);
  }
  ${TEXT_16_500}
`;

export const ItemBodyBlack = styled(ItemBodyGrey)`
  color: var(--Black);
`;

export const BodyWrapper = styled("div")``;

export const ItemBodyList = styled("ul")`
  list-style-type: lower-alpha;
  list-style-position: outside;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* grid-template-rows: repeat(7, auto); */
  grid-column-gap: 50px;
  grid-row-gap: 16px;
  // reduce the margin left of ItemBodyList 17px and listItem 16px
  width: calc(100% - 33px);
  margin-left: 17px;
  .item1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .item2 {
    grid-area: 2 / 1 / 3 / 2;
  }
  .item3 {
    grid-area: 3 / 1 / 4 / 2;
  }
  .item4 {
    grid-area: 4 / 1 / 5 / 2;
  }
  .item5 {
    grid-area: 5 / 1 / 6 / 2;
  }
  .item6 {
    grid-area: 6 / 1 / 7 / 2;
  }
  .item7 {
    grid-area: 7 / 1 / 8 / 2;
  }
  .item8 {
    grid-area: 1 / 2 / 2 / 3;
  }
  .item9 {
    grid-area: 2 / 2 / 3 / 3;
  }
  .item10 {
    grid-area: 3 / 2 / 4 / 3;
  }
  .item11 {
    grid-area: 4 / 2 / 5 / 3;
  }
  .item12 {
    grid-area: 5 / 2 / 6 / 3;
  }
  .item13 {
    grid-area: 6 / 2 / 7 / 3;
  }
  .item14 {
    grid-area: 7 / 2 / 8 / 3;
  }
`;

export const ListItem = styled("li")`
  /* display: list-item; */
  ${TEXT_16_500}
  span {
    position: relative;
    left: 16px;
  }
  .grey-item-body {
    color: var(--Grey);
    /* color: #000; */
  }
  &::marker {
    color: var(--Blue);
  }
`;

export const ItemBodyBlackWithBullet = styled(ItemBodyBlack)`
  &:before {
    ${BULLET_TEXT_BODY}
    background-image: url(${BulletIcon});
  }
`;

export const NestedBodyList = styled("ul")`
  list-style-type: lower-roman;
  list-style-position: outside;
  display: grid;
  grid-template-rows: repeat(2, auto);
  width: 100%;
  margin-left: 17px;
`;

export const ItemBodyListOneCol = styled(ItemBodyList)`
  grid-template-columns: unset;
`;

export const ItemsSubSection = styled("div")`
  ${COLUMN_ALIGN_START__JUSTIFY_START};
  gap: 8px;
  width: 100%;
`;

export const StyledTable = styled("table")`
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
  td {
    padding: 18px 16px;
  }
  // add dividers
  tr {
    &:not(:last-of-type) {
      border-bottom: 1px solid var(--Solitude);
    }
  }
  // add header background
  thead {
    &:first-of-type {
      background-color: var(--Blue);
    }
  }

  // header style
  th {
    padding: 16px;
    text-align: left;
    color: var(--White);
    ${TEXT_16_500}
    &:first-of-type {
      border-radius: 4px 0 0 4px;
    }
    &:last-of-type {
      border-radius: 0 4px 4px 0;
    }
  }

  // last row bottom padding
  tbody {
    tr {
      &:last-of-type {
        td {
          padding-bottom: 8px;
        }
      }
    }
  }
`;

export const TableContainer = styled("div")`
  width: 100%;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 32px 48px 0px rgba(16, 30, 66, 0.05);
  padding: 8px;
`;

export const Divider = styled("div")`
  width: 100%;
  height: 1px;
  background-color: var(--Solitude);
`;

export const ItemBodyBlue = styled(ItemBodyGrey)`
  font-size: 20px;
  color: var(--Blue);
  letter-spacing: -0.4px;
`;

export const ItemContainerWithSubHeader = styled(ItemContainer)`
  gap: 40px;
`;
