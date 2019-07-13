import {useState, useEffect} from 'react';

export const useFoodApi = (initUrl) => {

    const [url, setUrl] = useState(initUrl);

    const [foodList, setFoodList] = useState({
        nonPerishables: [],
        perishables: []
    });

    const [isLoading, setIsLoading] = useState(true);

    // Runs on mount and any change of 'foodList'
    useEffect(() => {
        fetchData();
    }, []);

    /**
     * Fetches the current data from the API
     *
     */
    async function fetchData() {
        setIsLoading(true);
        try {
            // Grab the food database, convert it to json.
            const foodAPI = await fetch(`${url}/food`);
            const foodJson = await foodAPI.json();
            
            // Update the state
            setFoodList(foodJson);
            setIsLoading(false);
        } catch(error) {
            console.log(error);
        }
    }

    /**
     * Add a new item to the DB and then fetches for new data to account for the new item added
     *
     * @param {*} router
     * @param {*} newItem
     */
    const addFoodItem = async newItem => {
        await fetch(
            `${url}/food?title=${newItem.title}&expDate=${newItem.expDate}&category=${newItem.category}`,
            {
                method: "PUT"
            }
        );
        fetchData();
    };

    /**
     * Deletes the food item in the DB with the given ID then fetches for new data to account for the item being deleted
     *
     * @param {*} itemID
     */
    const deleteFoodItem = async itemID => {
        await fetch(
            `${url}/food?id=${itemID}`,
            {
                method: "DELETE"
            }
        );
        fetchData();
    };

    return [foodList, addFoodItem, deleteFoodItem, isLoading];
    
}