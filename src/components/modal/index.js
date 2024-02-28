import React from "react";
import { IconButton, Fade } from "@mui/material";
import Icon from "../icon";
import CloseIcon from "../../assets/icons/close-btn.svg";

import {
  StyledDialog,
  Wrapper,
  ChildWrapper,
  TopWrapper,
  Title,
} from "./styled-modal";
import { useWindowSize } from "../../contexts/screen-size";

export const CModal = ({ isOpen, onClose, children, title, ...props }) => {
  // detect if width is less than 768px
  const { windowWidth } = useWindowSize();
  const isMobile = windowWidth < 992;

  return (
    <StyledDialog
      TransitionComponent={Fade}
      transitionDuration={150}
      fullScreen={isMobile ? true : false}
      open={isOpen || false}
      onClose={() => (onClose ? onClose() : null)}
      BackdropProps={{
        style: {
          background: "rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(20px)",
        },
      }}
      {...props}
    >
      <Wrapper>
        {title && onClose && (
          <TopWrapper>
            {title ? <Title>{title}</Title> : <div />}
            {onClose ? (
              <IconButton onClick={() => onClose()}>
                <Icon src={CloseIcon} />
              </IconButton>
            ) : (
              <></>
            )}
          </TopWrapper>
        )}
        <ChildWrapper>{children}</ChildWrapper>
      </Wrapper>
    </StyledDialog>
  );
};
