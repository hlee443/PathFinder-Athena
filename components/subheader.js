import styled from 'styled-components'

var text = "SubHeader"

const SubHeaderCont = styled.div`
font-size: 24px;
`

export default function SubHeader() {
  return (
    <SubHeaderCont>
        <p>
        {text}
        </p>
    </SubHeaderCont>
  )
}
