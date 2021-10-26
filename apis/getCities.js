const getCities = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
  
    const result = await fetch(
      `http://qaapp-uat/TCSNEWEBAPI/api/Locations/GetUniqueCities`,
      requestOptions
    )
      .then((response) => response.json())
      .catch((error) => console.log("error", error));
  
    return result;
  };
  
  export default getCities;
  