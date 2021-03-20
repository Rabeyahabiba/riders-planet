import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import React from 'react';

const Vehicle = (props) => {
  const history = useHistory()
  const { image, title, capacity } = props.vehicle;
  const vehicleStyle = { border: '1px solid salmon', borderRadius: '5px', margin: '5px', padding: '10px', float: 'left' }
  const handleBook = (vehicleType) => {
    history.push(`/book/${vehicleType}`);
  }

  return (
    <div className="vehicle-container" style={vehicleStyle} >
      <img style={{ height: '150px' }} src={image} alt="" />
      <h2 style={{ textAlign: 'center' }}>{title}</h2>
      <Button onClick={() => handleBook(props.vehicle.vehicleType)} variant="contained" color="primary">
        Book
        </Button>
    </div>
  );
};

export default Vehicle;