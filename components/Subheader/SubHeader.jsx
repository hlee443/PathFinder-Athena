import styled from 'styled-components';
import { text_data } from '../../styles/globals';

const SubHeaderCont = styled.h2`
    font-size: ${text_data.h2.size};
    color: ${props => props.color};
    line-height: ${text_data.line_height};
    letter-spacing: ${text_data.letter_spacing};
`;

export default function SubHeader({ text = "SubHeader text" }) {

    return (
        <SubHeaderCont >
            {text}
        </SubHeaderCont>
    )
}
