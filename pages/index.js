import styled from "styled-components";
import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
import SubHeader from "../components/Subheader/SubHeader";
import { colors, Flexbox, Wrapper, Container } from "../styles/globals";
import TabBar from "../components/TabBar/TabBar";
import Button from "../components/Button/Button";
import { faChevronDown, faUpload } from "@fortawesome/free-solid-svg-icons"
import Icon from "../components/Icon/Icon";
import { useRouter } from "next/router";
import { useState } from "react";
import Input from "../components/Input/Input";
import * as mainHandler from '../handlers/main';


const URLbox = styled(Flexbox)`
  background: ${colors.Background_White};
  border: 2px solid ${colors.DarkGrey};
  border-radius: 50px;
  width: 100%;
  justify-content: start;
`;

export default function Home() {
  const r = useRouter();
  const [inputType, setInputType] = useState("url");
  const [uploadedFile, setUploadedFile] = useState({
    fileObj: {},
    fileName: '',
    fileType: '',
    fileContent: ''
  })
  const [displayFileNameForm, setFileNameForm] = useState(false)

  function handleChange(e){
    e.preventDefault()

    setUploadedFile({
        ...uploadedFile,
        [e.target.name]: e.target.value
    })
  }

  function onFileSelect(e){

    const selectedFile = e.target.files[0]

    uploadedFile.fileName = selectedFile.name.split(".")[0]
    uploadedFile.fileType = selectedFile.name.slice((Math.max(0, selectedFile.name.lastIndexOf(".")) || Infinity) + 1)
    uploadedFile.fileObj = selectedFile

    setFileNameForm(true)
   
  }

  function onFileUpload(e){
    e.preventDefault()

    mainHandler.handleUpload(uploadedFile, (readFileContent) => {
        uploadedFile.fileContent = readFileContent
        setFileNameForm(false)
        
    })

}

  // const changeInputType = (newInputType) => {
  //   if (newInputType === "url") {
  //     setInputType("url");
  //   }
  //   else if (newInputType === "upload") {
  //     setInputType("upload");
  //   }
  // }

  return (
    <Flexbox>
      <NavBar></NavBar>
      <Wrapper>
        <Header text="Upload your study materials!"></Header>
        <SubHeader text="Enter URL or upload files, we will make it easier to understand for you."></SubHeader>
        <TabBar changePage ={() => inputType === "url" ? setInputType("upload") : setInputType("url")}></TabBar>
        {
          inputType === "url" && <URLbox dir="row">
            <Input
              border="none"
              borderRadius="3.125rem 0 0 3.125rem;"
              width="100%"
              placeholder="Paste your URL here.."
            ></Input>
            <Button
              borderRadius="0 3.125rem 3.125rem 0;"
              text="Customize"
              type="IconButton"
              ButtonFaIconName={faChevronDown}
            />
          </URLbox>
        }
        {
          displayFileNameForm && inputType === "upload" &&
          (
            <>

                <label htmlFor="uploadFileName">Enter the file Name</label>
                <Input
                  border="none"
                  borderRadius="3.125rem 0 0 3.125rem;"
                  width="100%"
                  placeholder="Enter file name"
                  type="text"
                  name="fileName"
                  value={uploadedFile.fileName}
                  onChange={handleChange}
                ></Input>
                <Button
                  borderRadius="0 3.125rem 3.125rem 0;"
                  text="Customize"
                  type="IconButton"
                  ButtonFaIconName={faChevronDown}
                />
                <Button 
                  text="Upload"
                  onClick={(e) => onFileUpload(e)} 
                />

            </>
          )
                  
        }
        {
          displayFileNameForm === false && inputType === "upload" &&
          (
            
              inputType === "upload" && <Container width="100%">
                <Icon faIconName={faUpload} ></Icon>
                <SubHeader text="Drag and drop a file here"></SubHeader>
                <p>or</p>

                <input id="fileInput" type="file" name="file" onChange={(e) => onFileSelect(e)} accept=".txt"/>

                <Button text="Choose a file"></Button>
              </Container>
            
          )
        }
      </Wrapper>
      {inputType === "url" && <Button text="upload" type="default" />}
    </Flexbox>
  );
};
