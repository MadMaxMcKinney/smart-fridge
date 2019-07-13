import styled from "styled-components";
import { useState, useContext } from 'react';
import {useRouter} from 'next/router';
import Page from "../components/Page";
import Select from "react-select";
import Input from "../components/forms/Input";
import selectStyles from "../components/forms/Select";
import Button from "../components/Button";
import { PageHeader, PageDescription, Label } from "../components/Typography";
import {FoodContext} from '../context/FoodContext';
import { toast } from 'react-toastify';

const AddPage = () => {

    const [name, setName] = useState();
    const [expirationDate, setExpirationDate] = useState();
    const [category, setCategory] = useState();
    const router = useRouter();
    const [foodList, addFoodItem, deleteFoodItem] = useContext(FoodContext);

    // The new item object that stores the current value of all of the state items
    let newItem = {
        title: name,
        expDate: expirationDate,
        category: category
    }

    const foodTypes = [
        { value: "perishables", label: "Perishable" },
        { value: "nonPerishables", label: "Non-Perishable" }
    ];

    const validateForm = () => {};

    /**
     * Adds a new food item via food context and changes back to the home page
     *
     */
    const handleAddItem = async () => {
        try {
            await addFoodItem(newItem);
            toast(`Successfully added: ${newItem.title}`, {type: toast.TYPE.SUCCESS});
            router.push('/');
        } catch (error) {
            toast(`${error}`, {type: toast.TYPE.ERROR});
        }
    }

    return (
        <Page>
            <PageHeader>New Item</PageHeader>
            <PageDescription>
                Add a new item to your food supply and get to eatting!
            </PageDescription>
            <AddForm>
                <Label>Food Name</Label>
                <Input placeholder="Name" onChange={(e) => setName(e.target.value)}/>

                <Label>Expiration Date</Label>
                <Input placeholder="0/0/0" onChange={(e) => setExpirationDate(e.target.value)}/>

                <Label>Food Type</Label>
                <Select
                    options={foodTypes}
                    styles={selectStyles}
                    isSearchable={false}
                    onChange={(e) => setCategory(e.value)}
                />

                <Button onClick={() => handleAddItem()}>Add Item</Button>
            </AddForm>
        </Page>
    );
};

const AddForm = styled.div`
    margin-top: 32px;
    margin-bottom: 32px;

    & > ${Input} {
        margin-bottom: 32px;
    }

    & > ${Button} {
        margin-top: 56px;
    }
`;

export default AddPage;
