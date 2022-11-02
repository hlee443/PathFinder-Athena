import Icon from "../Icon/Icon";
import styled from "styled-components";
import { faVolumeHigh, faXmark } from "@fortawesome/free-solid-svg-icons";
import { colors, Container, Flexbox, BodyText } from "../../styles/globals";

const TopSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const TopSectionLeft = styled.div`
  display: flex;
  flex-direction: row;
`;

const DictionaryCont = styled(Flexbox)`
  top: 6rem;
  right: 6rem;
  width: 400px;
  position: absolute;
`;

const Word = styled.div`
  font-weight: bold;
  display: flex;
`;

const IconCont = styled.div`
  margin-left: 0.5rem;
`;

export default function Dictionary({
  word = "word",
  wordDefinition = "word definition",
  onClose = () => {},
}) {
  return (
    <DictionaryCont>
      <Container backgroundColor={colors.backgroundYellow}>
        <TopSection>
          <TopSectionLeft>
            <Word>{word}</Word>
            <IconCont>
              <Icon faIconName={faVolumeHigh} size="0.875em"></Icon>
            </IconCont>
          </TopSectionLeft>
          <Icon handleClick={onClose} faIconName={faXmark}></Icon>
        </TopSection>

        <BodyText>{wordDefinition}</BodyText>
      </Container>
    </DictionaryCont>
  );
}

// This is temporary for MVP

// const TopSection = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   width: 80%;
//   margin-top: -4rem;
// `;

// const TopSectionLeft = styled.div`
//   display: flex;
//   flex-direction: row;
// `;

// const StyledPopUp = styled.div`
//   border: none;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   background-color: ${(props) => props.backgroundColor || "#FFFEF6"};
//   border-radius: ${(props) => props.borderRadius || "2.125rem"};
//   width: ${(props) => props.width || "15rem"};
//   height: ${(props) => props.height || "8.875rem"};
//   font-size: ${(props) => props.fontSize};
//   margin-bottom: 2rem;
//   position: absolute;
// `;
// // position: absolute -- temporary for mvp???

// const Word = styled.div`
//   font-weight: bold;
//   display: flex;
// `;

// const IconCont = styled.div`
//   margin-left: 0.5rem;
// `;

// const WordDefinition = styled.div`
//   display: flex;
//   width: 80%;
// `;

// export default function Dictionary({
//   backgroundColor = colors.backgroundCream,
//   word = "word",
//   wordDefinition = "word definition",
//   onClose = () => {}
// }) {
//   return (
//     <StyledPopUp
//       backgroundColor={backgroundColor}
//       height="10rem"
//       width="20rem"
//       borderRadius="1rem"
//     >
//       <TopSection>
//         <TopSectionLeft>
//           <Word>{word}</Word>
//           <IconCont>
//             <Icon faIconName={faVolumeHigh} size="0.875em"></Icon>
//           </IconCont>
//         </TopSectionLeft>
//         <Icon handleClick={onClose} faIconName={faXmark}></Icon>
//       </TopSection>

//       <WordDefinition>{wordDefinition}</WordDefinition>
//     </StyledPopUp>
//   );
// }
