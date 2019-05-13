import styled from "styled-components";

import Page from "../components/Page";
import Select from "react-select";
import Input from "../components/forms/Input";
import selectStyles from "../components/forms/Select";

import Button from "../components/Button";
import { PageHeader, PageDescription, Label } from "../components/Typography";

const foodTypes = [
    { value: "perishable", label: "Perishable" },
    { value: "nonPerishable", label: "Non-Perishable" }
];

const addItem = () => {};

const validateForm = () => {};

const AddPage = () => {
    return (
        <Page>
            <PageHeader>New Item</PageHeader>
            <PageDescription>
                Add a new item to your food supply and get to eatting!
            </PageDescription>
            <AddForm>
                <Label>Food Name</Label>
                <Input placeholder="Name" />

                <Label>Expiration Date</Label>
                <Input placeholder="0/0/0" />

                <Label>Food Type</Label>
                <Select
                    options={foodTypes}
                    styles={selectStyles}
                    isSearchable={false}
                />

                <Button onClick={addItem}>Add Item</Button>
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
