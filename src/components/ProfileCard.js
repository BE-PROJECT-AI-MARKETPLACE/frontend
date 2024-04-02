import React from 'react';
import '../assets/css/ProfileCard.css';
import LinkedIn from '../assets/images/nav-icon1.svg';
import GitHub from '../assets/images/nav-icon2.svg';



const ProfileCard = (props) => {
    return (
        <div className="card-container">
            <header>
                <img src={props.image} alt={props.name} className='image' />
            </header>
            <h1 className="bold-text">
                {props.name}
            </h1>
            <div className="normal-text">{props.college}</div>
            <div className="normal-text">{props.city}</div>
            <div className="social-container">
                <div className="linkedIn">
                    <a href={props.linkedIn}>
                        <img src={LinkedIn} alt="LinkedIn" className='socialmedia'>
                        </img>
                    </a>
                    <h2 className="smaller-text">LinkedIn</h2>
                </div>
                <div className="github">
                    <a href={props.github}>
                        <img src={GitHub} alt="Github" className='socialmedia'></img>
                    </a>

                    <h2 className="smaller-text">Github</h2>
                </div>
            </div>
        </div>
        
    )
}

export default ProfileCard;