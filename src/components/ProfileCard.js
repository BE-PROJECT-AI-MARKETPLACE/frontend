import React from 'react';
import '../assets/css/ProfileCard.css';
import '@fortawesome/fontawesome-free/css/all.min.css';




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
                        <i class="fab fa-linkedin"></i>
                    </a>
                </div>
                <div className="github">
                    <a href={props.github}>
                        <i class="fab fa-github"></i>
                    </a>
                </div>

            
            </div>
        </div>
        
    )
}

export default ProfileCard;