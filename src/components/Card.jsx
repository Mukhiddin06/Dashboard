import React from 'react'

function Card({item}) {
    return (
        <>
            <div className='w-[258px] text-center bg-white border-solid border-[1px] border-[#DFE0EB] rounded-[8px] cursor-pointer duration-300 hover:border-[#3751FF] hover:text-[#3751FF] group'>
                <p className='font-bold text-[19px] leading-[23.85px] pt-[24px] pb-[12px] text-[#9FA2B4] group-hover:text-[#3751FF] duration-300'>{item.title}</p>
                <h2 className='font-bold text-[40px] leading-[50px] pb-[24px] text-[#252733] group-hover:text-[#3751FF] duration-300'>{item.number}</h2>
            </div>
        </>
    )
}

export default Card