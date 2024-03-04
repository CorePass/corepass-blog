import React from "react";
import CTypography from "@site/src/components/typography";
import { Navigation } from "./components/navigation";
import { HeaderStyled, HideAbleBaseButton } from "./styled-header";
import HamburgerMenu from "../../assets/icons/hamburger-menu.svg";
import { useContext, useState, useRef, useEffect } from "react";
import LogoIcon from "../../assets/icons/Logo-header.svg";
import { CustomCursorContext } from "@site/src/contexts/cursor";
import { CustomDrawer } from "@site/src/components/drawer";
import { ModalProvider } from "@site/src/contexts/modal";
import { useThemeConfig } from "@docusaurus/theme-common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { ROUTENAMES } from "../../constants";
import { useLocation } from "react-router-dom";

export default function NavbarWrapper(sectionRef) {
  const [isOpen, setIsOpen] = useState(false);
  const { setType } = useContext(CustomCursorContext);
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const hideHeader = useRef(false);
  const { pathname } = useLocation();

  const { items } = useThemeConfig().navbar;

  const { siteConfig } = useDocusaurusContext();

  const title = siteConfig.title;

  (function hideOnScroll() {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-150px";
      }
      prevScrollpos = currentScrollPos;
    };
  })();

  return (
    <HeaderStyled id="navbar">
      <ModalProvider isOpen={isOpen} setIsOpen={setIsOpen}></ModalProvider>
      <a href="/">
        <LogoIcon
          alt={title}
          className="logo-header header-entrance-anime"
          onMouseEnter={() => {
            setType("hover");
          }}
          onMouseLeave={() => {
            setType("");
          }}
        />
      </a>
      <Navigation navigationItems={items} className="header-entrance-anime" />
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
        <HamburgerMenu
          alt="hamburger-menu"
          className="hamburger-menu"
          onClick={() => {
            setToggleDrawer(true);
            console.log(toggleDrawer);
          }}
          onMouseEnter={() => {
            setType("hover");
          }}
          onMouseLeave={() => {
            setType("");
          }}
        />
      </div>
      <CustomDrawer
        toggleDrawer={toggleDrawer}
        setToggleDrawer={setToggleDrawer}
        sectionRef={sectionRef}
        navigationItems={items}
      >
        <div
          onClick={() => {
            setToggleDrawer(false);
          }}
        ></div>
      </CustomDrawer>
    </HeaderStyled>
  );
}
