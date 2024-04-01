import React from 'react'
import {Link, NavLink} from "react-router-dom"

function Header() {
  return (
    <div className='  bg-green-200'>
        
      
        
        <Link to="/contact"><li>Contact</li></Link>
        <Link to="/"><li>Home</li></Link>


        
         <NavLink to="/about"  className={({isActive})=>`
             ${isActive ? " text-blue-300 underline text-3xl":""}
         `}>

         <li>About</li>
         </NavLink>





        <NavLink to="/login"  
        
         className={({isActive})=>
         `${isActive ?"text-red-700":" "}`
        }
        
        ><li>Login</li></NavLink>

        
      
    </div>
  )
}

export default Header