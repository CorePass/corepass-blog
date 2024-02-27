// import PropTypes from "prop-types";
import { Typography, styled } from "@mui/material";

const TypographyStyled = styled(Typography)(
  ({ size, weight, theme, color }) => ({
    cursor: "default",
    color: color,
    ...(weight === "regular" && { fontWeight: "400" }),
    ...(weight === "medium" && { fontWeight: "500" }),
    ...(weight === "bold" && { fontWeight: "700" }),

    ...(size === "smaller" && {
      fontSize: "10px",
      lineHeight: "13px",
    }),
    ...(size === "small" && {
      fontSize: "12px",
      lineHeight: "15.6px",
    }),
    ...(size === "medium" && {
      fontSize: "14px",
      lineHeight: "18px",
    }),
    ...(size === "large" && {
      fontSize: "16px",
      lineHeight: "24px",
    }),
    ...(size === "larger" && {
      fontSize: "18px",
      lineHeight: "23px",
    }),
    ...(size === "largest" && {
      fontSize: "20px",
      lineHeight: "23px",
    }),

    // ...(type === "header" && {
    //   ...(size === "small" && {
    //     fontSize: "20px",
    //     lineHeight: "26px",
    //   }),
    //   ...(size === "medium" && {
    //     fontSize: "28px",
    //     lineHeight: "36px",
    //   }),
    //   ...(size === "large" && {
    //     fontSize: "36px",
    //     lineHeight: "47px",
    //   }),
    // }),
  })
);

export default TypographyStyled;
