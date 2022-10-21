import { useState } from 'react';
import styled from 'styled-components';
import { colors, Flexbox, BodyText } from '../../styles/globals';
import Icon from "../Icon/Icon";
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';

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
    text = "Title",
    type = "default",
}) {

    const [isFileSaved, setIsFileSaved] = useState(false);

    return (
        <FileCont>
            <Preview>
                <Icon faIconName={faPlus} size ="2x"/>
            </Preview>
            <BottomCont dir="row">
                <div>{text}</div>
                <Icon faIconName={faEllipsisVertical} />
            </BottomCont>
        </FileCont>
    );
};
