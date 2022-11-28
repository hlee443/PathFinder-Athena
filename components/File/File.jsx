import { useEffect, useState } from "react";
import styled from "styled-components";
import { colors, Flexbox, BodyText } from "../../styles/globals";
import Icon from "../Icon/Icon";
import { faEllipsisVertical, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Input from "../Input/Input";
import Button from "../Button/Button";
import * as mainHandler from "../../handlers/main";
import { mediaQuery } from "../../MediaQuery/data";
import MiniDropdown from "../MiniDropdown/MiniDropdown";
import { editFileDataArr } from "../MiniDropdown/data";
import { motion } from "framer-motion";

const FileCont = styled(Flexbox)`
  align-items: start;
  width: 9rem;
  position: relative;
  justify-content: space-between;
  height: auto;

  @media ${mediaQuery.minWidth.tablet} {
    width: 12rem;
  } ;
`;

const Title = styled.p`
  font-weight: bold;
  word-break: break-word;
  white-space: normal;
`;

const Preview = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  padding: 1rem;
  border-radius: 2rem;
  background-color: ${(props) =>
    props.backgroundColor || colors.backgroundWhite};
  border: 0.188rem ${(props) => props.border || "dashed"} ${colors.darkGray};
  cursor: pointer;
  width: 100%;
  min-height: 10rem;

  :hover {
    background-color: ${colors.opacity};
    border: 0.188rem solid ${colors.primaryBlue};
  }

  @media ${mediaQuery.minWidth.mobile} {
    height: 10rem;
  }

  @media ${mediaQuery.minWidth.tablet} {
    height: 14rem;
  } ;
`;

const BottomCont = styled(Flexbox)`
  width: 100%;
  min-width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 0.5rem;
`;

export default function File({
  fileName = "Title",
  // type = "default",
  fileId = null,
  folderId = null,
  fileContent = null,
  handleClick = () => {},
  handleDelete = () => {},
}) {
  const r = useRouter();

  const [isEditing, setIsEditing] = useState(false);
  const [newFileName, setNewFileName] = useState(fileName);
  const [newFolderId, setNewFolderId] = useState(folderId);
  const [isHover, setIsHover] = useState(false);
  const [showMiniDropdown, setShowMiniDropdown] = useState(false);

  const editFilename = () => {
    setShowMiniDropdown(false);
    if (!isEditing) {
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }
  };

  const saveFilename = () => {
    setIsEditing(false);
    setShowMiniDropdown(false);
    mainHandler.handleUpdateFile(
      {
        fileData: {
          fileId: fileId,
          fileName: newFileName,
          fileContent: fileContent,
          folderId: newFolderId,
        },
      },
      (res) => {
        console.log(res);
      }
    );
  };

  const deleteFile = () => {
    handleDelete(fileId);
    setIsEditing(false);
  };

  const getFilenameValue = (e) => {
    setNewFileName(e.target.value);
    console.log(e.target.value);
  };

  const moveFolder = () => {};

  return (
    <FileCont fileId={fileId}>
      <Preview
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
        border={fileId ? "solid" : "dashed"}
        onMouseEnter={setIsHover}
        onMouseLeave={() => setIsHover(false)}
        onClick={() => handleClick(fileId)}
      >
        {fileId ? (
          <p> file #{fileId} preview</p>
        ) : (
          <Icon
            faIconName={faPlus}
            size="2x"
            color={isHover ? colors.primaryBlue : colors}
          />
        )}
      </Preview>

      {!isEditing && (
        <BottomCont dir="row">
          <Title>{newFileName}</Title>
          {fileId && (
            <Icon
              handleClick={setShowMiniDropdown}
              // handleClick={editFilename}
              faIconName={faEllipsisVertical}
            />
          )}
          {showMiniDropdown && (
            <MiniDropdown
              handleMouseLeave={() => setShowMiniDropdown(false)}
              position="absolute"
              onEdit={editFilename}
              onDelete={deleteFile}
              onMoveFolder={moveFolder}
              arr={editFileDataArr}
            />
          )}
        </BottomCont>
      )}
      {isEditing && (
        <BottomCont dir="row">
          <Input
            value={newFileName}
            // width="fit-content"
            onChange={(e) => {
              getFilenameValue(e);
            }}
          />
          <Button
            handleClick={saveFilename}
            text="Save"
            backgroundColor={colors.primaryBlue}
            width="fit-content"
            height="100%"
          />
        </BottomCont>
      )}
    </FileCont>
  );
}
