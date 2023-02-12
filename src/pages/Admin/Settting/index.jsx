import React from 'react';
import BlockList from './BlockList'
import DeletAcount from './DeleteAccount'
import Email from './Email'
import JobAlerts from './JobAlerts'
import Language from './Language'
import Pasword from './Password'

const index = () => {
    return (
        <div>
            <BlockList />
            <DeletAcount />
            <Email />
            <JobAlerts />
            <Language />
            <Pasword />

        </div>
    );
};

export default index;