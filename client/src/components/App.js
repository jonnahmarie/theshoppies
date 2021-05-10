import React from 'react';
import Header from './Header';
import CurrentNomination from './CurrentNomination';
import AddNomination from './AddNomination';

const App = () => {
  return (
    <div>
        <Header />
        <CurrentNomination />
        <AddNomination />
    </div>
  )
}

export default App;
