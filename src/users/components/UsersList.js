import React from 'react';
import './UsersList.css';
import './UserItem.css';
import UserItem from './UserItem';
import { MDBContainer, MDBCard } from 'mdb-react-ui-kit';

const UsersList = props => {
    if(props.items.length === 0){
        return(

           <div className="center">
            <MDBCard className="useritem-card hover-shadow center" style={{ width: '20rem' }}>
            <MDBContainer >
              <h2>No users found.</h2>
            </MDBContainer>
            </MDBCard>
           </div>
        );
    }

    return (
        <ul>
            {props.items.map(user => (
                <UserItem
                key={user.id} 
                id={user.id} 
                image={user.image} 
                name={user.name} 
                placeCount={user.places}
                />
            ))}
        </ul>
    );
}

export default UsersList;