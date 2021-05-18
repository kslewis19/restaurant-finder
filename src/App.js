import logo from './logo.svg';
import './App.css';
import RestaurantViewer from './RestaurantViewer'
import AddressForm from './AddressForm'
import { useEffect, useState } from 'react';

function App() {
  const [hasAdd, setHasAdd]= useState(false)
  const [coords, setCoords] = useState([0,0])
  return (
    <div >
    <h3>Restaurant Finder</h3>
    {hasAdd? <RestaurantViewer coords={coords} />:<AddressForm setHasAdd= {setHasAdd} setCoords={setCoords} />}
    </div>
  );
}

export default App;
