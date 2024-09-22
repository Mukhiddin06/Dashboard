import React, { useState } from 'react'
import { Plus } from '../assets/images/icons'

function Tasks() {
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);
  

    const handleSubmit = (e) => {
      e.preventDefault();
      if (task.trim()) {
        setTaskList([...taskList, task]); 
        setTask(''); 
      }
    };

  return (
    <div className='w-[546px] border-[1px] border-solid border-[#DFE0EB] rounded-[8px] bg-white'>
        <div className='flex items-center justify-between pt-[32px] px-[32px] pb-[8px]'>
            <h2 className='font-bold text-[19px] leading-[23.85px]'>Tasks</h2>
            <p className='font-semibold text-[14px] leading-[20px] text-[#3751FF]'>View all</p>
        </div>
        <p className='font-regular text-[12px] leading-[16px] text-[#9FA2B4] pl-[32px] pb-[16px]'>Today</p>
        <form onSubmit={handleSubmit} className='flex items-center justify-between px-[32px] py-[19px] border-b-[1px] border-b-solid border-b-[#DFE0EB]'>
            <div className='flex items-center justify-between space-x-[122px]'>
                <input value={task} onChange={(e) => setTask(e.target.value)} className='w-[336px] outline-none text-[14px]' type="text" placeholder='Create new task' autoComplete='off' required/>
                <button className='w-[24px] h-[24px]' type="submit"><Plus/></button>
            </div>
        </form>
        {taskList.map((item, index) => (
          <div key={index} className='flex items-center justify-between px-[32px] py-[19px] border-b-[1px] border-b-solid border-b-[#DFE0EB]'>
              <div className='flex items-center justify-between'>
                  <span className='w-[20px] h-[20px] rounded-[50%] border-[2px] border-solid border-[#C5C7CD] mr-[16px]'></span>
                  <p className='font-semibold text-[14px] leading-[20px]'>{item}</p>
              </div>
              <span className='font-bold text-[11px] leading-[13.8px] rounded-[8px] bg-[#29CC97] text-white px-[12px] py-[5px]'>NEW</span>
          </div>
        ))}
    </div>
  )
}

export default Tasks