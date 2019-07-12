import React, { useState, useEffect, createContext } from "react";
import Config from "../../config.json";

export const FoodContext = createContext();

export const FoodContextProvider = ({ children }) => {
    const [foodList, setFoodList] = useState({
        nonPerishables: [],
        perishables: []
    });

    // Runs on mount and any change of 'foodList'
    // DON'T KNOW WHY THIS RE-RENDERS
    useEffect(() => {
        async function fetchData() {
            // Grab the food database, convert it to json.
            const foodAPI = await fetch(`${Config.BACKEND_IP}/food`);
            const foodJson = await foodAPI.json();

            // Update the state
            setFoodList(foodJson);
        }
        fetchData();
    }, [foodList]);

    /**
     * Add a new item to the DB
     *
     * @param {*} router
     * @param {*} newItem
     */
    const addFoodItem = async newItem => {
        await fetch(
            `${Config.BACKEND_IP}/food?title=${newItem.title}&expDate=${newItem.expDate}&category=${newItem.category}`,
            {
                method: "PUT"
            }
        );
    };

    /**
     * Deletes the food item in the DB with the given ID
     *
     * @param {*} itemID
     */
    const deleteFoodItem = async itemID => {
        await fetch(
            `${Config.BACKEND_IP}/food?id=${itemID}`,
            {
                method: "DELETE"
            }
        );
    };

    return (
        <FoodContext.Provider value={[foodList, addFoodItem, deleteFoodItem]}>
            {children}
        </FoodContext.Provider>
    );
};
