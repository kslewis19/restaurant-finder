
import './App.css';
import RestaurantViewer from './RestaurantViewer'
import AddressForm from './AddressForm'
import { useState } from 'react';
import FastfoodIcon from '@material-ui/icons/Fastfood';


function App() {
  const [hasAdd, setHasAdd] = useState(false)
  const [coords, setCoords] = useState("0,0")
  const [lat, setLat] = useState(0)
  const [lng, setLng] = useState(0)


  return (
    <div className="root" >
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <FastfoodIcon style={{ size: 20 }} />
        <h1 >Restaurant Finder</h1>
      </div>
      {hasAdd ? <RestaurantViewer coords={coords} lat={lat} lng={lng} /> : <AddressForm setHasAdd={setHasAdd} setCoords={setCoords} setLat={setLat} setLng={setLng} />}
    </div>
  );
}

export default App;
