import React from 'react';
import CTypography from '@site/src/components/typography';
import { Navigation } from "./components/navigation";
import { HeaderStyled, HideAbleBaseButton } from "./styled-header";
import hamburgerMenu from "../../assets/icons/hamburger-menu.svg";
import { ModalContext } from "@site/src/contexts/modal";
import { useContext, useEffect, useRef } from "react";
import useScrollingUp from "../../hooks/use-scrolling-up";
import LogoIcon from "../../assets/icons/Logo-header.svg";
import { CustomCursorContext } from "@site/src/contexts/cursor";
import { useLocation } from "react-router-dom";
// import { scrollToSection } from "./utils/scroll-section";
import { flushSync } from "react-dom";
import { ROUTENAMES } from "../../constants";


export default function NavbarWrapper(sectionRef,
  setToggleDrawer,
  containerVisibility,) {
    // let { setIsOpen } = useContext(ModalContext);
    // const { scrollingUp, screenBegining } = useScrollingUp();
    const { setType } = useContext(CustomCursorContext);
    const { pathname } = useLocation();
    // const navigate = useNavigate();
  
    // const executeScroll = ({ name }) => {
    //   if (pathname !== ROUTENAMES.RootPage) {
    //     flushSync(() => {
    //       navigate(ROUTENAMES.RootPage, { state: { name } });
    //     });
    //   } else {
    //     scrollToSection(sectionRef, name);
    //   }
    // };
  
    // const hideHeader = useRef(false);
    // useEffect(() => {
    //   const handleScroll = () => {
    //     if (pathname === ROUTENAMES.RootPage) {
    //       const goalComponent = sectionRef.current.AboutCorePass;
    //       const distanceToTop = goalComponent?.getBoundingClientRect()?.top;
    //       distanceToTop < 0
    //         ? (hideHeader.current = true)
    //         : (hideHeader.current = false);
    //     } else {
    //       const currScroll = window.pageYOffset;
    //       currScroll <= 0
    //         ? (hideHeader.current = false)
    //         : (hideHeader.current = true);
    //     }
    //   };
    //   window.addEventListener("scroll", handleScroll);
    //   return () => {
    //     window.removeEventListener("scroll", handleScroll);
    //   };
      // eslint-disable-next-line
    // }, [sectionRef]);
  return (
    
      <HeaderStyled
        scrollingUp={scrollingUp}
        screenBegining={screenBegining}
        containerVisibility={containerVisibility}
        // hideHeader={hideHeader.current}
      >
        <img
          src={LogoIcon}
          alt="Logo"
          className="logo-header header-entrance-anime"
          onClick={() => {
            executeScroll({ name: "Hero" });
          }}
          onMouseEnter={() => {
            setType("hover");
          }}
          onMouseLeave={() => {
            setType("");
          }}
        />
        <Navigation
          executeScroll={executeScroll}
          className="header-entrance-anime"
        />
        <div
          className="right-side-container header-entrance-anime"
          // ref={(e) => (sectionRef.current.Hero = e)}
        >
          <div className="magnet-container">
            <HideAbleBaseButton
              className="magnet-item"
              onClick={() => {
                setIsOpen(true);
              }}
              onMouseEnter={() => {
                setType("hover");
              }}
              onMouseLeave={() => {
                setType("");
              }}
            >
              <CTypography
                color="var(--White)"
                size="large"
                weight="bold"
                className="button-text"
              >
                Get started
              </CTypography>
            </HideAbleBaseButton>
          </div>
          <img
            src={hamburgerMenu}
            alt="hamburger-menu"
            className="hamburger-menu"
            onClick={() => {
              setToggleDrawer(true);
            }}
            onMouseEnter={() => {
              setType("hover");
            }}
            onMouseLeave={() => {
              setType("");
            }}
          />
        </div>
      </HeaderStyled>
    );
  };

 
