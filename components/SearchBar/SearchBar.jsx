import styled from "styled-components";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBarCont = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
`

const InputBox = styled.input`
    width: 100%;
    height: 2.8rem;
    background: #f5f5f5;
    outline: none;
    border: none;
    border-radius: 1.625rem;
    padding: 0 3.5rem 0 1.5rem;
    font-size: 1rem;
`

const SearchButton = styled.button`
    width: 3.5rem;
    height: 2.8rem;
    margin-left: -3.5rem;
    background: none;
    border: none;
    outline: none;
`

export default function SearchBar() {
  return (
      <SearchBarCont> 
        <InputBox placeholder="search"> 
        </InputBox>
        <SearchButton>
          <FontAwesomeIcon icon={faMagnifyingGlass}/>
        </SearchButton>
      </SearchBarCont>
  );
}
