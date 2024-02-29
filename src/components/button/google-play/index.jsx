import GooglePlayIcon from "../../../assets/icons/google-play-badge 1 .png";
import { StyledGooglePlay } from "./styled-google";
import { Google_Play_Link } from "../../../constants";
import { CustomCursorContext } from "../../../contexts/cursor";
import { useContext } from "react";
export const GooglePlayButton = ({ ...props }) => {
  const { setType } = useContext(CustomCursorContext);
  return (
    <a target="_blank" rel="noopener noreferrer" href={Google_Play_Link}>
      <StyledGooglePlay
        src={GooglePlayIcon}
        // className="download-google-play"
        onMouseEnter={() => {
          setType("hover");
        }}
        onMouseLeave={() => {
          setType("");
        }}
        {...props}
      ></StyledGooglePlay>
    </a>
  );
};
