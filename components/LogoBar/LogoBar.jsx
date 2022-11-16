import { colors, logoData, Flexbox } from "../../styles/globals";
import styled from "styled-components";
import { useRouter } from "next/router";
import { mediaQuery } from "../../MediaQuery/data";


const Logo = styled.img`
  width: 9.688rem;
  align-self: start;
  margin-left: 1rem;
  cursor: pointer;
`

const LogoBarCont= styled(Flexbox)`
  background-color: ${colors.backgroundWhite};
  width: 100vw;
  height: 6rem;
  border-bottom: solid 1px ${colors.lightGrey};

  @media ${mediaQuery.minWidth.mobile} {
    display: none;
  }
`

export default function LogoBar() {

  const r = useRouter();
  
  return <LogoBarCont>
    <Logo
      onClick={()=> r.push("/")}
      src={logoData.logoHorizontal} />
  </LogoBarCont>
};