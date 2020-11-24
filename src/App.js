import './App.css';
import { useState } from 'react';
import List from './components/List';
import { listData } from './data';

function App() {
    const [list, setList] = useState(listData);

    return (
        <div className='App'>
            <List list={list} setList={setList} />
        </div>
    );
}

export default App;
