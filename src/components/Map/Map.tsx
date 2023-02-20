import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { FC } from 'react'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';


var mapIcon = L.icon({
  iconUrl: 'icon-location.svg',

  iconSize:     [30, 38], // size of the icon
  // shadowSize:   [50, 64], // size of the shadow
  // iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  // shadowAnchor: [4, 62],  // the same for the shadow
  // popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

// import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// let DefaultIcon = L.icon({
//   iconUrl: 'leaflet/dist/images/marker-icon.png',
//   shadowUrl: 'leaflet/dist/images/marker-shadow.png'
// });

// L.Marker.prototype.options.icon = DefaultIcon;

interface Props {
  lat: number,
  lng: number,
  className: string,
}

const Map: FC<Props> = (props) => {

  return (
    <MapContainer key={JSON.stringify([props.lat, props.lng])} className={props.className} center={[props.lat, props.lng]} zoom={13} scrollWheelZoom={false} fadeAnimation={true} >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[props.lat, props.lng]} icon={mapIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map