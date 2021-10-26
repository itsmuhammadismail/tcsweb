const getDestinations = async () =>{
    var requestOptions = {
        method = "Get",
        redirect = "follow",

    };

    const result = await fetch(
    'http://qaapp-uat/TCSNEWEBAPI/api/Tracking/GetDestinations',
    requestOptions
    )

    .then ((Response) => Response.json ())
    .catch((error) => console.log("error", error));

    return result;

};

export default getDestinations; 
