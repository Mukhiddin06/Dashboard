import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Overview, Tickets, Ideas, Contacts, Agents, Articles, Settings, Subscription, NotFoundPage } from '../pages'
import Header from '../components/Header'

function Routers() {
  let headerList = [
    {
      id:1,
      title: 'Overview'
    },
    {
      id:2,
      title: 'Tickets'
    },
    {
      id:3,
      title: 'Ideas'
    },
    {
      id:4,
      title: 'Contacts'
    },
    {
      id:5,
      title: 'Agents'
    },
    {
      id:6,
      title: 'Articles'
    },
    {
      id:7,
      title: 'Settings'
    },
    {
      id:8,
      title: 'Subscription'
    },
  ]
  return (
    <div className='w-[1185px] py-[30px] pl-[30px] pr-[33px]'>
      <Header/>
    <Routes>
        <Route path='/' element={<Overview/>}/>
        <Route path='/tickets' element={<Tickets/>}/>
        <Route path='/ideas' element={<Ideas/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/agents' element={<Agents/>}/>
        <Route path='/articles' element={<Articles/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/subscription' element={<Subscription/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    </div>
  )
}

export default Routers