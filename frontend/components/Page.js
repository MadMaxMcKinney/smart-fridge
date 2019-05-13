import styled from "styled-components";
import Nav from "./Nav";

const Page = ({ children }) => {
    return (
        <PageContainer>
            <style jsx global>{`
                @import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700");
                body {
                    --accent-color: #f7814a;
                    --dark-blue-color: #111721;
                    --light-blue-color: #111729;
                    --black-color: #020204;
                    --white-color: #ffffff;
                    --red-color: #ca3d3d;

                    margin: 0;
                    padding: 0;
                    height: 100%;
                    position: relative;
                    background: var(--black-color);
                    color: white;
                }
                body * {
                    box-sizing: border-box;
                    font-family: "Montserrat", sans-serif;
                }
                h1,
                h2,
                h3,
                h4,
                h5,
                h6,
                p {
                    padding: 0;
                    margin: 0;
                    font-size: 16px;
                }
            `}</style>
            <Nav />
            <PageContent>{children}</PageContent>
        </PageContainer>
    );
};

const PageContainer = styled.div`
    height: 100%;
    min-height: 100vh;
`;

const PageContent = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 32px;
`;

export default Page;
