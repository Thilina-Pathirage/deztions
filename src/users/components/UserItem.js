import React from 'react';
import './UserItem.css';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardHeader,MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
const UserItem = props => {
    return( 
        <Link to={`/${props.id}/places`}>
            <div className="center">
                <MDBCard className="useritem-card hover-shadow" style={{ width: '19rem' }}>
                <MDBCardHeader className="card-header">
                <MDBCardImage className="shadow-3-strong card-img" src={props.image} alt='...' position='top' />
                <h5 className="uname-header h4-responsive">{props.name}</h5>
                </MDBCardHeader>
                <MDBCardBody>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol>
                                <div className="sq-for">
                                    <p className="card-sub-header-para">User ID</p>
                                    <h1>{props.id}</h1>
                                </div>
                            </MDBCol>
                            <MDBCol>
                                <div className="sq-for">
                                    <p className="card-sub-header-para">Locations</p>
                                        <h1>{props.placeCount}</h1>
                                    </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBCardBody>
            </MDBCard>
            </div>
        </Link>
    );
}

export default UserItem;