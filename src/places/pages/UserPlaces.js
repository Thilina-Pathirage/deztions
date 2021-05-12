import React from 'react';
import PlaceList from '../components/PlaceList';
import { useParams } from 'react-router-dom';


const DUMMY_PLACES = [
    {
        id: 'p1',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Idalgashinna_railway_station_2017.jpg',
        title: 'Idalgashinna Railway Station',
        description: 'Idalgashinna is a small village in the Badulla District, Uva Province, Sri Lanka. Situated at an elevation of about 1,615 metres above sea level, it is located in the Haputale-Namunukula mountain range.',
        address: 'Idalgashinna Railway Station, Idalgashinna, Sr Lanka',
        location: {
            lat: '6.7843273',
            lan: '80.8912396'
        },
        creator: 'u1'
    },

    {
        id: 'p2',
        imageUrl: 'https://www.reddottours.com/uploads/Activities/Sigiriya-Rock-Fortress/Sigiriya-Rock-Fortress-header.jpg',
        title: 'Sigiriya, Dambulla, Sri Lanka',
        description: 'The ruins of a 5th-century city, anchored by a towering rock fortress accessible by steep stairs.',
        address: 'Thalkotta Rd, Sigiriya',
        location: {
            lat: '7.9572586',
            lan: '80.7578487'
        },
        creator: 'u2'
    },

    {
        id: 'p3',
        imageUrl: 'https://www.srilankatravelandtourism.com/places-sri-lanka/ella/ella-images/ella-1-sri-lanka.jpg',
        title: 'Ella, Sri Lanka',
        description: 'Ella is a small town in the Badulla District of Uva Province, Sri Lanka governed by an Urban Council. It is approximately 200 kilometres east of Colombo and is situated at an elevation of 1,041 metres above sea level. The area has a rich bio-diversity, dense with numerous varieties of flora and fauna. ',
        address: 'Badulla',
        location: {
            lat: '6.8727447',
            lan: '81.0518996,'
        },
        creator: 'u3'
    }
];


const UserPlaces = () => {

    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces}/>
}

export default UserPlaces;