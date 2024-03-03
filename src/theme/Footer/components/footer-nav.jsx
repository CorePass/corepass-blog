import { useContext, useState } from "react";
import CTypography from "@site/src/components/typography";
import { FooterNavigationStyled } from "./footer-nav-styled";
import {CustomCursorContext } from "@site/src/contexts/cursor";
// import { Link } from "react-router-dom";




export const FooterNavigation = ({navigationItems }) => {
  const { setType } = useContext(CustomCursorContext);
  const [hoveredItem, setHoveredItem] = useState(null);
 
  const navigationItemsDisplay = navigationItems?.map?.(( item, index) => {
    return (
      <CTypography
        color="var(--River-bed)"
        size="small"
        weight="bold"
        className="nav-items"
        key={index}
        id={index}
       
        onMouseEnter={(e) => {
          setHoveredItem(e.target.id);
          setType("hover");
        }}
        onMouseLeave={(e) => {
          setHoveredItem(null);
          setType("");
        }}
      >
         <a href={item.href || item.to} style={{'color' : 'var(--River-bed)', 'textDecoration' : 'none'}}>{item.label}</a>
       
      </CTypography>
    );
  });
  return (
    <FooterNavigationStyled hoveredItem={hoveredItem}>
      {navigationItemsDisplay}
    </FooterNavigationStyled>
  );
};
