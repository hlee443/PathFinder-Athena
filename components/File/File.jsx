import { useEffect, useState } from "react";
import styled from "styled-components";
import { colors, Flexbox, BodyText } from "../../styles/globals";
import Icon from "../Icon/Icon";
import { faEllipsisVertical, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Input from "../Input/Input";
import Button from "../Button/Button";
import * as mainHandler from "../../handlers/main";

const FileCont = styled.div``;

const Preview = styled(Flexbox)`
  font-size: ${(props) => props.size};
  min-width: 12.813rem;
  min-height: 15.625rem;
  border-radius: 3.125rem;
  background-color: ${(props) => props.color || colors.backgroundWhite};
  border: 0.188rem dashed ${colors.darkGray};
  cursor: pointer;
`;

const BottomCont = styled(Flexbox)`
  min-width: 100%;
  justify-content: space-between;
`;

export default function File({
  fileName = "Title",
  type = "default",
  fileId = null,
  handleClick = () => {},
}) {
  const r = useRouter();
  const [isFileSaved, setIsFileSaved] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newFileName, setNewFileName] = useState(fileName);

  const editFilename = () => {
    if (!isEditing) {
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }
  };

  const saveFilename = () => {
    setIsFileSaved(true);
    setIsEditing(false);
    mainHandler.handleUpdateFile({
          "fileData": {
              "fileId": fileId,
              "fileName": newFileName
          }
      });
  };


  return (
    <FileCont fileId={fileId}>
      <Preview onClick={() => handleClick(fileId)}>
        {fileId ? (
          <p> file #{fileId} preview</p>
        ) : (
          <Icon
            handleClick={() => {
              r.push("/");
            }}
            faIconName={faPlus}
            size="2x"
          />
        )}
      </Preview>

      {!isEditing && (
        <BottomCont dir="row">
          <div>{newFileName}</div>
          {fileId && (
            <Icon handleClick={editFilename} faIconName={faEllipsisVertical} />
          )}
        </BottomCont>
      )}
      {isEditing && (
        <BottomCont dir="row">
          <Input value={newFileName} onChange={(e)=>setNewFileName(e.target.value)} width="7rem" borderRadius="1rem"/>
          <Button
            handleClick={saveFilename}
            text="Save"
            width="5rem"
            height="2rem"
          />
        </BottomCont>
      )}
    </FileCont>
  );
}
