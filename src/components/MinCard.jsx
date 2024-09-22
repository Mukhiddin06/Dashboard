import React from 'react'

function MinCard({item}) {
  return (
    <div className={`text-center py-[24px] ${item.id == 5 ? "" : "border-b-[1px] border-b-solid border-b-[#DFE0EB]"}`}>
        <h2 className='font-normal text-[16px] leading-[22px] text-[#9FA2B4] mb-[6px]'>{item.title}</h2>
        <p className='font-bold text-[24px] leading-[30px]'>{item.number}</p>
    </div>
  )
}

export default MinCard