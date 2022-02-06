import React,{useState} from 'react'
import logo from '../images/logo.png';
import {Link} from 'react-scroll';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const[nav,setnav] = useState(false);
    const changeBackground =() =>{
        if (window.scrollY >= 50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll',changeBackground);
    const navigate = useNavigate();
    return (

        <nav className='nav active'>
            <button style={{background:'none', border:'none'}}>
                <img
                    style={{cursor:'pointer'}}
                    src={logo}
                    type="submit"
                    onClick = {() => navigate("/")}
            />
            </button>
            <input className='menu-btn' type='checkbox' id='menu-btn' />
              <label className='menu-icon' for='menu-btn'>
                  <span className='nav-icon'></span>
              </label>
              <ul className="menu">
                  <li><Button className='cart-button' variant='contained' onClick = {() => navigate("/")}>Main Site</Button></li>
                  <li className='break231'></li>
                  <li><Button className='cart-button' variant='contained' onClick = {() => navigate("/report")}>Generate Report</Button></li>
              </ul>
        </nav>
    )
}