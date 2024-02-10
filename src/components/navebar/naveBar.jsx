import React from 'react'
import './naveBar.css'
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";


const NaveBar = () => {

  function sidebar() {
    const sidebar = document.querySelector('.nav-ul')
    sidebar.style.display = 'flex'
  }
  function menubar() {
    const sidebar = document.querySelector('.nav-ul')
    sidebar.style.display = 'none'
  }

  return (
    <div className='nav-bar'>
      <h3>PORTFOLIO</h3>
      <ul className='menu-nav'>
        <li><a href=''>Home</a></li>
        <li><a href=''>Projects</a> </li>
        <li><a href=''>Resume</a> </li>
        <li><a href=''>About</a></li>
      </ul>
      <ul className='nav-ul'>
        <li id='cross'><a href="" onClick={menubar}><RxCross2 /></a></li>
        <li><a href=''>Home</a> </li>
        <li><a href=''>Projects</a> </li>
        <li><a href=''>Resume</a> </li>
        <li><a href=''>About</a> </li>
      </ul>
      <div className="button">
        <button className='nav-btn'><a href=''>Hire Me</a> </button>
        <BiMenuAltRight id='menu' onClick={sidebar} />
      </div>

    </div>
  )
}

export default NaveBar