import React from 'react';

import Header from './components/Header';
import CurrentNomination from './components/CurrentNomination';
import AddNomination from './components/AddNomination';


import './index.css';

const App = () => {
    return(
        <div style={{paddingBottom:'60px'}}>
            <Header />
            <CurrentNomination />
            <AddNomination />
        </div>
    )
}

export default App;