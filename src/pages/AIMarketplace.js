import React from 'react'
// import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Card from '../components/Cards.js'
import profile from '../assets/images/profile.png'
const AIMarketplace = ()=> {
  return (
      <div>
        {/* <Button variant="secondary" href = "RequestForm.js">Secondary</Button>{' '} */}
        <Link to='/requestform'  className='link'>Request Form</Link>      
        <Card title="XYZ" imageurl={profile} body="zbc" logo={profile}/>   
      </div>
  )
}

export default AIMarketplace;
