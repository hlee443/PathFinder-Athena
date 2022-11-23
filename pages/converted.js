import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
import { Flexbox, Wrapper, Container } from "../styles/globals";
import ToolBar from "../components/ToolBar/ToolBar";
import Icon from "../components/Icon/Icon";
import Input from "../components/Input/Input";
import Content from "../components/Content/Content";
import SideBar from "../components/SideBar/SideBar";
import styled from "styled-components";
import { faEllipsis, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useEffect, useInsertionEffect, useState } from "react";
import MiniDropdown from "../components/MiniDropdown/MiniDropdown";
import { editFileDataArr } from "../components/MiniDropdown/data";
import * as mainHandler from "../handlers/main";
import Summary from "../components/Summary/Summary";
import * as ReactDomClient from "react-dom/client";

const Title = styled(Flexbox)`
  align-self: flex-start;
  user-select: none;
  justify-content: space-between;
  width: 100%;
`;
const DocCont = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
`;

export default function Converted() {
  const [dictionary, setDictionary] = useState(false);
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
  // const [folderName, setFolderName] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [newFileName, setNewFileName] = useState("");
  const [test, setTest] = useState(0);
  const [summary, setSummary] = useState(false);
  const [selectedText, setSelectedText] = useState({});
  const [keywordArray, setKeywordArray] = useState([]);

  function handleBGColor(e) {
    e.preventDefault();
    const newSettingData = (settingData) => {
      return {
        ...settingData,
        background_colour: e.target.value,
      };
    };
    setSettingData(newSettingData);
  }

  function handleTypeface(e) {
    e.preventDefault();
    const newSettingData = (settingData) => {
      return {
        ...settingData,
        typeface: e.target.value,
      };
    };
    setSettingData(newSettingData);
  }

  function handleFontSize(e) {
    e.preventDefault();
    const newSettingData = (settingData) => {
      return {
        ...settingData,
        font_size: e.target.value,
      };
    };
    setSettingData(newSettingData);
  }

  function handleLineSpace(e) {
    e.preventDefault();
    const newSettingData = (settingData) => {
      return {
        ...settingData,
        line_space: e.target.value,
      };
    };
    setSettingData(newSettingData);
  }

  function handleLetterSpace(e) {
    e.preventDefault();
    const newSettingData = (settingData) => {
      return {
        ...settingData,
        letter_space: e.target.value,
      };
    };
    setSettingData(newSettingData);
  }

  function handleMiniDropdown() {
    dropdown === false ? showDropdown(true) : showDropdown(false);
  }

  function handleSaveSetting() {
    const uploadSettingData = (settingData) => {
      mainHandler.handleUpdateSetting({
        settingData: {
          settingId: settingData.setting_id,
          backgroundColour: settingData.background_colour,
          typeface: settingData.typeface,
          fontSize: settingData.font_size,
          lineSpace: settingData.line_space,
          letterSpace: settingData.letter_space,
        },
      });
      return settingData;
    };
    setSettingData(uploadSettingData);
  }

  function updateTypeArray(settingData) {
    setTypeArray([
      { value: settingData.background_colour, handleChange: handleBGColor },
      { value: settingData.typeface, handleChange: handleTypeface },
      { value: settingData.font_size, handleChange: handleFontSize },
      { value: settingData.line_space, handleChange: handleLineSpace },
      { value: settingData.letter_space, handleChange: handleLetterSpace },
    ]);
  }

  function handleNewFolder(newFolderName) {
    let uploadFolderData = {
      folderData: {
        userId: "9",
        folderName: newFolderName,
      },
    };
    mainHandler.handleAddFolder(uploadFolderData, (res) => {
      mainHandler.handleGetFoldersByUserId("9", (res) => {
        let newFolderArray = res.data;
        setFolderArray(newFolderArray);
        updateLibraryArray(newFolderArray);
      });
    });
  }

  function updateLibraryArray(folderArray) {
    setLibraryArray([]);
    for (let i = 0; i < folderArray.length; i++) {
      setLibraryArray((arr) => [
        ...arr,
        {
          folder_name: folderArray[i].folder_name,
          handleClick: () => {
            let uploadFileData = {
              fileData: {
                fileId: fileData.file_id,
                fileName: fileData.file_name,
                fileContent: fileData.file_content,
                folderId: folderArray[i].folder_id,
              },
            };
            mainHandler.handleUpdateFile(uploadFileData, (res) => {
              let fileData = res.data;
              console.log(fileData);
              setFileData(fileData);
            });

            // const uploadFile = () => {
            //   return mainHandler.handleUpdateFile(uploadFileData)
            // }
            // setFileData(uploadFile)
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

  // function t() {
  //   console.log("BEFORE SETTEST", test);
  //   setTest(1);
  //   console.log("AFTER SETTEST", test);
  // }

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

  function handleUpdateFileContent() {
    const newFileContent = document.querySelector(".file__content").innerHTML;

    const fileObject = {
      fileData: {
        fileId: fileData.file_id,
        fileName: newFileName,
        folderId: fileData.folder_id,
        fileContent: newFileContent,
      },
    };

    mainHandler.handleUpdateFile(fileObject, (res) => {
      console.log("updatedFileData", res.data);
      setFileData(res.data);
    });
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
    console.log("virus");
    if (!router.query.fileData) {
      return;
    } else if (!router.query.settingData) {
      return;
    } else if (!router.query.folderArray) {
      return;
    }
    setFileData(JSON.parse(router.query.fileData));
    const folderArray = JSON.parse(router.query.folderArray);
    setFolderArray(folderArray);
    const settingData = JSON.parse(router.query.settingData);
    setSettingData(settingData);
    setNewFileName(JSON.parse(router.query.fileData).file_name);
    console.log("FILEDAAYAYY", fileData);
    mainHandler.handleGetKeywordsByFileId(
      JSON.parse(router.query.fileData).file_id,
      (res) => {
        console.log(res)
        setKeywordArray(res.data);
      }
    );
  }, []);

  useEffect(() => {
    updateTypeArray(settingData);
  }, [settingData]);

  useEffect(() => {
    updateLibraryArray(folderArray);
  }, [folderArray]);

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

  const closeDictionary = (id) => {
    mainHandler.handleDeleteKeyword(id, (res) => {
      setKeywordArray(res.data);
      setKeywordArray(keywordArray.filter(keyword => keyword.keyword_id !== id))
    });
  };

  function handleSummary() {
    // summary content received from api
    if (!summary) {
      try {
        setSummary(true);
        mainHandler.handleSummarize(selectedText.toString(), (res) => {
          console.log("res", res);
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

  // function getKeywords() {
  //   console.log("fileid", fileData.file_id);
  //   mainHandler.handleGetKeywordsByFileId(fileData.file_id, (res) => {
  //     setKeywordArray(res.data);
  //   });
  // }

  function handleDictionary() {
    if (!dictionary) {
      try {
        setDictionary(true);
        mainHandler.handleDictionary(selectedText.toString(), (res) => {
          const { data } = res;
          const { definition } = data;
          const newDefinition = data[0].shortdef[0];
          let keywordData = {
            keywordData: {
              fileId: fileData.file_id,
              keywordName: selectedText.toString(),
              keywordDefinition: newDefinition,
            },
          };
          // add keyword to database
          // console.log(keywordData);
          mainHandler.handleAddKeyword(keywordData, (res) => {
            console.log("keyword added", res);
            setKeywordArray([...keywordArray, res.data]);
            setDictionary(false);
          });
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
  // useEffect(() => {
  //   console.log("fileid", fileData);
  //   mainHandler.handleGetKeywordsByFileId(fileData.file_id, (res) => {
  //     setKeywordArray(res.data);
  //   });
  // },[])

  useEffect(() => {
    const saveSelection = () => {
      setSelectedText(window.getSelection());
      console.log("cliccck", window.getSelection().toString());
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
        handleDictionary={handleDictionary}
        handleSummary={handleSummary}
        handleUpdateFileContent={handleUpdateFileContent}
      ></ToolBar>
      <DocCont>
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

          <Container
            className="file__content"
            width="100%"
            backgroundColor={settingData.background_colour}
          >
            <Content fileData={fileData} settingData={settingData}></Content>
          </Container>
        </Wrapper>
        <SideBar
          keywordArray={keywordArray}
          closeDictionary={closeDictionary}
        ></SideBar>
      </DocCont>

      {/* <DocCont>
        <Wrapper>
          <Title dir="row">
            <Header text={fileData.file_name} />
            <Icon faIconName={faEllipsis} handleClick={handleMiniDropdown} />
            {dropdown && <MiniDropdown arr={editFileDataArr} />}
          </Title>
          <Container
            width="100%"
            backgroundColor={settingData.background_colour}
          >
            <Content fileData={fileData} settingData={settingData}></Content>
          </Container>
        </Wrapper>
        <SideBar></SideBar>
      </DocCont> */}
    </Flexbox>
  );
}
