import NavBar from "../components/NavBar/NavBar";
import Header from "../components/Header/Header";
import { Flexbox, Wrapper, Container, colors } from "../styles/globals";
import ToolBar from "../components/ToolBar/ToolBar";
import Icon from "../components/Icon/Icon";
import Input from "../components/Input/Input";
import Content from "../components/Content/Content";
import SideBar from "../components/SideBar/SideBar";
import styled from "styled-components";
import {
  faEllipsis,
  faCheck,
  faSliders,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useEffect, useInsertionEffect, useState, useCallback } from "react";
import MiniDropdown from "../components/MiniDropdown/MiniDropdown";
import { editFileDataArr } from "../components/MiniDropdown/data";
import * as mainHandler from "../handlers/main";
import Summary from "../components/Summary/Summary";
import * as ReactDomClient from "react-dom/client";
import LogoBar from "../components/LogoBar/LogoBar";
import { mediaQuery } from "../MediaQuery/data";
import Button from "../components/Button/Button";
import Lottie from "lottie-react";
import LoadingAnimation from "../public/lotties/loading_dots.json";
import { v4 as uuidv4 } from "uuid";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const Layout = styled(Flexbox)`
  padding: 4rem;
  gap: 2rem;
  align-items: start;
  width: 100%;
  min-width: 100%;
  flex: 2 1;

  @media ${mediaQuery.maxWidth.mobile} {
    padding: 2rem;
  } ;
`;

const Title = styled(Flexbox)`
  user-select: none;
  justify-content: space-between;
  width: 100%;
`;

const DocCont = styled(Flexbox)`
  width: 85%;
  gap: 1rem;
  // height: 100vh;
  justify-content: center;
`;

const IconCont = styled(Flexbox)`
  position: relative;
  justify-content: space-between;
  width: 8%;
`;

const StickyCont = styled(Flexbox)`
  position: sticky;
  top: 0;
  z-index: 100;
`;

const SidebarCont = styled.div`
  overflow-y: scroll;
  height: 100%;
  flex-basis: 30vw;

  @media ${mediaQuery.maxWidth.tablet} {
    position: fixed;
    width: 100%;
    bottom: 0;
    height: 30vh;
  } ;
`;

