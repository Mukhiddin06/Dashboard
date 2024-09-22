import React from 'react'

function Tickets() {
  return (
    <div className='w-[546px] border-[1px] border-solid border-[#DFE0EB] rounded-[8px] bg-white'>
        <div className='flex items-center justify-between pt-[32px] px-[32px] pb-[8px]'>
            <h2 className='font-bold text-[19px] leading-[23.85px]'>Unresolved tickets</h2>
            <p className='font-semibold text-[14px] leading-[20px] text-[#3751FF]'>View details</p>
        </div>
        <p className='font-regular text-[12px] leading-[16px] text-[#9FA2B4] pl-[32px] pb-[16px]'>Group: <strong>Support</strong></p>
        <div className='flex items-center justify-between px-[32px] py-[19px] border-b-[1px] border-b-solid border-b-[#DFE0EB]'>
            <p className='font-semibold text-[14px] leading-[20px]'>Waiting on Feature Request</p>
            <span className='font-semibold text-[14px] leading-[20px] text-[#9FA2B4]'>4238</span>
        </div>
        <div className='flex items-center justify-between px-[32px] py-[19px] border-b-[1px] border-b-solid border-b-[#DFE0EB]'>
            <p className='font-semibold text-[14px] leading-[20px]'>Awaiting Customer Response</p>
            <span className='font-semibold text-[14px] leading-[20px] text-[#9FA2B4]'>1005</span>
        </div>
        <div className='flex items-center justify-between px-[32px] py-[19px] border-b-[1px] border-b-solid border-b-[#DFE0EB]'>
            <p className='font-semibold text-[14px] leading-[20px]'>Awaiting Developer Fix</p>
            <span className='font-semibold text-[14px] leading-[20px] text-[#9FA2B4]'>914</span>
        </div>
        <div className='flex items-center justify-between px-[32px] py-[19px] mb-[8px]'>
            <p className='font-semibold text-[14px] leading-[20px]'>Pending</p>
            <span className='font-semibold text-[14px] leading-[20px] text-[#9FA2B4]'>281</span>
        </div>
    </div>
  )
}

export default Tickets