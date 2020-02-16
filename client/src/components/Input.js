import styled from "styled-components";

const Input = styled.input`
    width: 95%;
    outline: none;
    height: 35px;
    padding-left: 10px;
    font-size: 20px;
    background-color: transparent;
    border: 1px solid white;
    color: white;
    border-radius: 5px;
    ::placeholder {
        color: white;
    }
    :focus {
        border: 1px solid pink;
    }
`;

export default Input;
