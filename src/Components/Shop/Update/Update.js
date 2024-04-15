import React from 'react';
import './Update.css'
import image from '../../../images/profile.jpg';

const Update = (props) => {
    // const {breakTimeHandler} = props.updates;
    // console.log(breakTimeHandler)

    // console.log(props.updates)
    const breakTimeHandler = (time) =>{
        const innerTexts = document.querySelectorAll('.active').innerHTML;
        console.log(innerTexts, time)
    }

    return (
        <div className='profile-container'>
            <div className="profile">
                <img src={image} alt="" />
                <div className='profile-text'>
                    <p>Unknown person</p>
                    <p><small>Sydney, Australia</small></p>
                </div>
            </div>
            <div className="time-breack">
                <h3>Add A Breack</h3>
                <div className="breack-time-wrapper">
                    <li onClick={() =>breakTimeHandler()} className='active'>10s</li>
                    <li onClick={() =>breakTimeHandler()} className='active'>30s</li>
                    <li onClick={() =>breakTimeHandler()} className='active'>20s</li>
                    <li onClick={() =>breakTimeHandler()} className='active'>40s</li>
                    <li onClick={() =>breakTimeHandler()} className='active'>50s</li>
                </div>
            </div>
            <div className="exercise-details">
                <h3>Exercise Details</h3>
                <div className='time-wrapper'>
                    <div className='exercise-time'>
                        <h5>Exercise Time: </h5>
                        <p><span>{props.updates.time}</span> Seconds</p>
                    </div>
                </div>
                <div className='time-wrapper'>
                    <div className='break-time'>
                        <h5>Break Time: </h5>
                        <p><span>0</span> Seconds</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;