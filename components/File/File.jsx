import { useState } from 'react';
import styled from 'styled-components';
import { colors, Flexbox, BodyText } from '../../styles/globals';
import Icon from "../Icon/Icon";
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

const FileCont = styled.div``

const Preview = styled(Flexbox)`
font-size: ${props => props.size};
min-width: 12.813rem;
min-height: 15.625rem;
border-radius: 3.125rem;
background-color: ${props => props.color || colors.backgroundWhite};
border: 0.188rem dashed ${colors.darkGray};
`;


const BottomCont = styled(Flexbox)`
min-width: 100%;
justify-content: space-between;
`

export default function File({
  fileName = "Title",
  type = "default",
  fileId = null,
  handleClick = () => {}
}) {
  const r = useRouter();
  const [isFileSaved, setIsFileSaved] = useState(false);

  return (
    <FileCont 
      fileId={fileId}
      onClick={() => handleClick(fileId)}>
      <Preview>
        {
          fileId ?
          (
          <p> file #{fileId} preview</p>
          )
          :
          (
          <Icon handleClick={() => { r.push("/") }} faIconName={faPlus} size="2x" />
          )
        }
        
      </Preview>

          <BottomCont dir="row">
            <div>{fileName}</div>
            {fileId &&
            (
              <Icon faIconName={faEllipsisVertical} />
            )
            }
          </BottomCont>
       
      
    </FileCont>
  );
};
