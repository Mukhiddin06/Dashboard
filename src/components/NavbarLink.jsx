
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Context } from '../context/Context'

function NavbarLink({item}) {
  const {setPath} = useContext(Context)
  function handleNavClick(e){
    if(e.target.lastElementChild){
      setPath(e.target.lastElementChild.textContent)
    }
    else{
      setPath(e.target.textContent)
    }
  }
    
  return (
    <NavLink onClick={handleNavClick} className={`p-[18px] relative flex items-center text-[#A4A6B3] space-x-6 pl-[32px] ${item.id == 6 ? "mb-[16px] border-b-[1px] border-b-solid border-b-[#57585d]" : ""} ${item.id == 7 ? "mt-[16px]" : ""}`} to={item.path}>
        {item.icon}
        <span className='font-normal text-[16px] leading-[20px]'>{item.title}</span>
    </NavLink>
  )
}

export default NavbarLink