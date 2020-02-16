import styled from "styled-components";

export default styled.button`
    background-color: whitesmoke;
    color: lightblue;
    height: 30px;
    width: 100%;
    font-size: 22px;
    border: none;
    outline: none;
    border-radius: 10px;
    cursor: pointer;
    :active {
        border: 1px solid pink;
    }
`;