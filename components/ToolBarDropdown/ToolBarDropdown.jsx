import styled from "styled-components";
import Icon from "../Icon/Icon";
import Header from "../Header/Header";
import Input from "../Input/Input";
import SubHeader from "../SubHeader/SubHeader";
import Button from "../Button/Button";
import { colors, Flexbox } from "../../styles/globals";
import {
  faClose,
  faFolder,
  faChevronRight,
  faFolderPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const DropdownCont = styled.div`
  border-radius: 3rem;
  //   background-color: ${colors.backgroundCream};
  width: fit-content;
  //   padding: 1rem;
  overflow: hidden;
`;

const DropdownDiv = styled.div`
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem 0.5rem 1rem;
  width: 100%;
  justify-content: space-between;
`;

const IconLeftDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export default function ToolBarDropdown() {
  return (
    <DropdownCont>
      <DropdownDiv backgroundColor={colors.primaryBlue}>
        <p>My Library</p>
        <Icon faIconName={faClose}></Icon>
      </DropdownDiv>
      <DropdownDiv backgroundColor={colors.backgroundCream}>
        <IconLeftDiv>
          <Icon faIconName={faFolder}></Icon>
          <p>1st folder</p>
        </IconLeftDiv>

        <Icon faIconName={faChevronRight}></Icon>
      </DropdownDiv>
      <DropdownDiv backgroundColor={colors.backgroundYellow}>
        <IconLeftDiv>
          <Icon faIconName={faFolder}></Icon>
          <p>2nd folder</p>
        </IconLeftDiv>

        <Icon faIconName={faChevronRight}></Icon>
      </DropdownDiv>
      <DropdownDiv>
        <Button
          text="New Folder"
          backgroundColor="transparent"
          type="IconButton"
          ButtonFaIconName={faFolderPlus}
        ></Button>
      </DropdownDiv>
    </DropdownCont>
  );
}
