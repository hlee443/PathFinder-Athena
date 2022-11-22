import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
import { Flexbox, Wrapper, Container } from "../styles/globals";
import ToolBar from "../components/ToolBar/ToolBar";
import Icon from "../components/Icon/Icon";
import Input from "../components/Input/Input";
import Content from "../components/Content/Content";
import styled from "styled-components";
import { faEllipsis, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MiniDropdown from "../components/MiniDropdown/MiniDropdown";
import { editFileDataArr } from "../components/MiniDropdown/data";
import * as mainHandler from "../handlers/main";
import Summary from "../components/Summary/Summary";
import * as ReactDomClient from 'react-dom/client';

const Title = styled(Flexbox)`
  align-self: flex-start;
  user-select: none;
  justify-content: space-between;
  width: 100%;
`;

export default function Converted() {
  const [dictionary, setDictionary] = useState(null);
  // props: file settings, -- probably -- file info, and url
  const router = useRouter();
  // MVP - get response of the handler.
  // Future - get response for Hermes (probably)
  // Props: get file settings and file info

  const [fileData, setFileData] = useState({});
  const [settingData, setSettingData] = useState({});
  const [libraryArray, setLibraryArray] = useState([]);
  const [typeArray, setTypeArray] = useState([]);
  const [folderArray, setFolderArray] = useState([]);
  const [dropdown, showDropdown] = useState(false);
  const [highlightedNode, setHighlightedNode] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [newFileName, setNewFileName] = useState("");
  const [test, setTest] = useState(0);
  const [summary, setSummary] = useState(false);
  const [selectedText, setSelectedText] = useState({});

  function handleBGColor(e) {
    setSettingData({
      ...settingData,
      background_colour: e.target.value,
    });
    console.log(settingData);
    updateTypeArray();
    console.log(typeArray);
  }

  function handleTypeface(e) {
    setSettingData({
      ...settingData,
      typeface: e.target.value,
    });
    updateTypeArray();
  }

  function handleFontSize(e) {
    setSettingData({
      ...settingData,
      font_size: e.target.value,
    });
    updateTypeArray();
  }

  function handleLineSpace(e) {
    setSettingData({
      ...settingData,
      line_space: e.target.value,
    });
    updateTypeArray();
  }

  function handleLetterSpace(e) {
    setSettingData({
      ...settingData,
      letter_space: e.target.value,
    });
    updateTypeArray();
  }

  function handleMiniDropdown() {
    dropdown === false ? showDropdown(true) : showDropdown(false);
  }

  async function handleSaveSetting() {
    let uploadSettingData = {
      settingData: {
        settingId: settingData.setting_id,
        backgroundColour: settingData.background_colour,
        typeface: settingData.typeface,
        fontSize: settingData.font_size,
        lineSpace: settingData.line_space,
        letterSpace: settingData.letter_space,
      },
    };
    console.log(uploadSettingData);
    setSettingData(await mainHandler.handleUpdateSetting(uploadSettingData));
  }

  async function handleNewFolder(newFolderName) {
    let uploadFolderData = {
      folderData: {
        userId: "9",
        folderName: newFolderName,
      },
    };
    await mainHandler.handleAddFolder(uploadFolderData);
    setFolderArray(await mainHandler.handleGetFoldersByUserId("9"));
    updateLibraryArray();
  }

  function updateTypeArray() {
    setTypeArray([
      { value: settingData.background_colour, handleChange: handleBGColor },
      { value: settingData.typeface, handleChange: handleTypeface },
      { value: settingData.font_size, handleChange: handleFontSize },
      { value: settingData.line_space, handleChange: handleLineSpace },
      { value: settingData.letter_space, handleChange: handleLetterSpace },
    ]);
  }

  function updateLibraryArray() {
    for (let i = 0; i < folderArray.length; i++) {
      setLibraryArray((arr) => [
        ...arr,
        {
          folder_name: folderArray[i].folder_name,
          handleClick: async () => {
            let uploadFileData = {
              fileData: {
                fileId: fileData.file_id,
                fileName: fileData.file_name,
                folderId: folderArray[i].folder_id,
              },
            };
            setFileData(await mainHandler.handleUpdateFile(uploadFileData));
          },
        },
      ]);
    }
  }

  function handleEdit() {
    if (isEditing) {
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  }
  const getFilenameValue = (e) => {
    setNewFileName(e.target.value);
    console.log("new file name", newFileName);
    console.log(e.target.value);
  };

  function t() {
    console.log("BEFORE SETTEST", test);
    setTest(1);
    console.log("AFTER SETTEST", test);
  }

  function handleSaveFileName() {
    // console.log(isEditing);
    // console.log("before setisediting");
    setIsEditing(false);
    console.log("newFileName", newFileName);
    const fileObject = {
      fileData: {
        fileId: fileData.file_id,
        fileName: newFileName,
        folderId: fileData.folder_id,
        fileContent: fileData.file_content,
      },
    };
    console.log(typeof newFileName);
    mainHandler.handleUpdateFile(fileObject);
    // console.log("after handleupdatefile");
  }

  function handleDelete() {
    mainHandler.handleDeleteFile(fileData.file_id);
    setIsEditing(false);
    router.push("/");
  }
  // function handleMoveFolder() {
  //   console.log("move folder");
  // }

  async function handleUpdateFileContent() {
    const newFileContent = document.querySelector(".file__content").innerHTML;

    const fileObject = {
      fileData: {
        fileId: fileData.file_id,
        fileName: newFileName,
        folderId: fileData.folder_id,
        fileContent: newFileContent,
      },
    };

    const updatedFileData = await mainHandler.handleUpdateFile(fileObject);
    console.log("updatedFileData", updatedFileData);
    setFileData(updatedFileData);
  }

  function moveSelectedHighlighted() {
    if (document.querySelector("#selectedNode__container")) {
      const prevSelectContainer = document.querySelector(
        "#selectedNode__container"
      );
      const parentContainer = prevSelectContainer.parentNode;
      while (prevSelectContainer.firstChild) {
        parentContainer.insertBefore(
          prevSelectContainer.firstChild,
          prevSelectContainer
        );
      }
      parentContainer.removeChild(prevSelectContainer);
    }
  }

  useEffect(() => {
    if (!router.query.fileData) {
      return;
    } else if (!router.query.settingData) {
      return;
    } else if (!router.query.folderArray) {
      return;
    }
    setFileData(JSON.parse(router.query.fileData));
    setFolderArray(JSON.parse(router.query.folderArray));
    setSettingData(JSON.parse(router.query.settingData));

    updateTypeArray();
    updateLibraryArray();

    setNewFileName(JSON.parse(router.query.fileData).file_name);
  }, []);

  const closeSummary = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const selectedElement = e.target.parentElement; // x icon because needs to know which summary component to delete

    const selectedSummaryComponent = selectedElement.closest(
      ".summarize__wrapper-container"
    );

    const grandParentElement = selectedElement.closest(
      "#selectedNode__container"
    )
      ? selectedElement.closest("#selectedNode__container")
      : selectedElement.closest(".selectedNode__highlighted"); // <selectenode__Hgihligt> xxx
    const selectedHighlightedNode = selectedElement;

    while (
      !selectedHighlightedNode.classList.contains("selectedNode__highlighted")
    ) {
      selectedHighlightedNode = selectedHighlightedNode.parentElement;
    }

    const highlightedContainer = selectedHighlightedNode.querySelector(
      ".selectedNode__highlighted > .highlighted__container"
    );

    selectedSummaryComponent.classList.add("summary--close"); // animation stuff
    setTimeout(() => {
      // async function

      selectedSummaryComponent.remove();
      grandParentElement.parentElement.replaceChild(
        highlightedContainer.firstChild,
        grandParentElement
      );
      grandParentElement.remove();

      handleUpdateFileContent();
    }, 600); // animation
  };

  function handleSummary() {
    // summary content received from api
    if (!summary) {
      try {
        setSummary(true);
        mainHandler.handleSummarize(selectedText.toString(), (res) => {
          console.log("res", res)
          const rangeCount = selectedText.rangeCount;

          if (rangeCount !== 0 || selectedText.toString() !== "") {
            console.log("summary clicked, call highlight");
            // console.log("highlight!");
            moveSelectedHighlighted();

            const selectedNodeContainer = document.createElement("div");
            const highlightedContainer = document.createElement("div");
            const highlightedNode = document.createElement("span");

            selectedNodeContainer.setAttribute("id", "selectedNode__container"); // 1
            highlightedContainer.className = "selectedNode__highlighted"; // 2
            highlightedNode.className = "highlighted__container"; // 3

            highlightedNode.style.backgroundColor = "#3df9b4";
            highlightedNode.style.color = "#000000";

            // #selectedNode__container > selectedNode__highlighted > highlighted__container (range node that contains the text) + summary container

            const range = selectedText.getRangeAt(0);

            range.surroundContents(highlightedNode);

            highlightedNode.parentNode.insertBefore(
              highlightedContainer,
              highlightedNode
            );
            highlightedContainer.appendChild(highlightedNode);

            highlightedContainer.parentNode.insertBefore(
              selectedNodeContainer,
              highlightedContainer
            );
            selectedNodeContainer.appendChild(highlightedContainer);

            // setHighlightedNode(highlightedNode); // save to useState and pass to prop

            const summaryComponent = (
              <Summary
                summarizedContent={res.data.summary}
                onClose={(e) => closeSummary(e)}
              />
            );

            const container = document.querySelector(
              "#selectedNode__container > .selectedNode__highlighted"
            );

            const summaryWrapperContainer = document.createElement("div");

            summaryWrapperContainer.classList.add(
              "summarize__wrapper-container"
            );

            container.appendChild(summaryWrapperContainer);

            const root = ReactDomClient.createRoot(
              document.querySelector(
                "#selectedNode__container .summarize__wrapper-container"
              )
            );

            root.render(summaryComponent);

            handleUpdateFileContent();

            setSummary(false);
          }
        }); // call handler for axios call
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    const saveSelection = () => {
      setSelectedText(window.getSelection());
      console.log("cliccck", window.getSelection().toString())
      file__content.removeEventListener("mouseup", saveSelection, false);
    };

    const file__content = document.querySelector(".file__content");
    file__content.addEventListener("mousedown", () => {
      file__content.addEventListener("mouseup", saveSelection, false);
    });
  });

  return (
    <Flexbox>
      <NavBar />
      <ToolBar
        typeArray={typeArray}
        libraryArray={libraryArray}
        handleNewFolder={handleNewFolder}
        handleSaveSetting={handleSaveSetting}
        // highlightedNode={highlightedNode}
        handleSummary={handleSummary}
        handleUpdateFileContent={handleUpdateFileContent}
      ></ToolBar>
      <Wrapper>
        {!isEditing && (
          <Title dir="row">
            <Header text={newFileName} />
            <Icon faIconName={faEllipsis} handleClick={handleMiniDropdown} />
            {dropdown && (
              <MiniDropdown
                arr={editFileDataArr}
                onEdit={() => {
                  console.log("clicking edit");
                  handleEdit();
                }}
                onDelete={() => {
                  console.log("clicking delete");
                  handleDelete();
                }}
                // onMoveFolder={()=>{console.log("clicking move folder");handleMoveFolder}}
              />
            )}
          </Title>
        )}
        {isEditing && (
          <Title dir="row">
            <Input
              type="text"
              value={newFileName}
              onChange={(e) => getFilenameValue(e)}
            />
            <Icon faIconName={faCheck} handleClick={handleSaveFileName} />
          </Title>
        )}

        <Container width="100%" backgroundColor={settingData.background_colour}>
          <Content
            className="file__content"
            fileData={fileData}
            settingData={settingData}
          ></Content>
        </Container>
      </Wrapper>
    </Flexbox>
  );
}
