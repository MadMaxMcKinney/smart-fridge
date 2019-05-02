import { useState, useEffect } from "react";
import styled from "styled-components";
import ListCard from "../components/ListCard";

const App = () => {
    const [foodData, setFoodData] = useState({
        nonPerishables: [],
        perishables: []
    });

    useEffect(() => {
        // Fetch the data in a seperate internal function. Part of the rules when using useEffect.
        async function fetchData() {
            // Grab the food database, convert it to json.
            // TODO: Change this IP to match the machine running the server
            const foodDB = await fetch("http://192.168.50.150:8080/food");
            const foodList = await foodDB.json();

            // Update the state by first spreading the current state and adding on the new state changes.
            setFoodData(foodList);
        }
        fetchData();
    }, []);

    return (
        <Page>
            <style jsx global>{`
                @import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700");
                body {
                    margin: 0;
                    padding: 0;
                    height: 100%;
                    position: relative;
                    background: #fff;
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
                }
            `}</style>
            <AppTitle>
                <span>Smart</span> Fridge
            </AppTitle>
            <ListContainer>
                <ListCard
                    title="Non-perishables"
                    data={foodData.nonPerishables}
                    kind="nonPerishables"
                />
                <ListCard
                    title="Perishables"
                    data={foodData.perishables}
                    kind="perishables"
                />
            </ListContainer>
        </Page>
    );
};

const Page = styled.div`
    --blue-color: #335ece;
    --red-color: #ca3d3d;

    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    max-width: 1100px;
    padding: 32px;
`;

const ListContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
`;

const AppTitle = styled.h1`
    font-size: 36px;
    margin-bottom: 50px;
    margin-top: 8px;
    font-weight: 400;
    color: #1e1e1e;
    > span {
        font-weight: 700;
    }
`;

export default App;
