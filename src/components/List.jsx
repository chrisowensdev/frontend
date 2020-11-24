import {useState} from 'react';
import styled from 'styled-components';
import Item from './Item';

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 200px;
    margin: 0 auto;
`;

const ListContainer = styled.div`
    width: 300px;
    margin: 0 auto;
`;


const List = ({ list, setList }) => {

    return (
        <>
            <h1>Shopping List</h1>
            <Header>
                <span>Item</span>
                <span>Done</span>
            </Header>
            <ListContainer>
            {list.filter(item => !item.isChecked).map(item => (
                <Item key={item.id} item={item} list={list} setList={setList} />
            ))}
            </ListContainer>
            <ListContainer>
            {list.filter(item => item.isChecked).map(item => (
                <Item key={item.id} item={item} list={list} setList={setList} />
            ))}
            </ListContainer>
            
    
            
        </>
    )
}

export default List;