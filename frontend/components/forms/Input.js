import styled from "styled-components";

const Input = styled.input`
    background: var(--light-blue-color);
    border: 1px solid;
    border-radius: 2px;
    border-color: transparent;
    color: white;
    width: 100%;
    max-width: 400px;
    padding: 8px;
    font-size: 14px;
    transition: all 0.3s;

    &:hover,
    &:active,
    &:focus {
        border-color: var(--accent-color);
        outline: none;
    }

    &::placeholder {
        color: #707480;
    }
`;

export default Input;
