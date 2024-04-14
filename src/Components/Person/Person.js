import React from 'react';
import './Person.css';

const Person = (props) => {
    // console.log(props)
    const { detail, handleAddToList } = props;
    const { img, paragraph, name, time } = detail;
    // console.log(detail)
    return (
        <div className='full-detail'>
            <div className='img-wrapper'>
                <img src={img} alt="" />
            </div>
            <div className='text-info'>
                <h5>{name}</h5>
                <p><small>{paragraph}</small></p>
                <h6>Time-required: {time}s</h6>
            </div>
            <button onClick={() =>handleAddToList(detail)} className='btn-info'>
                Add To List
            </button>
        </div>
    );
};

export default Person;