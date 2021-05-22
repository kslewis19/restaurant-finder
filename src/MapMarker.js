import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import * as L from "leaflet";

function MapMarker(props) {
  const LeafIcon = L.Icon.extend({
    options: {}
  });

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
      </Popup>
    </Marker>
  )
}

export default MapMarker;