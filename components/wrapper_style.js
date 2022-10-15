import styled from 'styled-components'

export const Wrapper = styled.div`
border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "25px")};
border: ${(props) => (props.border ? props.border : "5px solid black")};   
width: ${(props) => (props.width ? props.width : "940px")};   
height: ${(props) => (props.height ? props.height : "315px")};   
background-color: ${(props) => (props.color ? props.color : 'white')};
text-align: center; 
`