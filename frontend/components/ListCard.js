import styled from "styled-components";
import propTypes from "prop-types";

const ListCard = props => (
    <ListContainer kind={props.kind}>
        <ListHeader>
            <ListHeaderTitle>{props.title}</ListHeaderTitle>
            <ListHeaderBorder />
        </ListHeader>
        <ListContent>
            {props.data.map(foodItem => {
                return <ListItem>{foodItem.title}</ListItem>;
            })}
        </ListContent>
    </ListContainer>
);

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: ${props =>
        (props.kind === "perishables" && "var(--red-color)") ||
        (props.kind === "nonPerishables" && "var(--blue-color)")};
    width: 100%;
    max-width: 700px;
    border-radius: 4px;
`;

const ListHeader = styled.div`
    padding-top: 40px;
    padding-left: 24px;
`;

const ListHeaderTitle = styled.h1`
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

const ListHeaderBorder = styled.span`
    width: 100%;
    background: white;
    opacity: 50%;
`;

const ListContent = styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
`;

const ListItem = styled.span`
    width: 100%;
    padding-bottom: 4px;
`;

ListCard.propTypes = {
    title: propTypes.string,
    data: propTypes.array,
    kind: propTypes.oneOf("perishables", "nonPerishables")
};

export default ListCard;
