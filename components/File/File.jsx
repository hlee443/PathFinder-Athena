import { useState } from 'react';
import styled from 'styled-components';
import Icon from "../Icon/Icon"

const FileCont = styled.div`
display:flex;
justify-content:center;
align-items:center;
font-size: ${props => props.size};
width: 10rem;
height: 11rem;
border-radius: 2rem;
background-color: ${props => props.color};
border: ${props => props.borderType};
border-style: dashed;
`;

const FileImage = styled.img`
width: 100%;
height: 13rem;
`

const BottomCont = styled.div`
width: 10rem;
height: 13rem;
`


export default function File({ text = "Title", size = "2.375rem", type = "default", borderType = "0px solid black", color = "#D9D9D9", buttonDisplay = "none" }) {

  const [isFileSaved, setIsFileSaved] = useState(false);

  return (
    <FileCont>
      {isFileSaved && <FileImage>

      </FileImage>
      }
      <BottomCont>
        <div>{text}</div>
        <Icon />
      </BottomCont>
    </FileCont>

  )
}
