import React from 'react';
import Person from '../Person/Person';
import './Shop.css';

const Shop = () => {
    return (
        <div className='main-container'>
            <div className='details-container'>
                <h2>UtRA-Active-club</h2>
                <Person></Person>
            </div>
            <div className='display-container'>
                <h3>Person Information</h3>
            </div>
        </div>
    );
};

export default Shop;