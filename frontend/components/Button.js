import styled from "styled-components";

const Button = styled.a`
    padding: 16px 32px;
    display: flex;
    background: var(--accent-color);
    color: var(--white-color);
    font-size: 16px;
    text-decoration: none;
    width: fit-content;
    cursor: pointer;
    transition: all 0.3s;

    &:hover,
    &:focus,
    &:active {
        background: var(--dark-blue-color);
    }
`;

export default Button;
