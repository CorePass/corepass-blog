import React from 'react';
import CTypography from '@site/src/components/typography';
import { Navigation } from "./components/navigation";
import { HeaderStyled, HideAbleBaseButton } from "./styled-header";
import HamburgerMenu from "../../assets/icons/hamburger-menu.svg";
import { useContext, useState } from "react";
import LogoIcon from "../../assets/icons/Logo-header.svg";
import { CustomCursorContext } from "@site/src/contexts/cursor";
import { CustomDrawer } from '@site/src/components/drawer';
import { ModalProvider } from '@site/src/contexts/modal';
import { useThemeConfig } from "@docusaurus/theme-common";







export default function NavbarWrapper(sectionRef) {
   
    const [isOpen, setIsOpen] = useState(false);
    const { setType } = useContext(CustomCursorContext);
    const [toggleDrawer, setToggleDrawer] = useState(false);


    const { navbar } = useThemeConfig();
    const { items } = navbar
    const {hideOnScroll} = navbar

    let navigationItems = [];

  items.map((props) => (
    navigationItems.push({name: props.label, link: props.to})    
   
))

console.log(hideOnScroll)

  return (
    
      <HeaderStyled
       
      >
        <ModalProvider isOpen={isOpen} setIsOpen={setIsOpen}></ModalProvider>
        <LogoIcon
          alt="Logo"
          className="logo-header header-entrance-anime"
          onMouseEnter={() => {
            setType("hover");
          }}
          onMouseLeave={() => {
            setType("");
          }}
        />
        <Navigation
        navigationItems={navigationItems}
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
         <HamburgerMenu
            alt="hamburger-menu"
            className="hamburger-menu"
            onClick={() => {
              setToggleDrawer(true);
              console.log(toggleDrawer)
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
                navigationItems={navigationItems}
              >
                <div
                  onClick={() => {
                    setToggleDrawer(false);
                  }}
                ></div>
              </CustomDrawer>

      </HeaderStyled>
    );
  };

 
