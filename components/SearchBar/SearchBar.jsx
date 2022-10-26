import styled from "styled-components";
import { colors, Flexbox } from "../../styles/globals";
import Input from "../Input/Input";
import Icon from "../Icon/Icon";
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const SearchBarCont = styled(Flexbox)`
background-color: ${colors.backgroundWhite};
border-radius: 50rem;
padding-right: 1rem;
height: 3.25rem;
border: 0.125rem solid ${colors.darkGray};
`
export default function SearchBar() {
  return (
    <SearchBarCont dir="row">
      <Input border="none" bgColor="transparent" placeholder="Search.."></Input>
      <Icon faIconName={faSearch}></Icon>
    </SearchBarCont>
  );
};
