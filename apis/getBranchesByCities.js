const getBranchesByCities = async (city) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const result = await fetch(
    `http://qaapp-uat/TCSNEWEBAPI/api/Locations/GetBranchesByCityName?City=${city}`,
    requestOptions
  )
    .then((response) => response.json())
    .catch((error) => console.log("error", error));

  return result;
};

export default getBranchesByCities;
