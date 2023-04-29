import {React, useState} from 'react'
import './header.css'
import Logo from "../icons/snap-on-2-logo-svgrepo-com.svg"
import Bar from "../icons/three-bars-svgrepo-com.svg"
import Close from "../icons/close-svgrepo-com.svg"

function Header() {
  const [feature, setFeature] = useState(false);
  const [company, setCompany] = useState(false);
  const [response, setResponse] = useState(false);


  return (
    <div className='wrapper'>
      <div className='top'>
        <img src={Logo} alt='Logo'/>
        <div className="tabs">
          <ul className={response ? "t" : "T-tabs"}>
            <li  id= "feat" className="feat" onClick={()=> {setFeature(!feature);}}
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
        <div className={response ? "B" : "B-tabs"}>

          <label>Login</label>
          <button>Register</button>
        </div>
      </div>
        <img 
          className="bar" 
          src={response ? Close : Bar } 
          alt="Bar" 
          onClick={()=>{setResponse(!response)}}
          
        />
        {response &&<div className='resBar'>
              
        </div>}
    </div>
  )
}

export default Header