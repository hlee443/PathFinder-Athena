import styled from 'styled-components'

export default function Header({text = "Header", size = "2.375rem"}) {
  const HeaderCont = styled.h2`
    font-size: ${size};
  `;
  
  return (
    <HeaderCont>
        {text}
    </HeaderCont>
  )
}
