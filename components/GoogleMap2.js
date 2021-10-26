import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const TheGoogleMap = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 24.89496195, lng: 67.15677305 }}
    >
      {props.branches.map((branch) => (
        <Marker
          key={branch.exp_id}
          position={{ lat: +branch.lat, lng: +branch.log }}
          onClick={() => props.handleMarker(branch.exp_id)}
        />
      ))}
    </GoogleMap>
  ))
);
export default TheGoogleMap;
