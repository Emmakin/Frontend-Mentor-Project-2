import {React, useState} from 'react'
import './header.css'
import Logo from "../images/logo.svg"
import Bar from "../images/icon-menu.svg"
import Close from "../images/icon-close-menu.svg"
import Todo from "../images/icon-todo.svg"
import Calendar from "../images/icon-calendar.svg"
import Reminder from "../images/icon-reminders.svg"
import Planning from "../images/icon-planning.svg"
import UpArrow from "../images/icon-arrow-up.svg"
import DownArrow from "../images/icon-arrow-down.svg"

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
            >Features 
            <img className="icons"
            src={feature ? UpArrow : DownArrow} 
            alt='a drop down arrow'/>
              {feature && 
              <ul className="featB">
                <li> <img src={Todo} alt='Logo'/>Todo List</li>
                <li> <img src={Calendar} alt='Calender'/>Calander</li>
                <li> <img src={Reminder} alt='Reminders'/>Reminder</li>
                <li> <img src={Planning} alt='Planning'/>Planning</li>
              </ul>}
            
            </li>
            <li className="Comp" onClick={()=> {setCompany(!company);}}
            >Company 
            <img className="icons"
            src={company ? UpArrow : DownArrow}>
            </img>
            {company && 
              <ul className="compB">
                <li>History</li>
                <li>Our Team</li>
                <li>Blog</li>
              </ul>}
            </li>
            <li>Career</li>
            <li>About</li>
          </ul>
        </div>
      </div>
        <div className={response ? "B" : "B-tabs"}>

          <label>Login</label>
          <button>Register</button>
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