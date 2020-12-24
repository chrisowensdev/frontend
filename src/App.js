import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Menu from './components/Menu';
import BottomNav from './components/BottomNav';

import Home from './components/Home';
import List from './components/List';
import Recipe from './components/Recipe';
import Pantry from './components/Pantry';

function App() {
    return (
        <div className='App'>
            <Router>
                <Menu />
                <Route path='/' component={Home} exact />
                <Route path='/list' component={List} />
                <Route path='/recipe' component={Recipe} />
                <Route path='/pantry' component={Pantry} />
                <BottomNav />
            </Router>
        </div>
    );
}

export default App;
