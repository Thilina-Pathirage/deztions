import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple, MDBCol, MDBCardFooter } from 'mdb-react-ui-kit';
import './PlaceItem.css';


const PlaceItem = props => {
    return <div>
        <MDBCol className="center">
        <MDBCard className="user-place-card" style={{ maxWidth: '50rem' }}>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay image-area'>
                <MDBCardImage className="place-card-image img-fluid" src={props.image} fluid alt={props.title} />
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </MDBRipple>
            <MDBCardBody>
                <MDBCardTitle className="user-place-card-title">{props.title}</MDBCardTitle>
                <h5>{props.address}</h5>
                <MDBCardText>
                    {props.description}
                </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
            <MDBBtn className="m-2 btn-success" href='#'>View on Map</MDBBtn>
            <MDBBtn className="m-2 btn-success" href='#'>Edit</MDBBtn>
            <MDBBtn className="m-2 btn-success" href='#'>Delete</MDBBtn>
            </MDBCardFooter>
        </MDBCard>
        </MDBCol>
    </div>
}

export default PlaceItem;