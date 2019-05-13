import { useState, useEffect } from "react";
import styled from "styled-components";
import ListCard from "../components/ListCard";
import Page from "../components/Page";

import { PageHeader, PageDescription } from "../components/Typography";

import Link from "next/link";

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
            const foodJson = await foodDB.json();

            // Update the state by first spreading the current state and adding on the new state changes.
            setFoodData(foodJson);
        }
        fetchData();
    }, []);

    return (
        <Page>
            <PageHeader>Foods</PageHeader>
            <PageDescription>
                Keep track of what is in your kitchen! Never forget when food
                expires, and get rid of those “what do we have to eat” questions
                for good.
            </PageDescription>
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
            <Link href="/add">
                <FloatingActionButton>+</FloatingActionButton>
            </Link>
        </Page>
    );
};

const ListContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    margin-top: 32px;
`;

const FloatingActionButton = styled.a`
    position: absolute;
    bottom: 64px;
    align-self: flex-end;
    margin-top: 150px;
    width: 64px;
    height: 64px;
    background: var(--accent-color);
    color: var(--white-color);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        background: var(--dark-blue-color);
        color: white;
    }
`;

export default App;
