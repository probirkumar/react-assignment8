import React, { useEffect, useState } from 'react';
import './Shop.css';
import Person from '../Person/Person';
import Update from './Update/Update';

const Shop = () => {
    const [details, setDetails] = useState([]);
    const [updates, setUpdates] = useState([]);

   

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);
    // console.log(setDetails['data'])


    const handleAddToList = (detail) => {

        setUpdates(detail);

        // console.log(initTime)
        // setDetails(detail.time);
        // console.log('clicked', detail.time + detail.time)

    }

    console.log(updates)

    return (
        <div className='main-container'>
            <div className='details-container'>
                <h2>UtRA-Active-club</h2>
                <h4>Select today’s exercise.</h4>
                <div className='person-container'>
                    {
                        details.map(detail => <Person
                            key={detail.id}
                            detail={detail}
                            handleAddToList={handleAddToList}
                        ></Person>)
                    }
                </div>
            </div>
            <div className='display-container'>
                <Update updates={updates}></Update>
            </div>
        </div>
    );
};

export default Shop;