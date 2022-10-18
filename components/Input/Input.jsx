import styled from "styled-components";

const InputCont = styled.input`
  border-radius: 2rem;
  border: 0.05rem solid #3e3e3e;
  width: ${(props) => props.width || "100%"};
  height: 3.875rem;
  padding: 1rem;
`;

const OptionsCont = styled.select`
  border-radius: 2rem;
  border: 0.05rem solid #3e3e3e;
  padding: 1rem;
`;

export default function Input({ width = "100%", type = "text" }) {

    if (type === "text") {
        return <InputCont
            type="text"
            placeholder="placeholder text"
            width={width}
        ></InputCont>
    };

    if (type === "option") {
        return <OptionsCont>
            <option value="" disabled selected>
                Placeholder
            </option>
            <option></option>
            <option></option>
        </OptionsCont>
    };
};


