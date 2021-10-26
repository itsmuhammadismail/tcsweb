const tracking = async (no) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const result = await fetch(
    `http://qaapp-uat/TCSNEWEBAPI/api/Tracking?TrackingNumber=${no}`,
    requestOptions
  )
    .then((response) => response.json())
    .catch((error) => console.log("error", error));

  return result;
};

export default tracking;
