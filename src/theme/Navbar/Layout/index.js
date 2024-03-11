import React from "react";
import clsx from "clsx";
import { useThemeConfig } from "@docusaurus/theme-common";
import {
  useHideableNavbar,
  useNavbarMobileSidebar,
} from "@docusaurus/theme-common/internal";
import { translate } from "@docusaurus/Translate";
import NavbarMobileSidebar from "@theme/Navbar/MobileSidebar";
import styles from "./styles.module.css";

import CTypography from "@site/src/components/typography";
import { Navigation } from "../components/navigation";
import { HeaderStyled, HideAbleBaseButton } from "../styled-header";
import HamburgerMenu from "../../../assets/icons/hamburger-menu.svg";
import { useContext, useState, useRef, useEffect } from "react";
import LogoIcon from "../../../assets/icons/Logo-header.svg";
import { CustomCursorContext } from "@site/src/contexts/cursor";
import { CustomDrawer } from "@site/src/components/drawer";
import { ModalProvider } from "@site/src/contexts/modal";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
// import { ROUTENAMES } from "../../constants";
import { useLocation } from "@docusaurus/router";

function NavbarBackdrop(props) {
  return (
    <div
      role="presentation"
      {...props}
      className={clsx("navbar-sidebar__backdrop", props.className)}
    />
  );
}
export default function NavbarLayout(sectionRef) {
  const [isOpen, setIsOpen] = useState(false);
  const { setType } = useContext(CustomCursorContext);
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const { pathname } = useLocation();

  const { items, logo } = useThemeConfig().navbar;

  const {
    navbar: { hideOnScroll, style },
  } = useThemeConfig();
  const mobileSidebar = useNavbarMobileSidebar();
  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);
  return (
    <nav
      ref={navbarRef}
      aria-label={translate({
        id: "theme.NavBar.navAriaLabel",
        message: "Main",
        description: "The ARIA label for the main navigation",
      })}
      className={clsx(
        "navbar",
        "navbar--fixed-top",
        hideOnScroll && [
          styles.navbarHideable,
          !isNavbarVisible && styles.navbarHidden,
        ],
        {
          "navbar--dark": style === "dark",
          "navbar--primary": style === "primary",
          "navbar-sidebar--show": mobileSidebar.shown,
        }
      )}
    >
      <HeaderStyled id="navbar" hideHeader={hideHeader}>
        <ModalProvider isOpen={isOpen} setIsOpen={setIsOpen}></ModalProvider>
        <a href={logo.href}>
          <LogoIcon
            alt={logo.alt}
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
      <NavbarBackdrop onClick={mobileSidebar.toggle} />
      <NavbarMobileSidebar />
    </nav>
  );
}
