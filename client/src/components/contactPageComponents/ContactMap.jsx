import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const ContactMap = () => {
  const position = [48.85629799626586, 2.391255528082261];

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: '400px', width: '50%' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          <span>
            A pretty CSS3 popup. <br /> Easily customizable.
          </span>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default ContactMap;
