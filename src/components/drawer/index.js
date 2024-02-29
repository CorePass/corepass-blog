import { useContext, useState } from "react";
import {
  NavigationStyled,
  StyledDrawer,
  StyledSocialSection,
  TitleWrapper,
} from "./drawer-styled";
import LogoIcon from "../../assets/icons/Logo-header.svg";
import CloseIcon from "../../assets/icons/x-close.svg";
import LinkedinIcon from "../../assets/icons/iconsLinkedin.svg";
import InstagramIcon from "../../assets/icons/iconsInstagram.svg";
import XIcon from "../../assets/icons/xIcon.svg";
import YoutubeIcon from "../../assets/icons/youtubeIcon.svg";
import FacebookIcon from "../../assets/icons/facebookIcon.svg";
import CTypography from "../typography";
import { CustomCursorContext } from "../../contexts/cursor";
import { useWindowSize } from "../../contexts/screen-size";
import {
  Facebook_Link,
  Instagram_Link,
  Linkedin_Link,
  ROUTENAMES,
  X_Link,
  YouTube_Link,
} from "../../constants";
// import { scrollToSection } from "../../containers/header/utils/scroll-section";
import { useLocation, useNavigate } from "react-router-dom";
import { flushSync } from "react-dom";
export const CustomDrawer = ({ toggleDrawer, setToggleDrawer, sectionRef, navigationItems }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const { setType } = useContext(CustomCursorContext);
  const { pathname } = useLocation();
  // const { windowWidth } = useWindowSize();
  // const navigate = useNavigate();

  const onCloseHandler = () => {
    setToggleDrawer(false);
  };
  // const executeScroll = ({ name }) => {
  //   if (pathname !== ROUTENAMES.RootPage) {
  //     flushSync(() => {
  //       navigate(ROUTENAMES.RootPage, { state: { name } });
  //     });
  //   } else {
  //     scrollToSection(sectionRef, name, windowWidth);
  //   }
  // };
 

  const logoClickHandler = () => {
    setToggleDrawer(false);
    // executeScroll({ name: "Hero" });
  };

  const navigationItemsDisplay = navigationItems?.map?.(({ name }) => {
    return (
      <CTypography
        color="var(--River-bed)"
        size="small"
        weight="medium"
        className="nav-items"
        key={name}
        id={name}
        onClick={() => {
          setToggleDrawer(false);
          // executeScroll({ name: name });
        }}
        onMouseEnter={(e) => {
          setHoveredItem(e.target.id);
          setType("hover");
        }}
        onMouseLeave={(e) => {
          setHoveredItem(null);
          setType("");
        }}
      >
        {name}
      </CTypography>
    );
  });

  return (
    <StyledDrawer
      PaperProps={{
        sx: {
          width: "100%",
          direction: "ltr",
        },
      }}
      open={toggleDrawer}
      onClose={onCloseHandler}
    >
      <TitleWrapper>
        <LogoIcon
          alt="Logo"
          style={{ cursor: "pointer" }}
          onClick={logoClickHandler}
          onMouseEnter={() => {
            setType("hover");
          }}
          onMouseLeave={() => {
            setType("");
          }}
        />
        <CloseIcon
          alt="close"
          onClick={() => {
            setToggleDrawer(false);
          }}
          style={{ cursor: "pointer" }}
          onMouseEnter={() => {
            setType("hover");
          }}
          onMouseLeave={() => {
            setType("");
          }}
        />
      </TitleWrapper>
      <NavigationStyled hoveredItem={hoveredItem}>
        <div className="content-nav">{navigationItemsDisplay}</div>
      </NavigationStyled>
      <StyledSocialSection>
        {/* <img
          src={InstagramIcon}
          alt="InstagramIcon"
          onMouseEnter={() => {
            setType("hover");
          }}
          onMouseLeave={() => {
            setType("");
          }}
        />
        <img
          src={LinkedinIcon}
          alt="LinkedinIcon"
          onMouseEnter={() => {
            setType("hover");
          }}
          onMouseLeave={() => {
            setType("");
          }}
        /> */}

        <div
          className="magnet-container"
          onMouseEnter={() => {
            setType("hover");
          }}
          onMouseLeave={() => {
            setType("");
          }}
        >
          <a target="_blank" rel="noopener noreferrer" href={X_Link}>
           <XIcon alt="XIcon" className="magnet-item" />
          </a>
        </div>
        <div
          className="magnet-container"
          onMouseEnter={() => {
            setType("hover");
          }}
          onMouseLeave={() => {
            setType("");
          }}
        >
          <a target="_blank" rel="noopener noreferrer" href={Facebook_Link}>
           <FacebookIcon
              alt="FacebookIcon"
              className="magnet-item"
            />
          </a>
        </div>
        <div
          className="magnet-container"
          onMouseEnter={() => {
            setType("hover");
          }}
          onMouseLeave={() => {
            setType("");
          }}
        >
          <a target="_blank" rel="noopener noreferrer" href={YouTube_Link}>
           <YoutubeIcon alt="YoutubeIcon" className="magnet-item" />
          </a>
        </div>
        <div
          className="magnet-container"
          onMouseEnter={() => {
            setType("hover");
          }}
          onMouseLeave={() => {
            setType("");
          }}
        >
          <a target="_blank" rel="noopener noreferrer" href={Instagram_Link}>
            <InstagramIcon
              alt="InstagramIcon"
              className="magnet-item"
            />
          </a>
        </div>
        <div
          className="magnet-container"
          onMouseEnter={() => {
            setType("hover");
          }}
          onMouseLeave={() => {
            setType("");
          }}
        >
          <a target="_blank" rel="noopener noreferrer" href={Linkedin_Link}>
            <LinkedinIcon
              alt="LinkedinIcon"
              className="magnet-item"
            />
          </a>
        </div>
      </StyledSocialSection>
    </StyledDrawer>
  );
};
