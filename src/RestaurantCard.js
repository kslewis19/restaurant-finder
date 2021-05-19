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
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }));

function RestaurantCard(props){
    const classes = useStyles();
    return(
        <div>
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" variant="square" className={classes.square} src={props.image} />
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