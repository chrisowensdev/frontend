import {useState} from 'react';
import styled from 'styled-components';

const ItemDiv = styled.div`
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    margin: 10px;
    padding: 0 10px;
`;

const AddedButton = styled.button`
    background-color: green;
    border: none;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    width: 50px;
`;

const RemoveButton = styled.button`
    background-color: red;
    border: none;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    width: 50px;
`;


const Item = ({ list, setList, item }) => {
    const [currentItem, setCurrentItem] = useState(item);
    const [checked, setChecked] = useState(item.isChecked);

    const handleClick = () => {
        setChecked(!checked);
        setCurrentItem({
            ...currentItem,
            isChecked: checked
        });
        console.log(list);
    }

    console.log(currentItem)

    return (
        <ItemDiv>
        <p id="item">{currentItem.item}</p>
        {checked ? <RemoveButton onClick={handleClick}>X</RemoveButton> : <AddedButton onClick={handleClick}>+</AddedButton>}
        </ItemDiv>
    )
}

export default Item;