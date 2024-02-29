import CTypography from "../components/typography";
import { ModalContentStyled } from "./modal-content-styled";
import DownloadIcon from "../assets/icons/donwload-double-cell.png";
import closeButton from "../assets/icons/close-btn.svg";
import closeMobileButton from "../assets/icons/x-close.svg";
import corepassModalLogo from "../assets/icons/corepass-logo-with-name.svg";
import { useContext } from "react";
import { ModalContext } from "../contexts/modal";
import { CGradientButton } from "../components/button/gradient";
import { CustomCursorContext } from "../contexts/cursor";
import { GooglePlayButton } from "../components/button/google-play";
import { AppStoreButton } from "../components/button/apple-store";

export const ModalContent = () => {
  let { setIsOpen } = useContext(ModalContext);
  const { setType } = useContext(CustomCursorContext);
  return (
    <ModalContentStyled>
      <div className="content">
        <div className="tablet-header">
          <img src={corepassModalLogo} alt="corepassModalLogo" />
          <img
            src={closeMobileButton}
            alt="closeMobileButton"
            onClick={() => {
              setIsOpen(false);
            }}
            onMouseEnter={() => {
              setType("hover");
            }}
            onMouseLeave={() => {
              setType("");
            }}
          />
        </div>
        <div className="download-left-column">
          <CGradientButton className="modal-blue-button">
            <CTypography
              color="var(--Blue)"
              weight="bold"
              className="modal-button-text"
            >
              GET STARTED
            </CTypography>
          </CGradientButton>
          <div className="download-title-container">
            <CTypography
              color="var(--Black)"
              weight="bold"
              className="download-white-title"
            >
              Download now <br className="show-for-mobile" />
              for free,
              <span className="hide-for-tablet"> available</span>
            </CTypography>
            <CTypography
              color="var(--Black)"
              weight="bold"
              className="download-white-title gradient-font"
            >
              <span className="show-for-tablet"> available</span> worldwide
            </CTypography>
          </div>

          <div className="modal-button-container scale-restore">
            <GooglePlayButton />
            <AppStoreButton />
          </div>
        </div>
        <div className="download-right-column-container">
          <img
            src={DownloadIcon}
            alt="DownloadIcon"
            className="download-right-column"
          />
        </div>
      </div>
      <img
        src={closeButton}
        alt="closeButton"
        className="close-button"
        onClick={() => {
          setIsOpen(false);
        }}
        onMouseEnter={() => {
          setType("hover");
        }}
        onMouseLeave={() => {
          setType("");
        }}
      />
      <img
        src={corepassModalLogo}
        alt="corepassModalLogo"
        className="corepass-modal-logo"
      />
    </ModalContentStyled>
  );
};
