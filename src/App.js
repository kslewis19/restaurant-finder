import logo from './logo.svg';
import './App.css';
import RestaurantViewer from './RestaurantViewer'
import AddressForm from './AddressForm'
import { useEffect, useState } from 'react';

function App() {
  const [hasAdd, setHasAdd]= useState(false)
  const [coords, setCoords] = useState("-33.8670522,151.1957362")
  
  
  return (
    <div >
      <div style={{flexDirection: "row",textAlign:"center"}}>
    
    <h1 >Restaurant Finder</h1>
    </div>
    {hasAdd? <RestaurantViewer coords={coords} />:<AddressForm setHasAdd= {setHasAdd} setCoords={setCoords} />}
    </div>
  );
}

export default App;
