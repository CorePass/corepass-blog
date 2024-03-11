import { useContext, useLayoutEffect } from "react";
import {
  Definitions,
  Introduction,
  Collection,
  DataProtection,
  DataProcessors,
  DataRestoration,
  DataSharing,
  PrivacyQueries,
  ManagingData,
  PrivacyPolicyUpdates,
  LawfulProcessing,
  DataRights,
  PersonalData,
  DataDisclosure,
  DataTransfer,
} from "./data";
import {
  Divider,
  ItemBodyBlack,
  ItemBodyBlue,
  ItemBodyGrey,
  ItemBodyListOneCol,
  ItemContainer,
  ItemContainerWithSubHeader,
  ItemTitle,
  ItemTitlePrefix,
  ItemsSubSection,
  ListItem,
  MainTitle,
  StyledTable,
  TableContainer,
  TermsStyled,
  TitleWrapper,
} from "./privacy-styled";
import { useLocation } from "react-router-dom";
import { CGradientButton } from "../components/button/gradient";
import CTypography from "@site/src/components/typography";
import { CustomCursorContext } from "@site/src/contexts/cursor";

export const PrivacyPolicy = () => {
  const { pathname } = useLocation();
  const { setType } = useContext(CustomCursorContext);
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <TermsStyled>
      <TitleWrapper>
        <CGradientButton className="privacy-badge">
          <CTypography
            color="var(--Blue)"
            weight="bold"
            className="privacy-button-text"
          >
            Legal terms
          </CTypography>
        </CGradientButton>
        <MainTitle color="var(--Black)" weight="bold" className="black-title">
          Privacy Policy
        </MainTitle>
        <ItemBodyGrey>Last Updated: 20.9.2023</ItemBodyGrey>
      </TitleWrapper>
      <ItemContainer>
        <ItemTitle>
          <ItemTitlePrefix> 1.</ItemTitlePrefix>
          {Introduction.title}
        </ItemTitle>
        <ItemBodyGrey>{Introduction.body}</ItemBodyGrey>
        <ItemBodyGrey>{Introduction.body2}</ItemBodyGrey>
        <ItemBodyGrey>{Introduction.body3}</ItemBodyGrey>
        <ItemBodyGrey>
          {Introduction.body4}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={Introduction.body4Link}
            onMouseEnter={() => {
              setType("hover");
            }}
            onMouseLeave={() => {
              setType("");
            }}
          >
            {Introduction.body4Link}
          </a>
        </ItemBodyGrey>
        <ItemBodyGrey>
          {Introduction.body5}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={Introduction.body5Link}
            onMouseEnter={() => {
              setType("hover");
            }}
            onMouseLeave={() => {
              setType("");
            }}
          >
            {Introduction.body5Link}
          </a>
        </ItemBodyGrey>
        <ItemBodyGrey>
          {Introduction.body6}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={Introduction.body6Link}
            onMouseEnter={() => {
              setType("hover");
            }}
            onMouseLeave={() => {
              setType("");
            }}
          >
            {Introduction.body6Link}
          </a>
        </ItemBodyGrey>
        <ItemBodyGrey>{Introduction.body7}</ItemBodyGrey>
      </ItemContainer>
      <ItemContainerWithSubHeader>
        <ItemTitle>
          <ItemTitlePrefix> 2.</ItemTitlePrefix>
          {Definitions.title}
        </ItemTitle>
        {Definitions.list?.map((item, index) => (
          <ItemsSubSection key={index}>
            <ItemBodyBlue>{item.title}</ItemBodyBlue>
            <Divider />
            <ItemBodyGrey>{item.body}</ItemBodyGrey>
            {item?.List && (
              <ItemBodyListOneCol>
                {item?.List?.map((listItem, index) => (
                  <ListItem key={index} className={`item${index + 1}`}>
                    {<span>{listItem}</span>}
                  </ListItem>
                ))}
              </ItemBodyListOneCol>
            )}
          </ItemsSubSection>
        ))}
      </ItemContainerWithSubHeader>
      <ItemContainer>
        <ItemTitle>
          <ItemTitlePrefix> 3.</ItemTitlePrefix>
          {LawfulProcessing.title}
        </ItemTitle>
        <ItemBodyGrey>{LawfulProcessing.body}</ItemBodyGrey>
        <ItemBodyGrey>{LawfulProcessing.body2}</ItemBodyGrey>
        <ItemBodyListOneCol>
          {LawfulProcessing.list?.map((item, index) => (
            <ListItem key={index} className={`item${index + 1}`}>
              {
                <>
                  <span>{item.title}</span>
                  <span className="grey-item-body">{item.body}</span>
                </>
              }
            </ListItem>
          ))}
        </ItemBodyListOneCol>
      </ItemContainer>
      <ItemContainer>
        <ItemTitle>
          <ItemTitlePrefix> 4.</ItemTitlePrefix>
          {DataRights.title}
        </ItemTitle>
        <ItemBodyGrey>{DataRights.body}</ItemBodyGrey>
        <ItemBodyListOneCol>
          {DataRights.list?.map((item, index) => (
            <ListItem key={index} className={`item${index + 1}`}>
              {<span>{item}</span>}
            </ListItem>
          ))}
        </ItemBodyListOneCol>
        <ItemBodyGrey>{DataRights.body2}</ItemBodyGrey>
      </ItemContainer>
      <ItemContainer>
        <ItemTitle>
          <ItemTitlePrefix> 5.</ItemTitlePrefix>
          {Collection.title}
        </ItemTitle>
        <ItemBodyGrey>{Collection.body}</ItemBodyGrey>
        <ItemBodyGrey>{Collection.body2}</ItemBodyGrey>
        <ItemBodyListOneCol>
          {Collection.list?.map((item, index) => (
            <ListItem key={index} className={`item${index + 1}`}>
              {<span>{item}</span>}
            </ListItem>
          ))}
        </ItemBodyListOneCol>
        <ItemBodyGrey>{Collection.body3}</ItemBodyGrey>
        <ItemBodyGrey>{Collection.body4}</ItemBodyGrey>
        <ItemBodyListOneCol>
          {Collection.list?.map((item, index) => (
            <ListItem key={index} className={`item${index + 1}`}>
              {<span>{item}</span>}
            </ListItem>
          ))}
        </ItemBodyListOneCol>
        <ItemBodyGrey>{Collection.body5}</ItemBodyGrey>
        <ItemBodyGrey>{Collection.body6}</ItemBodyGrey>
      </ItemContainer>
      <ItemContainer>
        <ItemTitle>
          <ItemTitlePrefix> 6.</ItemTitlePrefix>
          {PersonalData.title}
        </ItemTitle>
        <ItemBodyGrey>{PersonalData.body}</ItemBodyGrey>
        <ItemBodyListOneCol>
          {PersonalData.list?.map((item, index) => (
            <ListItem key={index} className={`item${index + 1}`}>
              {<span>{item}</span>}
            </ListItem>
          ))}
        </ItemBodyListOneCol>
      </ItemContainer>
      <ItemContainer>
        <ItemTitle>
          <ItemTitlePrefix> 7.</ItemTitlePrefix>
          {DataDisclosure.title}
        </ItemTitle>
        <ItemBodyGrey>{DataDisclosure.body}</ItemBodyGrey>
        <ItemBodyListOneCol>
          {DataDisclosure.list?.map((item, index) => (
            <ListItem key={index} className={`item${index + 1}`}>
              {<span>{item}</span>}
            </ListItem>
          ))}
        </ItemBodyListOneCol>
      </ItemContainer>
      <ItemContainer>
        <ItemTitle>
          <ItemTitlePrefix> 8.</ItemTitlePrefix>
          {DataProcessors.title}
        </ItemTitle>
        <ItemBodyGrey>{DataProcessors.body}</ItemBodyGrey>
        <TableContainer>
          <StyledTable>
            <thead>
              <tr>
                {DataProcessors.table.header.map((item, index) => (
                  <th key={index}>{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {DataProcessors.table.rows.map((item, index) => (
                <tr key={index}>
                  <td>
                    <ItemBodyBlack>{item.name}</ItemBodyBlack>
                  </td>
                  <td>
                    <ItemBodyGrey>{item.function}</ItemBodyGrey>
                  </td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </TableContainer>
      </ItemContainer>
      <ItemContainer>
        <ItemTitle>
          <ItemTitlePrefix> 9.</ItemTitlePrefix>
          {DataTransfer.title}
        </ItemTitle>
        <ItemBodyGrey>{DataTransfer.body}</ItemBodyGrey>
      </ItemContainer>
      <ItemContainer>
        <ItemTitle>
          <ItemTitlePrefix> 10.</ItemTitlePrefix>
          {DataProtection.title}
        </ItemTitle>
        <ItemBodyGrey>{DataProtection.body}</ItemBodyGrey>
      </ItemContainer>
      <ItemContainer>
        <ItemTitle>
          <ItemTitlePrefix> 11.</ItemTitlePrefix>
          {DataRestoration.title}
        </ItemTitle>
        <ItemBodyGrey>{DataRestoration.body}</ItemBodyGrey>
      </ItemContainer>
      <ItemContainer>
        <ItemTitle>
          <ItemTitlePrefix> 12.</ItemTitlePrefix>
          {DataProtection.title}
        </ItemTitle>
        <ItemBodyGrey>{DataProtection.body}</ItemBodyGrey>
      </ItemContainer>
      <ItemContainer>
        <ItemTitle>
          <ItemTitlePrefix> 13.</ItemTitlePrefix>
          {DataRestoration.title}
        </ItemTitle>
        <ItemBodyGrey>{DataRestoration.body}</ItemBodyGrey>
      </ItemContainer>
      <ItemContainer>
        <ItemTitle>
          <ItemTitlePrefix> 14.</ItemTitlePrefix>
          {DataSharing.title}
        </ItemTitle>
        <ItemBodyGrey>{DataSharing.body}</ItemBodyGrey>
      </ItemContainer>
      <ItemContainer>
        <ItemTitle>
          <ItemTitlePrefix> 15.</ItemTitlePrefix>
          {ManagingData.title}
        </ItemTitle>
        <ItemBodyGrey>{ManagingData.body}</ItemBodyGrey>
      </ItemContainer>
      <ItemContainer>
        <ItemTitle>
          <ItemTitlePrefix> 16.</ItemTitlePrefix>
          {PrivacyQueries.title}
        </ItemTitle>
        <ItemBodyGrey>{PrivacyQueries.body}</ItemBodyGrey>
      </ItemContainer>
      <ItemContainer>
        <ItemTitle>
          <ItemTitlePrefix> 17.</ItemTitlePrefix>
          {PrivacyPolicyUpdates.title}
        </ItemTitle>
        <ItemBodyGrey>{PrivacyPolicyUpdates.body}</ItemBodyGrey>
      </ItemContainer>
    </TermsStyled>
  );
};
