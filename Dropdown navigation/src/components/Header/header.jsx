import {React, useState} from 'react'
import './header.css'
import Logo from "../icons/snap-on-2-logo-svgrepo-com.svg"
import Bar from "../icons/three-bars-svgrepo-com.svg"

function Header() {
  const [feature, setFeature] = useState(false);
  const [company, setCompany] = useState(false);

  return (
    <div className='wrapper'>
      <div className='top'>
        <img src={Logo} alt='Logo'/>
        <div className="tabs">
          <ul>
            <li  className="feat"onClick={()=> {setFeature(!feature);}}
            >Features</li>
            {feature && 
            <ul className="featB">
              <li>Todo List</li>
              <li>Calander</li>
              <li>Reminder</li>
              <li>Planning</li>
            </ul>}
            <li className="Comp" onClick={()=> {setCompany(!company);}}
            >Company</li>
            {company && 
              <ul className="compB">
                <li>History</li>
                <li>Our Team</li>
                <li>Blog</li>
              </ul>}
            <li>Career</li>
            <li>About</li>
          </ul>
        </div>
      </div>
        <div className="B-tabs">
          <label>Login</label>
          <button>Register</button>
        </div>
        <img className="bar" src={Bar} alt="Bar" />
    </div>
  )
}

export default Header