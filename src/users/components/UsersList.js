import React from 'react';
import './UsersList.css';
import './UserItem.css';
import UserItem from './UserItem';
import { MDBContainer, MDBCard, MDBRow, MDBCol } from 'mdb-react-ui-kit';

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
        <MDBContainer>
            <MDBRow>
                <MDBCol>
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
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default UsersList;