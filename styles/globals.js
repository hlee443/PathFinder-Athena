import styled from "styled-components";

export const text_data = {
    line_height: "150%",
    letter_spacing: "0.35em",
    h1: {
        size: "2.375rem"
    },
    h2: {
        size: "1.5rem"
    }
}

export const colors = {

}

export const Flexbox = styled.div`
display: flex;
flex-direction: ${props => props.dir || "column"};
`
export const Wrapper = styled(Flexbox)`
padding: 6rem;
`