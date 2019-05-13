import styled from "styled-components";
import propTypes from "prop-types";

import moment from "moment";

const ListCard = props => (
    <ListCardContainer>
        <ListHeader kind={props.kind}>
            <ListHeaderTitle>{props.title}</ListHeaderTitle>
        </ListHeader>
        <ListContent>
            {props.data.length > 0 &&
                props.data.map(foodItem => {
                    return (
                        <ListItem key={foodItem.id}>
                            <ListItemName>{foodItem.title}</ListItemName>
                            <ListItemDate>
                                {moment(foodItem.expDate)
                                    .endOf("day")
                                    .fromNow()}
                            </ListItemDate>
                        </ListItem>
                    );
                })}
        </ListContent>
    </ListCardContainer>
);

const ListCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--dark-blue-color);
    width: 100%;
    max-width: 700px;
    border-radius: 4px;
    overflow: hidden;
`;

const ListHeader = styled.div`
    padding-top: 40px;
    padding-left: 24px;
    background-color: ${props =>
        (props.kind === "perishables" && "var(--accent-color)") ||
        (props.kind === "nonPerishables" && "var(--red-color)")};
`;

const ListHeaderTitle = styled.h1`
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 16px;
`;

const ListContent = styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
`;

const ListItem = styled.div`
    width: 100%;
    padding-bottom: 4px;
    display: flex;
    justify-content: space-between;
`;

const ListItemName = styled.p``;

const ListItemDate = styled.p``;

ListCard.propTypes = {
    title: propTypes.string,
    data: propTypes.array,
    kind: propTypes.oneOf(["perishables", "nonPerishables"])
};

export default ListCard;
