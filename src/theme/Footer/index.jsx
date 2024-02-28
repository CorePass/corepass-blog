import CTypography from "@site/src/components/typography";

import LinkedinIcon from "../../assets/icons/iconsLinkedin.svg";
import InstagramIcon from "../../assets/icons/iconsInstagram.svg";
import XIcon from "../../assets/icons/xIcon.svg";
import YoutubeIcon from "../../assets/icons/youtubeIcon.svg";
import FacebookIcon from "../../assets/icons/facebookIcon.svg";
import FooterLogo from "../../assets/icons/Logo-footer.svg";
import { FooterStyled } from "./footer-styled";
import { FooterNavigation } from "./components/footer-nav";
import { useContext } from "react";
import { CustomCursorContext } from "@site/src/contexts/cursor";
import {
  Facebook_Link,
  Instagram_Link,
  Linkedin_Link,
  X_Link,
  YouTube_Link,
 
} from "../../constants";


import { useThemeConfig } from "@docusaurus/theme-common";


export default function FooterWrapper( ) {
  const { setType } = useContext(CustomCursorContext);

 

  const { footer } = useThemeConfig();
  const { links } = footer

  let navigationItems = [];

  links.map((props) => (
    navigationItems.push({name: props.label})    
   
))

  return (
    
    
    <FooterStyled>
       <div className="upper-section">
     

      <FooterLogo alt="FooterLogo" className="footer-logo" 
      onMouseEnter={() => {
            setType("hover");
          }}
          onMouseLeave={() => {
            setType("");
          }}
         
          
          
          />
         
        
         

         <FooterNavigation navigationItems={navigationItems} />

         

      <div className="social-section">
      <div className="magnet-container"  onMouseEnter={() => {
              setType("hover");
            }}
            onMouseLeave={() => {
              setType("");
            }}>
               <a target="_blank" rel="noopener noreferrer" href={X_Link}>
              <XIcon alt="XIcon" className="magnet-item" />
            </a>
            </div>
      <div
            className="magnet-container">
               <a target="_blank" rel="noopener noreferrer" href={Facebook_Link}>
              <FacebookIcon alt="FacebookIcon" className="magnet-item" />
            </a>
            </div>
      <div
            className="magnet-container">
               <a target="_blank" rel="noopener noreferrer" href={YouTube_Link}>
              <YoutubeIcon alt="YoutubeIcon" className="magnet-item" />
            </a>
        </div>
        <div
            className="magnet-container">
               <a target="_blank" rel="noopener noreferrer" href={Instagram_Link}>
              <InstagramIcon alt="InstagramIcon" className="magnet-item" />
            </a>
        </div>
        <div
            className="magnet-container">
               <a target="_blank" rel="noopener noreferrer" href={Linkedin_Link}>
              <LinkedinIcon alt="LinkedinIcon" className="magnet-item" />
            </a>
        </div>
      </div>
      </div>
      
      <div className="bottom-section">
        <div className="footer-copyright">
          <CTypography
            weight="bold"
            color="var(--River-bed)"
            className="footer-text"
          >
            © 2023 CorePass. All Rights Reserved.
          </CTypography>
        </div>
        
        <div className="policy-condition-wrapper">
        
          <CTypography
            weight="bold"
            color="var(--River-bed)"
            className="footer-text hoverable"
           
          >
           Privacy policy 
          </CTypography>
        
          <div className="vertical-line"></div>
          {/* <a
            target="_blank"
            rel="noopener noreferrer"
            href={Terms_Conditions_Link}
          > */}
          <CTypography
            weight="bold"
            color="var(--River-bed)"
            className="footer-text hoverable"
            
          >
            Terms and Conditions
          </CTypography>
          {/* </a> */}
        </div>
      </div>
      
      
      </FooterStyled>
  
  
    
  );
}
