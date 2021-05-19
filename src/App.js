import logo from './logo.svg';
import './App.css';
import RestaurantViewer from './RestaurantViewer'
import AddressForm from './AddressForm'
import { useEffect, useState } from 'react';
import FastfoodIcon from '@material-ui/icons/Fastfood';

function App() {
  const [hasAdd, setHasAdd]= useState(false)
  const [coords, setCoords] = useState("0,0")
  
  
  return (
    <div class="root" >
      <div style={{display:"flex",flexDirection: "row",justifyContent:"center",alignItems:"center"}}>
    <FastfoodIcon style={{size: 20}}/>
    <h1 >Restaurant Finder</h1>
    </div>
    {hasAdd? <RestaurantViewer coords={coords} />:<AddressForm setHasAdd= {setHasAdd} setCoords={setCoords} />}
    </div>
  );
}

export default App;
