import React from 'react';
import '../assets/css/ProfileCard.css';
import '@fortawesome/fontawesome-free/css/all.css';

{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> */}


const ProfileCard = (props) => {
    return (
        <div className="card-container">
            <header>
                <img src={props.image} alt={props.name} className='image' />
            </header>
            <h1 className="bold-text">
                {props.name}
            </h1>
            <div className="normal-text">{props.college}, {props.city}</div>
            <div className="social-container">
                <div className="linkedIn">
                    <a href={props.linkedIn}>
                        {/* <img src={LinkedIn} alt="LinkedIn" className='socialmedia'>
                        </img> */}
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
                <div className="github">
                    <a href={props.github}>
                        {/* <img src={GitHub} alt="Github" className='socialmedia'></img> */}
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
        
    )
}

export default ProfileCard;