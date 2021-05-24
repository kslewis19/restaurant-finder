import { Marker, Popup } from 'react-leaflet'
import * as L from "leaflet";
import IconButton from '@material-ui/core/IconButton';
import { FcUpRight } from "react-icons/fc";

function MapMarker(props) {
  const LeafIcon = L.Icon.extend({
    options: {}
  });
  const openDirections=()=>{
    const formated= props.lat+","+ props.lng
    const url = new URL("https://www.google.com/maps/search/?api=1");
    url.searchParams.append("query_place_id", props.place_id);
    url.searchParams.append("query", formated );
    console.log(url.search)
    window.open(url, '_blank');
 }
  const blueIcon = new LeafIcon({
    iconUrl:
      "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF"
  })

  const greenIcon = new LeafIcon({
    iconUrl:
      "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF"
  });
  if (!props.isRestaurant) {
    return (
      <Marker position={[props.lat, props.lng]} icon={blueIcon}>
        <Popup>
          Your location
    </Popup>
      </Marker>
    )
  }
  return (
    <Marker position={[props.lat, props.lng]} icon={greenIcon}>
      <Popup>
        {props.name} <br /> {props.address}
        <IconButton
            color="primary"
            onClick={openDirections}
          >
            <FcUpRight/>
            
          </IconButton>
      </Popup>
    </Marker>
  )
}

export default MapMarker;