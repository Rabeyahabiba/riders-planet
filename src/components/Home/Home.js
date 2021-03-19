import React from 'react';
import Vehicle from '../Vehicle/Vehicle';




const Home = () => {
    const style = {
        display: 'flex',
        margin: '40px',
        justifyContent: 'space-between'
    }
    const vehicles = [
        {
            title: 'Bike',
            imgUrl: 'https://ibb.co/1J96nQ2',
            capacity: 1
            
        },
        {
            title: 'Car',
            // description: 'Superior Double Rooms are perfectly equipped for traveling couples or friends.',
            imgUrl: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/offers/offer-images/burj-al-arab-royal-suite-staircase-5-hero.jpg',
            capacity: 2
            
        },
        {
            title: 'Bus',
            // description: ' Have lots of in-room facilities and are designed in open-concept living area.',
            imgUrl: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/burj-al-arab-jumeirah/room/presidential-two-bedroom-suite/burj-al-arab-presidential-suite-guest-bedroom_6-4_landscape/burj-al-arab-presidential-suite-guest-bedroom_16-9_landscape.jpg?w=2080',            
            capacity: 4
           
        },
        {
            title: 'Train',
            imgUrl: 'https://ibb.co/1J96nQ2',
            capacity: 5
        },
        {
            title: 'Cycle',
            // description: ' Have lots of in-room facilities and are designed in open-concept living area.',
            imgUrl: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/burj-al-arab-jumeirah/room/presidential-two-bedroom-suite/burj-al-arab-presidential-suite-guest-bedroom_6-4_landscape/burj-al-arab-presidential-suite-guest-bedroom_16-9_landscape.jpg?w=2080',           
            capacity: 1
            
        }


    ]
    return (
        <div style={style}>
            {
                vehicles.map(vehicle => <Vehicle key={vehicle.vehicleType} vehicle={vehicle}></Vehicle>)
            }
        </div>
    );
};

export default Home;