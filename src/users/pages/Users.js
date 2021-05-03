import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {

    const USERS = [{
        id: '001',
        name: 'Thilina Pathirage',
        image: 'https://avatars.githubusercontent.com/u/62783923?s=400&u=26b653a348dedaf3257d479c3600774671534a51&v=4',
        places: 3
    }];

    return(
        <UsersList items={USERS}/>
    );
}

export default Users;