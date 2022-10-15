import styled from 'styled-components'


var text = "Header"

const HeaderCont = styled.div`
font-size: 38px;
`


export default function Header() {
  return (
    <HeaderCont>
        <p>
        {text}
        </p>
    </HeaderCont>
  )
}