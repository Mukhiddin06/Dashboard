import React from 'react'
import Card from '../components/Card'
import MinCard from '../components/MinCard'
import Tickets from '../components/Tickets'
import Tasks from '../components/Tasks'

function Overview() {
  let cardList = [
    {
      id: 1,
      title: 'Unresolved',
      number: 60
    },
    {
      id: 2,
      title: 'Overdue',
      number: 16
    },
    {
      id: 3,
      title: 'Open',
      number: 43
    },
    {
      id: 4,
      title: 'On hold',
      number: 64
    }
  ]
  let minCardList = [
    {
      id: 1,
      title: 'Resolved',
      number: "449"
    },
    {
      id: 2,
      title: 'Received',
      number: "426"
    },
    {
      id: 3,
      title: 'Average first response time',
      number: "33m"
    },
    {
      id: 4,
      title: 'Average response time',
      number: "3h 8m"
    },
    {
      id: 5,
      title: 'Resolution within SLA',
      number: "94%"
    }
  ]
  return (
    <>
      <div className='flex justify-between'>
        {cardList.map(item => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <div className='rounded-[8px] border-[1px] border-solid border-[#DFE0EB] bg-white mt-[30px] flex'>
        <div className='p-[32px] w-[780px]'>
          <h2 className='font-bold text-[19px] leading-[23.85px] text-[#252733] pb-[8px]'>Today’s trends</h2>
          <div className='flex justify-between'>
            <p className='font-normal text-[12px] leading-[16px] text-[#9FA2B4]'>as of 25 May 2019, 09:41 PM</p>
            <div className='flex space-x-[32px]'>
              <div className='flex items-center space-x-[8px]'>
                <span className='w-[16px] h-[2px] bg-[#3751FF] rounded-lg'></span>
                <p className='text-[12px] font-normal leading-[15px] text-[#9FA2B4]'>Today</p>
              </div>
              <div className='flex items-center space-x-[8px]'>
                <span className='w-[16px] h-[2px] bg-[#DFE0EB] rounded-lg'></span>
                <p className='text-[12px] font-normal leading-[15px] text-[#9FA2B4]'>Yesterday</p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[342px] py-[8px] border-l-[1px] border-l-[#DFE0EB]'>
        {minCardList.map(item => (
          <MinCard key={item.id} item={item} />
        ))}
        </div>
      </div>
      <div className='mt-[30px] flex justify-between'>
        <Tickets/>
        <Tasks/>
      </div>
    </>
  )
}

export default Overview