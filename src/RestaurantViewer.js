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
import { FiArrowDown } from "react-icons/fi";
import { FiArrowUp } from "react-icons/fi";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


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
    const [radius,setRadius]= useState(10000)
   
    useEffect(()=>{
        
        fetchPlaces()
    }, [])

    function fetchPlaces(){
        const url = new URL("https://maps.googleapis.com/maps/api/place/nearbysearch/json?parameters");
          url.searchParams.append("key", API_KEY);
          url.searchParams.append("location", props.coords);
          url.searchParams.append("radius", radius );
          url.searchParams.append("type", "restaurant" );
          url.searchParams.append("opennow", true );

          const axios = require('axios');
          axios.get(url)
          .then(response => {
            console.log(response.data.results);
            
            setRestaurants(response.data.results)
          }, error => {
            console.log(error);
          });
    }

    const sortList= ()=>{
        const newRest = [...restaurants]
        newRest.sort(function(a, b){return a.price_level - b.price_level})
        console.log(newRest)
        setRestaurants(newRest)
    }
    
    return(
      <div>
        <div style ={{display: "flex",flexDirection:"row"}}>
          <div className= "Sort Container">
          Sort By: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<FiArrowDown />}
      >
        Name
      </Button>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<FiArrowUp />}
      >
        Name
      </Button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<FiArrowUp />}
      >
        $$$$$
      </Button>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<FiArrowDown />}
      >
        $ &nbsp;&nbsp;
      </Button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<FiArrowUp />}
      >
        Rating
      </Button>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<FiArrowDown />}
      >
        Rating
      </Button>
      </div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Type</InputLabel>
        <Select
          native
          //value={state.age}
          //onChange={handleChange}
          defaultValue={"restaurant"}
          inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
        >
          
          <option value={"restaurant"}>restaurant</option>
          <option value={"bar"}>bar</option>
          <option value={"cafe"}>cafe</option>
          <option value={"meal_takeaway"}>takeout</option>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Radius</InputLabel>
        <Select
          native
          //value={state.age}
          //onChange={handleChange}
          defaultValue={8047}
          inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
        >
          
          <option value={1609}>1 mile</option>
          <option value={3219}>2 miles</option>
          <option value={8047}>5 miles</option>
          <option value={16093}>10 miles</option>
          <option value={24140}>15 miles</option>
        </Select>
      </FormControl>
          </div>
        <div style ={{display: "flex",flexDirection:"row"}} >
             <div style ={{display: "flex",flex:1, width: "50%", justifyContent:"center"}}>
             <List className={classes.root}>
            
            {restaurants.map((rest,key)=>(

                <RestaurantCard name={rest.name} address={rest.vicinity} rating={rest.rating} price={rest.price_level} image={rest.icon} key={key}/>
                
                
            ))}
            
            </List>
            </div>
            <div style ={{display: "flex",flex:1, width: "50%"}}>
                the map go here
                </div>
            
        </div>
        </div>
    )
}
export default RestaurantViewer