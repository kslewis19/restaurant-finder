import Button from '@material-ui/core/Button';
import { TextField, FormLabel } from '@material-ui/core';
import { useEffect, useState } from 'react';

function RestaurantViewer(props){
    const [restaurants, setRestaurants]= useState(null)

    const fetchPlaces =()=>{

    }
    const callback= (results,status)=>{
        console.log(status)
    }

    return(
        <div>
            This will be a list
        </div>
    )
}
export default RestaurantViewer