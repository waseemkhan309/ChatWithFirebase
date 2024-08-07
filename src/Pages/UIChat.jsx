import React from 'react';
import UserList from '../Components/UserList/UserList';
import ChatList from '../Components/ChatList/ChatList';

const UIChat = () => {
    return (
        <>
            <div className='flex w-[100%]'>
                {/* <div className='w-[20%]'> */}
                <UserList />
                {/* </div> */}
                {/* <div className='w-[80%]'> */}
                <ChatList />
                {/* </div> */}
            </div>
        </>
    )
}

export default UIChat