import React, { createContext } from "react";
import Config from "../../config.json";
import {useFoodApi} from '../hooks/useFoodApi';

export const FoodContext = createContext();

export const FoodContextProvider = ({ children }) => {

    const [foodList, addFoodItem, deleteFoodItem, isLoading] = useFoodApi(Config.BACKEND_IP);

    return (
        <FoodContext.Provider value={[foodList, addFoodItem, deleteFoodItem, isLoading]}>
            {children}
        </FoodContext.Provider>
    );
};
