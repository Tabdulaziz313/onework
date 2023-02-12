import React from 'react';
import AdminApp from './AdminApp'
import Applicants from './Applicants'
import ComCreatVac from './ComCreatVac'
import ComponyApp from './ComponyApp'
import Members from './Members'
import Messages from './Messages'
import MyJob from './MyJob'
import Notifications from './Notifications'
import Settting from './Settting'
import Vacan from './Vacan'


const index = () => {
    return (
        <div>
            <h1>Admin</h1>
            <AdminApp />
            <Applicants />
            <ComCreatVac />
            <ComponyApp />
            <Members />
            <Messages />
            <MyJob />
            <Notifications />
            <Settting />
            <Vacan />
        </div>
    );
};

export default index;