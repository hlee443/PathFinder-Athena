import styled from 'styled-components';
import { text_data } from '../../styles/globals';

const HeaderCont = styled.h1`
    font-size:  ${text_data.h1.size};
    color: ${props => props.color};
    line-height: ${text_data.line_height};
    letter-spacing: ${text_data.letter_spacing}
`;

export default function Header({ text = "Header text" }) {

    return (
        <HeaderCont>
            {text}
        </HeaderCont>
    )
}
