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
    PrimaryBlue: "#96ADFC",
    SecondaryBlue: "#C3D1FF",
    Background_White: "#FFFFFC",
    Background_Yellow: "#F3F0E1",
    Background_Cream: "#FFFEF7",
    Button_PrimaryBlue: "#C3D1FF",
    Button_SecondaryBlue: "#96ADFC",
    Button_LightBlue: "#E5EBFF",
    Button_Gray: "#CACACA",
    Button_TextGrey: "#9F9F9F",
    Text_Black: "#000000",
    DarkGray: "#3E3E3E",
    LightGray: "#E1E1E1",
}

export const Flexbox = styled.div`
display: flex;
flex-direction: ${props => props.dir || "column"};
justify-content: center;
align-items: center
`

export const Wrapper = styled(Flexbox)`
padding: 6rem;
justify-content: space-between;
height: 100vh;
align-items: start;
`