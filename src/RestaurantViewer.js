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
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import MapMarker from './MapMarker'


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
const API_KEY = process.env.REACT_APP_API_KEY

function RestaurantViewer(props) {

  const classes = useStyles();
  const [restaurants, setRestaurants] = useState([])
  const [radius, setRadius] = useState(8047)
  const [type, setType] = useState("restaurant")


  useEffect(() => {

    fetchPlaces()
  }, [type, radius])

  function fetchPlaces() {
    const url = new URL("https://maps.googleapis.com/maps/api/place/nearbysearch/json?parameters");
    url.searchParams.append("key", API_KEY);
    url.searchParams.append("location", props.coords);
    url.searchParams.append("radius", radius);
    url.searchParams.append("type", type);
    url.searchParams.append("opennow", true);

    const axios = require('axios');
    axios.get(url)
      .then(response => {
        console.log(type)
        console.log(response.data.results);

        setRestaurants(response.data.results)
      }, error => {
        console.log(error);
      });
  }
  const sortListRatingDown = () => {
    const newRest = [...restaurants]
    newRest.sort(function (a, b) { return a.rating - b.rating })
    setRestaurants(newRest)
  }
  const sortListRatingUp = () => {
    const newRest = [...restaurants]
    newRest.sort(function (a, b) { return b.rating - a.rating })
    setRestaurants(newRest)
  }
  const sortListPriceDown = () => {
    const newRest = [...restaurants]
    newRest.sort(function (a, b) { return a.price_level - b.price_level })
    setRestaurants(newRest)
  }
  const sortListPriceUp = () => {
    const newRest = [...restaurants]
    newRest.sort(function (a, b) { return b.price_level - a.price_level })
    setRestaurants(newRest)
  }

  const sortListNameUp = () => {
    const newRest = [...restaurants]
    newRest.sort(function (a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) return 1;
      if (nameA > nameB) return -1;
      return 0;
    })
    setRestaurants(newRest)
  }
  const sortListNameDown = () => {
    const newRest = [...restaurants]
    newRest.sort(function (a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    })
    setRestaurants(newRest)
  }


  return (

    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="Sort Container">
        &nbsp;&nbsp;&nbsp; Sort By: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button
            variant="contained"
            color="default"
            className={classes.button}
            onClick={sortListNameDown}
            startIcon={<FiArrowDown />}
          >
            Name
      </Button>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            onClick={sortListNameUp}
            startIcon={<FiArrowUp />}
          >
            Name
      </Button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button
            variant="contained"
            color="default"
            className={classes.button}
            onClick={sortListPriceUp}
            startIcon={<FiArrowUp />}
          >
            $$$$$
      </Button>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            onClick={sortListPriceDown}
            startIcon={<FiArrowDown />}
          >
            $ &nbsp;&nbsp;
      </Button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button
            variant="contained"
            color="default"
            className={classes.button}
            onClick={sortListRatingUp}
            startIcon={<FiArrowUp />}
          >
            Rating
      </Button>
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            onClick={sortListRatingDown}
            startIcon={<FiArrowDown />}
          >
            Rating
      </Button>
        </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple">Type</InputLabel>
          <Select
            native
            value={type}
            onChange={(e) => { setType(e.target.value) }}
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
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-native-simple">Radius</InputLabel>
          <Select
            native
            value={radius}
            onChange={(e) => { setRadius(e.target.value) }}
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
      <div style={{ display: "flex", flexDirection: "row" }} >
        <div style={{ display: "flex", flex: 1, width: "50%", justifyContent: "center" }}>
          <List className={classes.root}>

            {restaurants.map((rest, key) => (

              <RestaurantCard name={rest.name} address={rest.vicinity} rating={rest.rating} price={rest.price_level} image={rest.icon} key={key} />


            ))}

          </List>
        </div>
        <div style={{ display: "flex", flex: 1, width: "50%" }}>
          <div style={{ height: 300 }}>
            <Map style={{ height: 800, width: 800 }} center={[props.lat, props.lng]} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <MapMarker lat={props.lat} lng={props.lng} isRestaurant={false} />

              {restaurants.map((rest, key) => (

                 <MapMarker lat={rest.geometry.location.lat} lng={rest.geometry.location.lng} name={rest.name} address={rest.vicinity} isRestaurant={true} />


              ))}
              

            </Map>

          </div>
        </div>

      </div>
    </div>
  )
}
export default RestaurantViewer