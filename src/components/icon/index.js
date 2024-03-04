import { styled } from "@mui/material";

const CCIcon = styled("img")``;

const Icon = ({ src, ...props }) => {
  return <CCIcon src={src} {...props} />;
};

export default Icon;
