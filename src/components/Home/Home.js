import React, { useEffect, useState } from 'react';
import Vehicle from '../Vehicle/Vehicle';
import vehicleData from '../../fakeData/data.json';

const Home = () => {
    const [vehicles, setVehicle] = useState([]);
    const [destination, setDestination] = useState([]);
    useEffect(() => {
        setVehicle(vehicleData);
    }, [])
    const handleAddVehicle = (vehicle) => {
        const newDestination = [...destination, vehicle];
        setDestination(newDestination);
    }
    return (
        <div >
            {
                vehicles.map(vehicle => <Vehicle vehicle={vehicle} handleAddVehicle={handleAddVehicle}></Vehicle>)
            }
        </div>
    );
};

export default Home;