export default function Converted() {
  const [dictionary, setDictionary] = useState(false);
  // props: file settings, -- probably -- file info, and url
  const router = useRouter();
  // MVP - get response of the handler.
  // Future - get response for Hermes (probably)
  // Props: get file settings and file info
  const [highlightColor, setHighlightColor] = useState({
    colorText: "yellow",
    colorHex: "#FCFF7C",
  });
  const [showSidebar, setShowSidebar] = useState(true);
  const [isActive, setIsActive] = useState();
  const [showIcon, setShowIcon] = useState(false);
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
  const [selectedText, setSelectedText] = useState("");
  const [keywordArray, setKeywordArray] = useState([]);
  const [highlightIds, setHighlightIds] = useState([]);
  const [summaryArray, setSummaryArray] = useState([]);

  function handleSidebar() {
    if (isActive) {
      setShowIcon(false);
      setShowSidebar(true);
    }
    if (!isActive) {
      setIsActive(false);
      setShowSidebar(false);
      setShowIcon(true);
    }
  }

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
    showDropdown(false);
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
      console.log("updatedFile content", res.data.file_content);
      setFileData(res.data);
    });
  }

  // useEffect(() => {
  //   if (!router.query.fileData) {
  //     return;
  //   } else if (!router.query.settingData) {
  //     return;
  //   } else if (!router.query.folderArray) {
  //     return;
  //   }
  //   setFileData(JSON.parse(router.query.fileData));
  //   const folderArray = JSON.parse(router.query.folderArray);
  //   setFolderArray(folderArray);
  //   const settingData = JSON.parse(router.query.settingData);
  //   setSettingData(settingData);
  //   setNewFileName(JSON.parse(router.query.fileData).file_name);
  //   mainHandler.handleGetKeywordsByFileId(
  //     JSON.parse(router.query.fileData).file_id,
  //     (res) => {
  //       console.log(res);
  //       setKeywordArray(res.data);
  //     }
  //   );
  //   mainHandler.handleGetSummariesByFileId(
  //     JSON.parse(router.query.fileData).file_id,
  //     (res) => {
  //       console.log(res);
  //       setSummaryArray(res.data);
  //     }
  //   );
  // }, []);

  // useEffect(() => {
  //   updateTypeArray(settingData);
  // }, [settingData]);

  // useEffect(() => {
  //   updateLibraryArray(folderArray);
  // }, [folderArray]);

  // const handleCloseSummary = (summaryId) => {

  //   mainHandler.handleDeleteSummary(summaryId, (res) => {
  //     console.log(res.data);

  //     const selectedSummaryComponent = document.getElementsByClassName(
  //       `summarize__wrapper-container ${summaryId}`
  //     )[0];

  //     selectedSummaryComponent.classList.add("summary--close"); // animation stuff

  //     const grandParentElement = selectedSummaryComponent.closest(
  //       "#selectedNode__container"
  //     )
  //       ? selectedSummaryComponent.closest("#selectedNode__container")
  //       : selectedSummaryComponent.closest(".selectedNode__highlighted");
  //     const selectedHighlightedNode = selectedSummaryComponent;

  //     while (
  //       !selectedHighlightedNode.classList.contains("selectedNode__highlighted")
  //     ) {
  //       selectedHighlightedNode = selectedHighlightedNode.parentElement;
  //     }

  //     const highlightedContainer = selectedHighlightedNode.querySelector(
  //       ".selectedNode__highlighted > .highlighted__container"
  //     );

  //     setTimeout(() => {
  //       // Delete highlight component and joining the original text back to normal
  //       grandParentElement.parentElement.replaceChild(
  //         highlightedContainer.firstChild,
  //         grandParentElement
  //       );
  //       grandParentElement.remove();

  //       // Delete summary component in the file__container
  //       selectedSummaryComponent.remove();

  //       // Delete the summary in sidebar
  //       setSummaryArray(
  //         summaryArray.filter((summary) => summary.summary_id !== summaryId)
  //       );

  //       handleUpdateFileContent();
  //     }, 600); // animation
  //   });
  // };

  // const closeDictionary = (id) => {
  //   mainHandler.handleDeleteKeyword(id, (res) => {
  //     setKeywordArray(res.data);
  //     setKeywordArray(
  //       keywordArray.filter((keyword) => keyword.keyword_id !== id)
  //     );
  //   });
  // };

  // function handleSummary() {
  //   // summary content received from api
  //   if (!summary) {
  //     try {
  //       setSummary(true);
  //       mainHandler.handleSummarize(selectedText.toString(), (res) => {
  //         console.log("res", res);
  //         const rangeCount = selectedText.rangeCount;

  //         if (rangeCount !== 0 || selectedText.toString() !== "") {
  //           console.log("summary clicked, call highlight");
  //           // console.log("highlight!");
  //           moveSelectedHighlighted();

  //           const selectedNodeContainer = document.createElement("div");
  //           const highlightedContainer = document.createElement("div");
  //           const highlightedNode = document.createElement("span");

  //           selectedNodeContainer.setAttribute("id", "selectedNode__container"); // 1
  //           highlightedContainer.className = "selectedNode__highlighted"; // 2
  //           highlightedNode.className = "highlighted__container"; // 3

  //           highlightedNode.style.backgroundColor = "#3df9b4";
  //           highlightedNode.style.color = "#000000";

  //           // #selectedNode__container > selectedNode__highlighted > highlighted__container (range node that contains the text) + summary container

  //           const range = selectedText.getRangeAt(0);

  //           range.surroundContents(highlightedNode);

  //           highlightedNode.parentNode.insertBefore(
  //             highlightedContainer,
  //             highlightedNode
  //           );
  //           highlightedContainer.appendChild(highlightedNode);

  //           highlightedContainer.parentNode.insertBefore(
  //             selectedNodeContainer,
  //             highlightedContainer
  //           );
  //           selectedNodeContainer.appendChild(highlightedContainer);

  //           // setHighlightedNode(highlightedNode); // save to useState and pass to prop

  //           let summaryData = {
  //             summaryData: {
  //               fileId: fileData.file_id,
  //               summaryContent: selectedText.toString(),
  //               summaryResult: `${res.data.summary}`,
  //             },
  //           };
  //           mainHandler.handleAddSummary(summaryData, (res) => {
  //             console.log("summary added", res.data);

  //             const summaryComponent = (
  //               <Summary
  //                 summarizedContent={res.data.summary_result}
  //                 handleCloseSummary={handleCloseSummary}
  //                 summaryId={res.data.summary_id}
  //               />
  //             );

  //             const container = document.querySelector(
  //               "#selectedNode__container > .selectedNode__highlighted"
  //             );

  //             const summaryWrapperContainer = document.createElement("div");

  //             summaryWrapperContainer.classList.add(
  //               "summarize__wrapper-container",
  //               `${res.data.summary_id}`
  //             );

  //             container.appendChild(summaryWrapperContainer);

  //             const root = ReactDomClient.createRoot(
  //               document.querySelector(
  //                 "#selectedNode__container .summarize__wrapper-container"
  //               )
  //             );

  //             root.render(summaryComponent);

  //             document.querySelector(
  //               "#selectedNode__container .summarize__wrapper-container"
  //             ).scrollIntoView({behavior: 'smooth',  block: 'center', inline: 'center'})

  //             handleUpdateFileContent();

  //             setSummaryArray([...summaryArray, res.data]);
  //             setSummary(false);
  //           });
  //         }
  //       }); // call handler for axios call
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // }

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

  function closeDictionary(id) {
    mainHandler.handleDeleteKeyword(id, (res) => {
      setKeywordArray(res.data);
      setKeywordArray(
        keywordArray.filter((keyword) => keyword.keyword_id !== id)
      );
    });
  }

  const handleLocateSummary = (summaryId) => {
    console.log("SCROLL TO VIEW");
    const selectedSummary = document.getElementsByClassName(
      `parent-summary-container ${summaryId}`
    )[0];

    selectedSummary.closest(".highlightnode").scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };

  // Selected and Dom

  function handleSummary() {
    // summary content received from api
    if (!summary) {
      try {
        handleHighlight(null, "alternate", (highlightedNode) => {
          if (!highlightedNode) {
            setSummary(false);
            return;
          }
          setSummary(true);
          mainHandler.handleSummarize(selectedText.toString(), (sumRes) => {
            let summaryData = {
              summaryData: {
                fileId: fileData.file_id,
                summaryContent: selectedText.toString(),
                summaryResult: `${sumRes.data.summary}`,
              },
            };
            mainHandler.handleAddSummary(summaryData, (res) => {
              console.log("summary added", res.data);

              const summaryComponent = (
                <Summary
                  summarizedContent={res.data.summary_result}
                  handleCloseSummary={handleCloseSummary}
                  summaryId={res.data.summary_id}
                />
              );
              // const summaryComponent = (
              //   <Summary
              //     summarizedContent={res.data.summary}
              //     onClose={(e) => closeSummary(e)}
              //   />
              // );
              //             summaryWrapperContainer.classList.add(
              //               "summarize__wrapper-container",
              //               `${res.data.summary_id}`
              //             );
              let highlitedContainer = document.createElement("div");
              const parentSummaryContainer = document.createElement("div");
              parentSummaryContainer.classList.add(
                "parent-summary-container",
                `${highlightedNode.id}`,
                `${res.data.summary_id}`
              );
              const summaryContainer = document.createElement("div");
              highlightedNode.parentNode.insertBefore(
                parentSummaryContainer,
                highlightedNode
              );
              parentSummaryContainer.appendChild(highlitedContainer);
              highlitedContainer.appendChild(highlightedNode);
              parentSummaryContainer.appendChild(summaryContainer);
              let root = ReactDomClient.createRoot(summaryContainer);
              root.render(summaryComponent);

              // document.querySelector(
              //   "#selectedNode__container .summarize__wrapper-container"
              // ).scrollIntoView({behavior: 'smooth',  block: 'center', inline: 'center'})

              setTimeout(function () {
                handleUpdateFileContent();
              });
              setSummaryArray([...summaryArray, res.data]);
              setSummary(false);
            }); // call handler for axios call
          });
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  function handleCloseSummary(summaryId) {
    // e.preventDefault();
    // e.stopPropagation();

    // let selectedElement = e.target.parentElement; // x icon because needs to know which summary component to delete
    // let selectedSummaryComponent = selectedElement.closest(".parent-summary-container");
    // let fileContent = document.querySelector('.file__content')
    let selectedSummaryComponent = document.getElementsByClassName(
      `parent-summary-container ${summaryId}`
    )[0];
    let highlightedNode = document.querySelector(
      `[id='${selectedSummaryComponent.classList[1]}']`
    );
    let nodeArray = Array.from(highlightedNode.childNodes);
    nodeArray.forEach((node) => {
      selectedSummaryComponent.parentNode.insertBefore(
        node,
        selectedSummaryComponent
      );
    });

    // selectedSummaryComponent.classList.add("summary--close"); // animation

    setSummaryArray(
      summaryArray.filter((summary) => summary.summary_id !== summaryId)
    );

    // BUG WITH STATE RIGHT HERE
    // NEED TO FIX ASAP

    // HIGHLIGHT IDS ARE ONE STATE BEHIND
    // FILTER DOESNT WORK BECAUSE OF THIS

    const newHighlightIds = (highlightIds) =>
      [...highlightIds].filter((id) => id !== highlightedNode.id);
    setHighlightIds(newHighlightIds);

    // setTimeout(() => { // let animation play first before removing everything
    selectedSummaryComponent.remove();
    highlightedNode.remove();
    // }, 600)
  }

  const handleHighlight = (colorObj, type, cb) => {
    if (selectedText) {
      let match = false;
      // check if user is only clicking on a highlighted node
      if (selectedText.toString().length === 0) {
        console.log("no text selected", highlightIds);
        for (const selectedId of highlightIds) {
          const selectedElement = document.getElementById(`${selectedId}`);
          const selectedSummary = document.getElementsByClassName(
            `${selectedId}`
          );
          if (selectedText.containsNode(selectedElement, true)) {
            if (colorObj && colorObj.colorText !== "clear") {
              selectedElement.style.backgroundColor = colorObj.colorHex;
              match = true;
            } else if (
              colorObj &&
              colorObj.colorText === "clear" &&
              !selectedSummary[0]
            ) {
              let nodeArray = Array.from(selectedElement.childNodes);
              nodeArray.forEach((node) => {
                selectedElement.parentNode.insertBefore(node, selectedElement);
              });
              setHighlightIds(
                highlightIds.filter((id) => id !== selectedElement.id)
              );
              selectedElement.remove();
              match = true;
            }
          }
        }
      }
      // check if user is selecting a node used in a summary
      if (selectedText.toString().length > 0) {
        console.log("text selected", highlightIds);
        let newHighlightIds = [...highlightIds];
        for (const selectedId of highlightIds) {
          const selectedElement = document.getElementById(`${selectedId}`);
          const selectedSummary = document.getElementsByClassName(
            `${selectedId}`
          );
          console.log("summary component", selectedSummary);
          if (selectedSummary[0]) {
            if (selectedText.containsNode(selectedElement, true)) {
              if (colorObj && colorObj.colorText !== "clear") {
                selectedElement.style.backgroundColor = colorObj.colorHex;
              }
              match = true;
            }
          } else if (
            !selectedSummary[0] &&
            colorObj &&
            colorObj.colorText === "clear"
          ) {
            if (selectedText.containsNode(selectedElement, true)) {
              let nodeArray = Array.from(selectedElement.childNodes);
              nodeArray.forEach((node) => {
                selectedElement.parentNode.insertBefore(node, selectedElement);
              });
              newHighlightIds = newHighlightIds.filter(
                (id) => id !== selectedElement.id
              );
              selectedElement.remove();
              match = true;
            }
          }
        }
        setHighlightIds(newHighlightIds);
      }

      if (!match) {
        let newColorObj = colorObj;
        if (
          colorObj &&
          colorObj.colorText === "clear" &&
          type !== `alternate`
        ) {
          return console.log("no match and clear highlight");
        } else if (
          highlightColor.colorText === "clear" &&
          type === `alternate`
        ) {
          newColorObj = { colorText: "yellow", colorHex: "#FCFF7C" };
          setHighlightColor(newColorObj);
        }
        const rangeCount = selectedText.rangeCount;
        if (
          rangeCount > 0 &&
          selectedText.toString() !== "" &&
          selectedText.toString().length > 0
        ) {
          let id = uuidv4();
          console.log("making highlight", id);
          const highlightedNode = document.createElement("span");
          highlightedNode.classList.add("highlightnode");
          if (!newColorObj) {
            highlightedNode.style.backgroundColor = highlightColor.colorHex;
          } else {
            highlightedNode.style.backgroundColor = newColorObj.colorHex;
          }
          const range = selectedText.getRangeAt(0);
          range.surroundContents(highlightedNode);
          highlightedNode.id = id;
          let newHighlightIds = [...highlightIds, id];
          for (const selectedId of highlightIds) {
            const selectedElement = document.getElementById(`${selectedId}`);
            if (
              selectedText.containsNode(selectedElement, true) &&
              selectedId !== id
            ) {
              let nodeArray = Array.from(selectedElement.childNodes);
              nodeArray.forEach((node) => {
                selectedElement.parentNode.insertBefore(node, selectedElement);
              });
              newHighlightIds = newHighlightIds.filter(
                (id) => id !== selectedElement.id
              );
              selectedElement.remove();
            }
          }

          setHighlightIds(newHighlightIds);

          // setHighlightIds([...highlightIds, id]);
          if (type === "alternate") {
            cb(highlightedNode);
          }
        }
      }
    }
  };

  function handleChangeHighlightColor(colorObj) {
    setHighlightColor(colorObj);
    console.log(selectedText.toString());
    handleHighlight(colorObj);
    // console.log('colorObj update', colorObj)
    // setHighlightColor(colorObj)
  }

  // USE EFFECTS

  useEffect(() => {
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
    mainHandler.handleGetKeywordsByFileId(
      JSON.parse(router.query.fileData).file_id,
      (res) => {
        console.log(res);
        setKeywordArray(res.data);
      }
    );
    mainHandler.handleGetSummariesByFileId(
      JSON.parse(router.query.fileData).file_id,
      (res) => {
        console.log(res);
        setSummaryArray(res.data);
      }
    );
  }, []);

  // useEffect(() => {
  //   console.log("fileid", fileData);
  //   mainHandler.handleGetKeywordsByFileId(fileData.file_id, (res) => {
  //     setKeywordArray(res.data);
  //   });
  // },[])

  // useEffect(() => {
  //   const saveSelection = () => {
  //     setSelectedText(window.getSelection());
  //     file__content.removeEventListener("mouseup", saveSelection, false);
  //   };

  useEffect(() => {
    updateTypeArray(settingData);
  }, [settingData]);

  useEffect(() => {
    updateLibraryArray(folderArray);
  }, [folderArray]);

  useEffect(() => {
    const file__content = document.querySelector(".file__content");
    file__content.addEventListener(
      "mouseup",
      () => {
        if (window.getSelection().toString() !== "") {
          setSelectedText(window.getSelection());
        }
      },
      false
    );
  }),
    [];

  console.log("CURRENT HIHGLIGH ARRAY", highlightIds);

  const handleDownloadFile = () => {
    // // write html file contents to .txt file
    // const element = document.createElement("a");
    // // convert file with html tags to plain text
    // const fileContent = htmlToText(fileData.file_content);
    // const file = new Blob([fileContent], {
    //   type: "text/plain",
    // });

    // element.href = URL.createObjectURL(file);
    // element.download = fileData.file_name;
    // document.body.appendChild(element); // Required for this to work in FireFox
    // element.click();

    // Source HTMLElement or a string containing HTML.
    // download pdf

    var elementHTML = document.querySelector(".file__content");
    console.log("PEEPEE", elementHTML.clientHeight);

    // const doc = new jsPDF({
    //   orientation: "p",
    //   unit: "px",
    //   format: "a4",
    //   hotfixes: ["px_scaling"],
    // });

    // html2canvas(elementHTML, {
    //   width: doc.internal.pageSize.getWidth(),
    //   height: doc.internal.pageSize.getHeight(),
    //   autoPaging: "text",
    // }).then((canvas) => {
    //   const img = canvas.toDataURL("image/png");

    //   doc.addImage(
    //     img,
    //     "PNG",
    //     140,
    //     10,
    //     doc.internal.pageSize.getWidth(),
    //     doc.internal.pageSize.getHeight()
    //   );
    //   doc.save("statement.pdf");
    // });

    //   doc.html(elementHTML, {
    //     callback: function (doc) {
    //       // Save the PDF
    //       doc.save(`${newFileName}.pdf`);
    //     },
    //     margin: [10, 10, 10, 10],
    //     x: 0,
    //     y: 0,
    //     autoPaging: "text",
    //     width: 180,
    //     windowWidth: 1080,
    //   });

    let HTML_Width = elementHTML.clientWidth;
    let HTML_Height = elementHTML.clientHeight;
    let top_left_margin = 15;
    let PDF_Width = HTML_Width + top_left_margin * 2;
    let PDF_Height = PDF_Width * 1.5 + top_left_margin * 2;
    let canvas_image_width = HTML_Width;
    let canvas_image_height = HTML_Height;
    let totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

    html2canvas(elementHTML, { allowTaint: true, autoPaging: "text" }).then(
      function (canvas) {
        canvas.getContext("2d");

        console.log(canvas.height + "  " + canvas.width);

        let imgData = canvas.toDataURL("image/jpeg", 1.0);
        let pdf = new jsPDF("p", "pt", [PDF_Width, PDF_Height]);
        pdf.addImage(
          imgData,
          "JPG",
          top_left_margin,
          top_left_margin,
          canvas_image_width,
          canvas_image_height
        );

        for (let i = 1; i <= totalPDFPages; i++) {
          pdf.addPage(PDF_Width.toString(), PDF_Height.toString());
          pdf.addImage(
            imgData,
            "JPG",
            top_left_margin,
            -(PDF_Height * i) + top_left_margin * 4,
            canvas_image_width,
            canvas_image_height
          );
        }

        pdf.save(`${newFileName}.pdf`);
      }
    );
  };

  return (
    <Flexbox>
      <StickyCont>
        <LogoBar />
        <NavBar />
        <ToolBar
          typeArray={typeArray}
          libraryArray={libraryArray}
          handleNewFolder={handleNewFolder}
          handleSaveSetting={handleSaveSetting}
          currentHighlightColor={highlightColor}
          handleChangeHighlightColor={handleChangeHighlightColor}
          handleDictionary={handleDictionary}
          handleSummary={handleSummary}
          handleDownloadFile={handleDownloadFile}
        />
      </StickyCont>
      {/* <DocCont dir="row"> */}
      <Layout dir="row" backgroundColor={colors.backgroundWhite}>
        <DocCont>
          {!isEditing && (
            <Title dir="row">
              <Header text={newFileName} />
              <IconCont dir="row">
                <Icon
                  size="2x"
                  faIconName={faEllipsis}
                  handleClick={handleMiniDropdown}
                />
                {!isActive && showIcon && (
                  <Icon
                    size="2x"
                    faIconName={faAnglesRight}
                    handleClick={() => {
                      setShowSidebar(true), setShowIcon(false);
                    }}
                  />
                )}
                {dropdown && (
                  <MiniDropdown
                    handleMouseLeave={() => showDropdown(false)}
                    onClose={() => {
                      showDropdown(false);
                    }}
                    position="absolute"
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
              </IconCont>
            </Title>
          )}
          {isEditing && (
            <Title dir="row">
              <Input
                type="text"
                value={newFileName}
                onChange={(e) => getFilenameValue(e)}
              />
              <Button
                backgroundColor={colors.buttonPrimaryBlue}
                text="Save"
                handleClick={handleSaveFileName}
              />
            </Title>
          )}
          <Container
            className="file__content"
            width="100%"
            height="100%"
            scroll="scroll"
            display="inline"
            backgroundColor={settingData.background_colour}
            fontSize={settingData.font_size}
            typeface={settingData.typeface}
            lineSpace={settingData.line_space}
            letterSpace={settingData.letter_space}
          >
            <Content fileData={fileData} />
          </Container>
        </DocCont>
        {/* <SidebarCont> */}
        {showSidebar && (
          <SideBar
            handleSidebar={handleSidebar}
            keywordArray={keywordArray}
            summaryArray={summaryArray}
            closeDictionary={closeDictionary}
            handleCloseSummary={handleCloseSummary}
            handleLocateSummary={handleLocateSummary}
          />
        )}
        {/* </SidebarCont> */}
      </Layout>

      {/* </DocCont> */}
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
