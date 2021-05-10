import React from 'react';
import NewCardList from '../NewCardList';

const AddNomination = () => {
    return (
        <div className='container' style={{textAlign:'center'}}>
            <div className='row'>
                <h2>Nominate a Movie</h2>
            </div>
            <div className='row'>
                <NewCardList />
            </div>
        </div>
    )
}

export default AddNomination;