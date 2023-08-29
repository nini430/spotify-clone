'use client' 

import {TbPlaylist} from 'react-icons/tb'
import {AiOutlinePlus} from 'react-icons/ai'


const Library = () => {
    const onClick=()=>{
        // handle upload
    }
  return (
    <div className="flex flex-col">
        <div className="flex items-center justify-between px-4 pt-5">
            <div  className="inline-flex items-center gap-x-2">
                <TbPlaylist size={26} className='text-neutral-400'  />
                <p className='text-neutral-400 font-medium text-md'>Your Library</p>
            </div>
            <AiOutlinePlus onClick={onClick} size={20} className='text-neutral-400 cursor-pointer hover:text-white transition'/>

        </div>
        <div className='flex flex-col mt-3 px-3 gap-y-2'>
            Your Songs List
        </div>
    </div>
  )
}

export default Library;