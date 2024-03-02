import { useContext, useState } from "react";
import CTypography from "@site/src/components/typography";
import { FooterNavigationStyled } from "./footer-nav-styled";
import {CustomCursorContext } from "@site/src/contexts/cursor";
import { Link } from "react-router-dom";




export const FooterNavigation = ({navigationItems }) => {
  const { setType } = useContext(CustomCursorContext);
  const [hoveredItem, setHoveredItem] = useState(null);
 
  const navigationItemsDisplay = navigationItems?.map?.(({ name, link }) => {
    return (
      <CTypography
        color="var(--River-bed)"
        size="small"
        weight="bold"
        className="nav-items"
        key={name}
        id={name}
       
        onMouseEnter={(e) => {
          setHoveredItem(e.target.id);
          setType("hover");
        }}
        onMouseLeave={(e) => {
          setHoveredItem(null);
          setType("");
        }}
      >
         <Link to = {link} style={{'color' : 'var(--River-bed)', 'textDecoration' : 'none'}}>{name}</Link>

      </CTypography>
    );
  });
  return (
    <FooterNavigationStyled hoveredItem={hoveredItem}>
      {navigationItemsDisplay}
    </FooterNavigationStyled>
  );
};
