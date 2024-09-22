import React, { useContext } from 'react'
import { BellIcon, SearchIcon } from '../assets/images/icons'
import Photo from '../assets/images/photo.svg'
import { Context } from '../context/Context'

function Header() {
    const { path } = useContext(Context)
    return (
        <div className='flex items-center justify-between mb-[54px]'>
            <h2 className='text-[24px] leading-[30px] font-bold'>{path}</h2>
            <div className='flex'>
                <div className='flex items-center space-x-[24px] mr-[32px]'>
                    <SearchIcon />
                    <BellIcon />
                </div>
                <div className='flex items-center space-x-[14px] border-l-[1px] pl-[32px] border-l-solid border-l-[#DFE0EB]' >
                    <p className='font-semibold text-[14px] leading-[20px] text-[#252733]'>Jones Ferdinand</p>
                    <img src={Photo} alt="photo" width={44} height={44} />
                </div>
            </div>
        </div>
    )
}

export default Header