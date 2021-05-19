import Button from '@material-ui/core/Button';
import { TextField, FormLabel } from '@material-ui/core';
import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '40ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }));
const API_KEY= process.env.REACT_APP_API_KEY

function RestaurantViewer(props){
    const classes = useStyles();
    const [restaurants, setRestaurants]= useState([])
    const [filterd, setFiltered]= useState([])
    const [radius,setRadius]= useState(5000)
   
    useEffect(()=>{
        
        fetchPlaces()
    }, [])

    function fetchPlaces(){
        const url = new URL("https://maps.googleapis.com/maps/api/place/nearbysearch/json?parameters");
          url.searchParams.append("key", API_KEY);
          url.searchParams.append("location", props.coords);
          url.searchParams.append("radius", radius );
          url.searchParams.append("type", "restaurant" );

          const axios = require('axios');
          axios.get(url)
          .then(response => {
            //console.log(response.data.results);
            
            filterList(response.data.results)
          }, error => {
            console.log(error);
          });
    }
    const filterList= (data)=>{
        console.log("res",data)
        const newRest = data.filter(rest=>rest.opening_hours.open_now==true);

        console.log("filt",newRest)
        //setFiltered(newRest)
        setRestaurants(newRest)
    }


    
    return(
        <div style ={{display: "flex",flexDirection:"row"}} >
             <div style ={{display: "flex",flex:1, width: "50%", justifyContent:"center"}}>
             <List className={classes.root}>
            
            {restaurants.map((rest,key)=>(

                rest.opening_hours.open_now==true?<RestaurantCard name={rest.name} address={rest.vicinity} rating={rest.rating} price={rest.price_level} image={rest.icon} key={key}/>: null 
                
                
            ))}
            
            </List>
            </div>
            <div style ={{display: "flex",flex:1, width: "50%"}}>
                the map go here
                </div>
            
        </div>
    )
}
export default RestaurantViewer