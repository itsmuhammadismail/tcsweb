const getRateTeriff = async (origin, destination, weight, date, postal) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const result = await fetch(
    `http://qaapp-uat/TCSNEWEBAPI/api/RateChecker?orgn=${origin}&dstn=${destination}&weight=${weight}&transdate=${date}&postalCode=${postal}`,
    requestOptions
  )
    .then((response) => response.json())
    .catch((error) => console.log("error", error));

  return result;
};

export default getRateTeriff;
