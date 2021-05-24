import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { FiArrowDown } from "react-icons/fi";
import IconButton from '@material-ui/core/IconButton';
import { FcUpRight } from "react-icons/fc";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }));
 

function RestaurantCard(props){
  const formated= props.lat+","+ props.lng
  const url = new URL("https://www.google.com/maps/search/?api=1");
  url.searchParams.append("query_place_id", props.place_id);
  url.searchParams.append("query", formated);
 const openDirections=()=>{
    const url = new URL("https://www.google.com/maps/search/?api=1");
    url.searchParams.append("query_place_id", props.place_id);
    url.searchParams.append("query", formated);
    console.log(url.search)
    window.open(url, '_blank');
 }
    const classes = useStyles();
    return(
        <div>
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" variant="square" className={classes.square} src={props.image} />
          <IconButton
            color="primary"
            onClick={openDirections}
          >
            <FcUpRight/>
          </IconButton>
        </ListItemAvatar>
        <ListItemText
          primary= {props.name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {props.rating}/5  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Price: {props.price==null?"unknown": props.price} 
              </Typography>
              <br/>
              {props.address}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider/>
        </div>
    )
}

export default RestaurantCard