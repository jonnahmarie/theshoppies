import React from 'react';

import Header from '../Header';
import CurrentNomination from '../CurrentNomination';
import AddNomination from '../AddNomination';
import Footer from '../Footer';

const Index = () => {
    return(
        <div>
            <Header />
            <CurrentNomination />
            <AddNomination />
            <Footer />
            
        </div>
    )
}

export default Index;