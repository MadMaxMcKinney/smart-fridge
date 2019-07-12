import styled from "styled-components";
import propTypes from "prop-types";
import ListItem from './ListItem';

const ListCard = props => {

    return(
        <ListCardContainer>
            <ListCardHeader kind={props.kind}>
                <ListHeaderTitle>{props.title}</ListHeaderTitle>
            </ListCardHeader>
            <ListCardContent>
                {props.data.length > 0 &&
                    props.data.map(foodItem => {
                        return (
                            <ListItem key={foodItem.id} title={foodItem.title} expDate={foodItem.expDate} id={foodItem.id}/>
                        );
                    })}
            </ListCardContent>
        </ListCardContainer>
    )
};

const ListCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--dark-blue-color);
    width: 100%;
    max-width: 700px;
    border-radius: 4px;
    overflow: hidden;
`;

const ListCardHeader = styled.div`
    padding-top: 40px;
    padding-left: 24px;
    background-color: ${props =>
        (props.kind === "perishables" && "var(--red-color)") ||
        (props.kind === "nonPerishables" && "var(--accent-color)")};
`;

const ListHeaderTitle = styled.h1`
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 16px;
`;

const ListCardContent = styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
`;

ListCard.propTypes = {
    title: propTypes.string,
    data: propTypes.array,
    kind: propTypes.oneOf(["perishables", "nonPerishables"])
};

export default ListCard;
