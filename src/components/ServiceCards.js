// this is a card component for displaying all ai services
import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import '../assets/css/Card.css';

const Cards = (props) => {
    const navigate = useNavigate();
    const handleService = () => {
        navigate(`/aboutservice/${props.id}`);
    }
  return (
    <div className='card-container' onClick={handleService}>
        <div className='image-container'>
            <img src={props.imageurl} alt=''/>
        </div>
        <div className='card-content'>
            <div className='card-title'>
                <h3>{props.title}</h3>
            </div> 
            <div className='card-body'>
                <p>{props.body}</p>
            </div>  
        </div>     

    </div>   
  )
}
export default Cards;