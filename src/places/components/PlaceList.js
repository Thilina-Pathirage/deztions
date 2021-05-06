import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import React from 'react';
import PlaceItem from './PlaceItem'
import './PlaceList.css';


const PlaceList = props => {
    if(props.items.length === 0){
        return <div>
            No places found. Maybe create one?
            <button>Share Place</button>
        </div>
    }

    return (
        <MDBContainer>
            <MDBRow>
                <ul>
                    {props.items.map(place => (
                    <PlaceItem
                        key={place.id}
                        id={place.id}
                        image={place.imageUrl}
                        title={place.title}
                        description={place.description}
                        address={place.address}
                        creatorID={place.creator}
                        coordinates={place.location}
                    />))}
                </ul>
            </MDBRow>
        </MDBContainer>
    );
}

export default PlaceList;