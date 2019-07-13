import { useContext } from "react";
import styled from "styled-components";
import ListCard from "../components/ListCard";
import Page from "../components/Page";
import Config from "../../config.json";
import { FoodContext } from "../context/FoodContext";

import { PageHeader, PageDescription } from "../components/Typography";

import Link from "next/link";

const HomePage = () => {
    // Get the foodList from the food context
    const [foodList, addFoodItem, deleteFoodItem] = useContext(FoodContext);

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
                    data={foodList.nonPerishables}
                    kind="nonPerishables"
                />
                <ListCard
                    title="Perishables"
                    data={foodList.perishables}
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
    border: 1px solid;
    border-color: transparent;
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
        border-color: transparent;
        color: white;
        outline: none;
    }

    &:focus, &:active {
        background: var(--dark-blue-color);
        outline: none;
        border-color: var(--accent-color);
    }
`;

export default HomePage;
