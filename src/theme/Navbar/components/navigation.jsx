import { useContext, useState } from "react";
import CTypography from '@site/src/components/typography';
import { NavigationStyled } from "./navigation-styled";
import { CustomCursorContext } from "@site/src/contexts/cursor";

export const Navigation = ({ navigationItems }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const { setType } = useContext(CustomCursorContext);
  

  const navigationItemsDisplay = navigationItems?.map?.(({ name }) => {
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
        {name}
      </CTypography>
    );
  });
  return (
    <NavigationStyled hoveredItem={hoveredItem}>
      {navigationItemsDisplay}
    </NavigationStyled>
  );
};