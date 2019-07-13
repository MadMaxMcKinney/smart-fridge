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
    height: 48px;
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

    &[type=submit] {
        height: 48px;
        padding: 16px 32px;
        display: flex;
        border-radius: 0px;
        border: 1px solid;
        border-color: transparent;
        line-height: 0px;
        background: var(--accent-color);
        color: var(--white-color);
        font-size: 16px;
        text-decoration: none;
        width: fit-content;
        cursor: pointer;
        box-sizing: border-box;
        transition: all 0.3s;

        &:hover,
        &:active {
            outline: none;
            border-color: transparent;
            background: var(--dark-blue-color);
        }

        &:focus {
            outline: none;
            border-color: var(--accent-color);
            background: var(--dark-blue-color);
        }
    }
`;

export default Input;
