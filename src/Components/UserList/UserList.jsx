import React from 'react';
import userPic from '../../Assets/Images/picboy.jpg';


const UserList = () => {
    return (
        <div className='w-[25%] h-[100svh] overflow-auto border-r-2 '>
            <div className='h-[10svh] sticky top-0 flex justify-between items-center gap-3 bg-gray-800 px-2 py-4 border-b-2 border-white'>
                <h1 className='text-xl font-bold text-white'>ChatUI</h1>
                <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-2'>
                        <img class="w-8 h-8 rounded-full object-cover" src={userPic} alt="User avatar" />
                        <div className='text-white text-sm'>Waseem Khan Kakar</div>
                    </div>
                    <div>
                        <button className='bg-red-500 text-white px-2 py-1 rounded-md cursor-pointer'>Logout</button>
                    </div>
                </div>
            </div>
            <div className=' h-[90svh]'>
                <div className=''>
                    <input type='text' placeholder='find user' className='w-full bg-gray-800 text-white px-2 py-4 outline-none' />
                </div>
                <div className='bg-gray-400 py-2 mb-1 cursor-pointer hover:opacity-90'>
                    <div className='flex justify-between items-center px-1'>
                        <div class="flex items-center gap-4">
                            <img class="w-10 h-10 rounded-full object-cover" src={userPic} alt="" />
                            <div class="font-medium dark:text-white">
                                <div className='text-white'>Jese Leos</div>
                                <div class="text-sm text-gray-500 dark:text-gray-400 overflow-hidden">Joined in lahore and qwerty...</div>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-white text-sm'>12:32</h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserList