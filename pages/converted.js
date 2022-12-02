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
  top: 13rem;
  position: sticky;
  overflow-y: scroll;
  height: auto;
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
              //console.log(fileData);
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
    //console.log("new file name", newFileName);
    //console.log(e.target.value);
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
    //console.log("newFileName", newFileName);
    const fileObject = {
      fileData: {
        fileId: fileData.file_id,
        fileName: newFileName,
        folderId: fileData.folder_id,
        fileContent: fileData.file_content,
      },
    };
    //console.log(typeof newFileName);
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

  function updateFileData(fileData) {
    if (fileData && fileData.file_id) {
      const dbData = {
        fileData: {
          fileId: fileData.file_id,
          fileName: newFileName,
          folderId: fileData.folder_id,
          fileContent: fileData.file_content,
        },
      };
      mainHandler.handleUpdateFile(dbData, (res) =>
        console.log("file updated", res.data)
      );
    }
  }
  // function handleUpdateFileContent() {
  //   const newFileContent = document.querySelector(".file__content").innerHTML;

  //   const fileObject = {
  //     fileData: {
  //       fileId: fileData.file_id,
  //       fileName: newFileName,
  //       folderId: fileData.folder_id,
  //       fileContent: newFileContent,
  //     },
  //   };

  //   mainHandler.handleUpdateFile(fileObject, (res) => {
  //     //console.log("updatedFileData", res.data);
  //     //console.log("updatedFile content", res.data.file_content);
  //     setFileData(res.data);
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
            //console.log("keyword added", res);
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
    //console.log("SCROLL TO VIEW");
    const selectedSummary = document.getElementsByClassName(
      `parent-summary-container ${summaryId}`
    )[0];

    selectedSummary.scrollIntoView({
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
              //console.log("summary added", res.data);

              const summaryComponent = (
                <Summary
                  summarizedContent={res.data.summary_result}
                  // handleCloseSummary={handleCloseSummary}
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
              summaryContainer.classList.add("summarize__container-wrapper");
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
              //   `.parent-summary-container  .${highlightedNode.id}`
              // ).scrollIntoView({behavior: 'smooth',  block: 'center', inline: 'center'})

              handleLocateSummary(res.data.summary_id);

              setTimeout(function () {
                const newFileContent =
                  document.querySelector(".file__content").innerHTML;
                setFileData((fileData) => ({
                  ...fileData,
                  file_content: newFileContent,
                }));
                console.log(
                  "handle summary, file content updated",
                  fileData.file_id
                );
                // handleUpdateFileContent();
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

  function handleCloseSummary(id, e) {
    // e.preventDefault();
    // e.stopPropagation();
    let summaryId = id;
    let selectedSummaryComponent = null;
    let highlightedNode = null;
    if (summaryId && !e) {
      selectedSummaryComponent = document.getElementsByClassName(
        `parent-summary-container ${summaryId}`
      )[0];
      highlightedNode = document.getElementById(
        `${selectedSummaryComponent.classList[1]}`
      );
    } else if (!summaryId && e) {
      let selectedElement = e.target.parentElement; // x icon because needs to know which summary component to delete
      selectedSummaryComponent = selectedElement.closest(
        ".parent-summary-container"
      );
      summaryId = +selectedSummaryComponent.classList[2];
      highlightedNode = document.getElementById(
        `${selectedSummaryComponent.classList[1]}`
      );
    }
    let nodeArray = Array.from(highlightedNode.childNodes);
    nodeArray.forEach((node) => {
      selectedSummaryComponent.parentNode.insertBefore(
        node,
        selectedSummaryComponent
      );
    });
    // selectedSummaryComponent.classList.add("summary--close"); // animation
    const newSummaryArray = (summaryArray) =>
      [...summaryArray].filter((summary) => summary.summary_id != summaryId);
    setSummaryArray(newSummaryArray);
    // setSummaryArray(
    //   summaryArray.filter((summary) => summary.summary_id !== summaryId)
    // );
    mainHandler.handleDeleteSummary(summaryId, (res) => {
      const newHighlightIds = (highlightIds) =>
        [...highlightIds].filter((id) => id !== highlightedNode.id);
      setHighlightIds(newHighlightIds);

      mainHandler.handleDeleteHighlight(highlightedNode.id, (res) => {
        // setTimeout(() => { // let animation play first before removing everything
        selectedSummaryComponent.remove();
        highlightedNode.remove();
        setTimeout(function () {
          const newFileContent =
            document.querySelector(".file__content").innerHTML;
          setFileData((fileData) => ({
            ...fileData,
            file_content: newFileContent,
          }));
          console.log(
            "handle summary close, file content updated",
            fileData.file_content
          );
          //   handleUpdateFileContent();
        });
      });
    });
  }

  const handleHighlight = (colorObj, type, cb) => {
    if (selectedText) {
      let match = false;
      // check if user is only clicking on a highlighted node
      if (selectedText.toString().length === 0) {
        //console.log("no text selected", highlightIds);
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
              mainHandler.handleDeleteHighlight(selectedElement.id, (res) => {
                //console.log(res)
                selectedElement.remove();
                match = true;
              });
              setTimeout(function () {
                const newFileContent =
                  document.querySelector(".file__content").innerHTML;
                setFileData((fileData) => ({
                  ...fileData,
                  file_content: newFileContent,
                }));
                console.log(
                  "handle highlight click, file content updated",
                  fileData.file_id
                );
                // handleUpdateFileContent();
              });
            }
          }
        }
      }
      // check if user is selecting a node used in a summary
      if (selectedText.toString().length > 0) {
        //console.log("text selected", highlightIds);
        let newHighlightIds = [...highlightIds];
        for (const selectedId of highlightIds) {
          const selectedElement = document.getElementById(`${selectedId}`);
          const selectedSummary = document.getElementsByClassName(
            `${selectedId}`
          );
          //console.log("summary component", selectedSummary);
          if (selectedSummary[0]) {
            if (selectedText.containsNode(selectedElement, true)) {
              if (colorObj && colorObj.colorText !== "clear") {
                selectedElement.style.backgroundColor = colorObj.colorHex;
              }
              match = true;
            }
          } else if (
            (!selectedSummary[0] &&
              colorObj &&
              colorObj.colorText === "clear") ||
            (!selectedSummary[0] && highlightColor.colorHex === "clear")
          ) {
            if (selectedText.containsNode(selectedElement, true)) {
              let nodeArray = Array.from(selectedElement.childNodes);
              nodeArray.forEach((node) => {
                selectedElement.parentNode.insertBefore(node, selectedElement);
              });
              newHighlightIds = newHighlightIds.filter(
                (id) => id !== selectedElement.id
              );
              mainHandler.handleDeleteHighlight(selectedElement.id, (res) => {
                //console.log(res)
                selectedElement.remove();
                match = true;
              });
            }
          }
        }
        setHighlightIds(newHighlightIds);
        setTimeout(function () {
          console.log(
            "handle highlight drag, file content updated",
            fileData.file_id
          );
          const newFileContent =
            document.querySelector(".file__content").innerHTML;
          setFileData((fileData) => ({
            ...fileData,
            file_content: newFileContent,
          }));
          //handleUpdateFileContent();
        });
      }

      if (!match) {
        let newColorObj = colorObj;
        if (
          colorObj &&
          colorObj.colorText === "clear" &&
          type !== `alternate`
        ) {
          //console.log("no match and clear highlight");
          return;
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
          //console.log("making highlight", id);
          const highlightedNode = document.createElement("span");
          highlightedNode.classList.add("highlightnode");
          if (!newColorObj) {
            highlightedNode.style.backgroundColor = highlightColor.colorHex;
          } else {
            highlightedNode.style.backgroundColor = newColorObj.colorHex;
          }
          const range = selectedText.getRangeAt(0);
          try {
            range.surroundContents(highlightedNode);
          } catch (e) {
            console.log(e);
            return;
          }
          highlightedNode.id = id;
          let newHighlightIds = [...highlightIds, id];
          let dbData = {
            highlightData: {
              fileId: fileData.file_id,
              highlightId: id,
            },
          };
          mainHandler.handleAddHighlight(dbData, (res) => {
            //console.log(res)
            for (const selectedId of highlightIds) {
              const selectedElement = document.getElementById(`${selectedId}`);
              if (
                selectedText.containsNode(selectedElement, true) &&
                selectedId !== id
              ) {
                let nodeArray = Array.from(selectedElement.childNodes);
                nodeArray.forEach((node) => {
                  selectedElement.parentNode.insertBefore(
                    node,
                    selectedElement
                  );
                });
                newHighlightIds = newHighlightIds.filter(
                  (id) => id !== selectedElement.id
                );
                mainHandler.handleDeleteHighlight(selectedElement.id, (res) => {
                  //console.log(res)
                  selectedElement.remove();
                });
              }
            }
            setHighlightIds(newHighlightIds);
            // setTimeout(function () {
            const newFileContent =
              document.querySelector(".file__content").innerHTML;
            setFileData((fileData) => ({
              ...fileData,
              file_content: newFileContent,
            }));
            console.log(
              "handle highlight create, file content updated",
              fileData.file_id
            );
            //handleUpdateFileContent();
            // });
          });
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
    //console.log(selectedText.toString());
    handleHighlight(colorObj);
    // console.log('colorObj update', colorObj)
    // setHighlightColor(colorObj)
  }

  // USE EFFECTS

  useEffect(() => {
    if (!router.query.fileData) {
      router.push({ pathname: "/" });
      return;
    } else if (!router.query.settingData) {
      router.push({ pathname: "/" });
      return;
    } else if (!router.query.folderArray) {
      router.push({ pathname: "/" });
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
        //console.log(res);
        setKeywordArray(res.data);
      }
    );
    mainHandler.handleGetSummariesByFileId(
      JSON.parse(router.query.fileData).file_id,
      (res) => {
        //console.log(res);
        setSummaryArray(res.data);
      }
    );
    mainHandler.handleGetHighlightsByFileId(
      JSON.parse(router.query.fileData).file_id,
      (res) => {
        //console.log(res);
        setHighlightIds(res.data.map((highlight) => highlight.highlight_uuid));
      }
    );
    //console.log('use effect mouse up')
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
    //console.log('use effect mouse down')
    function eventListenerCallback(e) {
      e.preventDefault();
      let closeElement = e.target;
      if (closeElement.nodeName === "svg" || closeElement.nodeName === "path") {
        handleCloseSummary(null, e);
      }
    }
    // const file__content = document.querySelector(".file__content");
    file__content.addEventListener("click", eventListenerCallback, false);
  }, []);

  useEffect(() => {
    updateTypeArray(settingData);
  }, [settingData]);

  useEffect(() => {
    updateLibraryArray(folderArray);
  }, [folderArray]);

  useEffect(() => {
    updateFileData(fileData);
  }, [fileData]);

  const handleDownloadFile = () => {
    var elementHTML = document.querySelector(".file__content");

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

        // console.log(canvas.height + "  " + canvas.width);

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

  console.log("CURRENT HIHGLIGHT ARRAY", highlightIds);
  // console.log("CURRENT SUMMARY ARRAY", summaryArray);
  console.log("FILE DATA", fileData);

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
                      //console.log("clicking edit");
                      handleEdit();
                    }}
                    onDelete={() => {
                      //console.log("clicking delete");
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
