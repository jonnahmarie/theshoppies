import React from 'react';
import CurrentCardList from '../CurrentCardList';

const CurrentNomination = () => {
    return (
        <div className='container center-align'>
            <div className='row'>
                <h2>Nominated Movies</h2>
            </div>
            <div>
                <CurrentCardList />
            </div>
        </div>
    )
}

export default CurrentNomination;