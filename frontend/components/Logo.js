import styled from "styled-components";

const Logo = () => {
    return (
        <LogoContainer>
            <img src="static/smart-fridge-logo.png" alt="Logo" />
        </LogoContainer>
    );
};

const LogoContainer = styled.div`
    background: var(--dark-blue-color);
    padding: 16px 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
`;

export default Logo;
