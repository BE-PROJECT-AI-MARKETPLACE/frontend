// this is a card component for displaying all ai services
import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/css/Card.css';

const Cards = (props) => {
  return (
    <div className='card-container'>
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
        <div className='btn'>
            <Link to='/demopage/' className='a'>DEMO</Link>  
        </div>   
    </div>   
  )
}
export default Cards;
/*
changes required in this file:
1. API call should be made for demo. id refers to service_address. (api format : /demoapage/:address)
2. if demo not possible then skip
3. instead make button as a link for service details
4. in smart contract write function for searching service using it's address.
 */