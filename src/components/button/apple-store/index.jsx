import AppStoreIcon from "../../../assets/icons/appstore-badge.svg";
import { App_Store_Link } from "../../../constants";
import { CustomCursorContext } from "../../../contexts/cursor";
import { useContext } from "react";
import { StyledAppStore } from "./styled-apple";
export const AppStoreButton = ({ ...props }) => {
  const { setType } = useContext(CustomCursorContext);
  return (
    <a target="_blank" rel="noopener noreferrer" href={App_Store_Link}>
      <StyledAppStore
        src={AppStoreIcon}
        onMouseEnter={() => {
          setType("hover");
        }}
        onMouseLeave={() => {
          setType("");
        }}
        {...props}
      ></StyledAppStore>
    </a>
  );
};
