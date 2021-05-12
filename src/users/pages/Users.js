import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {

    const USERS = [{
        id: 'u1',
        name: 'Thilina Pathirage',
        image: 'https://avatars.githubusercontent.com/u/62783923?s=400&u=26b653a348dedaf3257d479c3600774671534a51&v=4',
        places: 3
    },
    {
        id: 'u2',
        name: 'Ishan Chanuka',
        image: 'https://avatars.githubusercontent.com/u/63969237?s=100&v=4',
        places: 2
    },
    {
        id: 'u3',
        name: 'Nishu Dissanayake',
        image: 'https://avatars.githubusercontent.com/u/63721945?s=100&v=4',
        places: 4
    }
];

    return(
        <UsersList items={USERS}/>
    );
}

export default Users;