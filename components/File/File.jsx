import styled from 'styled-components'

export default function File({text = "Title", size = "2.375rem", type = "default", borderType = "0px solid black", color = "#D9D9D9", buttonDisplay = "none"}) {

  var bottomContDisplay = "flex";

  if(type==="onlyBox"){
    bottomContDisplay = "none";
  }

  if(type==="addFile"){
    bottomContDisplay = "none"; 
    borderType = "3px solid black";
    color = "white";
    buttonDisplay = "flex"
  }

  const FileCont = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: ${size};
    width: 10rem;
    height: 11rem;
    border-radius: 2rem;
    background-color: ${color};
    border: ${borderType};
    border-style: dashed;
  `;
  
  const Cont = styled.div`
    width: 10rem;
    height: 13rem;
  `
  const BottomCont = styled.div`
    display: ${bottomContDisplay};
    justify-content:space-between;
  `
  const PlusButton = styled.div`
    display: ${buttonDisplay}};
  `

  return (
    <Cont>
      <FileCont>
        <PlusButton>
          +
        </PlusButton>
      </FileCont>
      <BottomCont>
        <div>{text}</div>
        <div>Icon</div>

      </BottomCont>
    </Cont>
  )
}
