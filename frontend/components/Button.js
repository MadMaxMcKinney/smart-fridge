import styled from "styled-components";

const Button = styled.a`
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
`;

export default Button;
