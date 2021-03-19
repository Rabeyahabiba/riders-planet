import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';


export default function Vehicle({vehicle}){
//   const classes = useStyles();
  const history = useHistory()
    const handleLogin = (vehicleType) => {
        history.push(`/login/${vehicleType}`);
    }
  return (
      <div>
    
      <img src={`/images/${vehicle.vehicleType}.png`} alt=""/>
     
        <Button onClick={() => handleLogin(vehicle.vehicleType)} variant="contained" color="primary">
           Bike
        </Button>
     
    </div>
  );
}
