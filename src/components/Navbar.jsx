import React from 'react'
import { Link } from 'react-router-dom'
import SiteLogo from '../assets/images/logo.svg'
import NavbarLink from './NavbarLink'
import { AgentsIcon, ArticlesIcon, ContactsIcon, IdeasIcon, OverviewIcon, SettingsIcon, SubscriptionIcon, TicketsIcon } from '../assets/images/icons'

function Navbar() {
  let navbarList = [
    {
        id:1,
        icon: <OverviewIcon/>,
        title: "Overview",
        path:"/"
    },
    {
        id:2,
        icon: <TicketsIcon/>,
        title: "Tickets",
        path:"/tickets"
    },
    {
        id:3,
        icon: <IdeasIcon/>,
        title: "Ideas",
        path:"/ideas"
    },
    {
        id:4,
        icon: <ContactsIcon/>,
        title: "Contacts",
        path:"/contacts"
    },
    {
        id:5,
        icon: <AgentsIcon/>,
        title: "Agents",
        path:"/agents"
    },
    {
        id:6,
        icon: <ArticlesIcon/>,
        title: "Articles",
        path:"/articles"
    },
    {
        id:7,
        icon: <SettingsIcon/>,
        title: "Settings",
        path:"/settings"
    },
    {
        id:8,
        icon: <SubscriptionIcon/>,
        title: "Subscription",
        path:"/subscription"
    }
]
  return (
    <div className='w-[255px] h-[171vh] bg-[#363740]'>
      <div className='pt-[37px] pl-[32px] pb-[59px]'>
        <Link className='flex items-center space-x-3' to={'/'}>
          <img src={SiteLogo} alt="Logo" width={32} height={32}/>
          <p className='font-bold text-[19px] leading-[23.85px] text-[#A4A6B3] opacity-70'>Dashboard Kit</p>
        </Link>
      </div>
      <nav>
        {navbarList.map(item => <NavbarLink key={item.id} item={item}/>)}
      </nav>
    </div>
  )
}

export default Navbar