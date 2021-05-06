import React from 'react';
import PlaceList from '../components/PlaceList';

const UserPlaces = () => {

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
            address: '8 Ela Pahalawewa, Dambulla 21100',
            location: {
                lat: '7.9572586',
                lan: '80.7578487'
            },
            creator: 'u2'
        }
    ];


    return <PlaceList items={DUMMY_PLACES}/>
}

export default UserPlaces;