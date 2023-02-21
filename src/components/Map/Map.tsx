import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { FC } from 'react'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';
import { IPProps } from '@/types/IPProps';


var mapIcon = L.icon({
  iconUrl: 'icon-location.svg',
  iconSize:     [30, 38], // size of the icon
});

const Map: FC<IPProps> = ({ ipData }) => {

  return (
    <MapContainer className='w-full flex-1 z-0' key={JSON.stringify([ipData.lat, ipData.lng])} center={[ipData.lat, ipData.lng]} zoom={13} scrollWheelZoom={false} fadeAnimation={true} >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[ipData.lat, ipData.lng]} icon={mapIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map