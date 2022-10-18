import styled from 'styled-components'


export default function SubHeader({ text="SubHeader", size="1.5rem" }) {
  const SubHeaderCont = styled.h1`
    font-size: ${size};
  `;

  return (
    <SubHeaderCont>
        {text}
    </SubHeaderCont>
  )
}