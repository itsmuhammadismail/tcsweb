import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

// const center = {
//   lat: 24.89496195,
//   lng: 67.15677305,
// };

function TheGoogleMap(props) {
  const [center, setCenter] = useState({
    lat: 24.89496195,
    lng: 67.15677305,
  });
  useEffect(() => {
    setCenter(props.center);
  }, [props.center]);
  return (
    <LoadScript googleMapsApiKey="AIzaSyC9Ntbzd-arHSe4s-H1Og78KwucQtppVu0">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {/* Child components, such as markers, info windows, etc. */}
        <>
          {props.branches.map((branch) => (
            <Marker
              key={branch.exp_id}
              position={{ lat: +branch.lat, lng: +branch.log }}
              onClick={() => props.handleMarker(branch.exp_id)}
            />
          ))}
        </>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(TheGoogleMap);
