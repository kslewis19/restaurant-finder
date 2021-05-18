import Button from '@material-ui/core/Button';
import { TextField, FormLabel } from '@material-ui/core';
import { useEffect, useState } from 'react';

function AddressForm(props){

    const [address, setAddress]= useState(null)

    const handleSubmit = (event)=>{
        event.preventDefault()
        console.log("address submited ", address )
        fetchCoords()
        
    }
    const fetchCoords=()=>{
        props.setHasAdd(true)
    }
    

    return(
        <div>
            <h2> Please enter your adress bellow to search for restaurants near you</h2>
            <form method="post" onSubmit={handleSubmit}>
            <TextField name='value' value={address} onChange={(event)=>{setAddress(event.target.value)}} placeholder={'enter address'} >
            </TextField>
            <Button type="submit" variant="contained">Search</Button>
          
        </form>
        </div>
    )
}
export default AddressForm