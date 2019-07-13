import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import { useState, useContext } from "react";
import {FoodContext} from '../context/FoodContext';
import moment from 'moment';
import {MdDeleteForever} from 'react-icons/md';

const ListItem = (props) => {
    const [isSelected, setIsSelected] = useState(false);
    const [foodList, addFoodItem, deleteFoodItem] = useContext(FoodContext);

    const handleListClick = () => {
        // Toggle the selected state of the list item
        setIsSelected(!isSelected);
    }

    const handleDeleteClick = (itemID) => {
        deleteFoodItem(itemID);
    }

    return (
        <ListItemContainer
            onClick={() => handleListClick()}
            isSelected={isSelected}
        >
            <ListItemName>{props.title}</ListItemName>
            {!isSelected ? (
                <ListItemDate>
                    {moment(props.expDate)
                        .endOf("day")
                        .fromNow()}
                </ListItemDate>
            ) : (
                <ListItemDelete onClick={() => handleDeleteClick(props.id)}>
                    <MdDeleteForever color="var(--red-color)" size="30px"/>
                </ListItemDelete>
            )}
        </ListItemContainer>
    );
};

const ListItemContainer = styled.div`
    width: 100%;
    height: 48px;
    padding: 0px 12px;
    margin-bottom: 16px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${props => props.isSelected ? '#171F2B' : '#1E2737'};
    transition: all 0.3s;
    cursor: pointer;
`;

const ListItemName = styled.p``;

const ListItemDate = styled.p``;

const ListItemDelete = styled.div`
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
`;

ListItem.propTypes = {
    title: propTypes.string,
    expDate: propTypes.string
}

export default ListItem;