import styled from 'styled-components'

export const Wrapper = styled.div`
border-radius: ${(props) => (props.borderRadius ? props.borderRadius : "25px")};
border: ${(props) => (props.border ? props.border : "5px solid black")};     
background-color: ${(props) => (props.color ? props.color : 'white')};
text-align: center; 

  margin-right: auto;
  margin-left:  auto;

  min-height: 1rem;
  width: ${(props) => (props.width ? props.width : "60rem")};  

  padding-right: 10px; 
  padding-left:  10px; 
}

`