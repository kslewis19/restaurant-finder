import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { FcUpRight } from "react-icons/fc";
import { MdCenterFocusStrong } from "react-icons/md";
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


function RestaurantCard(props) {
  const formated = props.lat + "," + props.lng
  const url = new URL("https://www.google.com/maps/search/?api=1");
  url.searchParams.append("query_place_id", props.place_id);
  url.searchParams.append("query", formated);
  const openDirections = () => {
    const url = new URL("https://www.google.com/maps/search/?api=1");
    url.searchParams.append("query_place_id", props.place_id);
    url.searchParams.append("query", formated);
    console.log(url.search)
    window.open(url, '_blank');
  }
  const classes = useStyles();
  return (
    <div>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" variant="square" className={classes.square} src={props.image} />
        </ListItemAvatar>
        <ListItemText
          component={'span'}
          primary={props.name}
          secondary={
            <React.Fragment >
              <span style={{ display: "flex", flex: 1, flexDirection: "row" }}>
                <span style={{ flex: 1 }}>
                  <Typography
                    component={'span'}
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Rating: {props.rating}/5 &nbsp;&nbsp;&nbsp;  Price: {props.price == null ? "N/A" : props.price}

                  </Typography>
                </span>
                <span style={{ flex: 1 }}>
                  <IconButton
                    color="primary"
                    onClick={openDirections}
                  >
                    <FcUpRight />

                  </IconButton>
                  <IconButton
                    color="primary"
                    onClick={() => {
                      props.setCenter([props.lat, props.lng])
                      props.setZoom(16)
                    }}
                  >
                    <MdCenterFocusStrong />
                  </IconButton>
                </span>
              </span>

              {props.address}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider />
    </div>
  )
}

export default RestaurantCard