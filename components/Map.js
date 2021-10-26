import { useEffect, useState, useRef } from "react";
import MapPopup from "./MapPopup";
import GoogleMap from "./GoogleMap";
import getAllBranches from "../apis/getAllBranches";
import getCities from "../apis/getCities";
import getBranchesByCities from "../apis/getBranchesByCities";

const Map = ({ city }) => {
  const searchRef = useRef();
  const [mapHover, setMapHover] = useState(false);
  const [branches, setBranches] = useState([]);
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [offices, setOffices] = useState([]);
  const [popupCity, setPopupCity] = useState(null);
  const [lat, setLat] = useState(24.89496195);
  const [lng, setLng] = useState(67.15677305);
  const [center, setCenter] = useState({ lat: 24.89496195, lng: 67.15677305 });

  useEffect(async () => {
    const result = await getAllBranches();
    if (result && result["IsSuccess"]) {
      setBranches(result["Data"]);
      console.log(result["Data"]);
    }
    const citiesResult = await getCities();
    if (citiesResult && citiesResult["IsSuccess"]) {
      setCities(citiesResult["Data"]);
      setFilteredCities(citiesResult["Data"]);
    }
  }, []);

  useEffect(() => {
    if (city !== null) {
      getBranches(city);
      window.scroll({
        top: 200,
        left: 0,
        behavior: "smooth",
      });
      searchRef.current.value = city;
      
    }
  }, [city]);

  const handleFilteredCites = (e) => {
    console.log(e.target.value);

    let str = e.target.value;
    str = str.toLowerCase();

    const newcities = cities.filter(
      (city) => city.City.toLowerCase().includes(str) || e.target.value === ""
    );
    setFilteredCities(newcities);
  };

  const getBranches = async (city) => {
    if (city !== "") {
      const results = await getBranchesByCities(city);
      console.log(results);
      if (results["IsSuccess"] === true) {
        setOffices(results["Data"]);
        setCenter({
          lat: +results["Data"][0]["lat"],
          lng: +results["Data"][0]["log"],
        });
      }
    }
  };

  const handleMarker = (id) => {
    const office = branches.filter((office) => office.exp_id === id);
    console.log("The office ", office);
    setPopupCity(office[0]);
    setMapHover(true);
  };

  return (
    <div className=" mx-auto flex justify-center items-center mt-12 shadow-my w-[62rem]">
      <div className=" w-[20rem]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="bg-[#f7f7f7] p-4 m-3 rounded-sm relative"
        >
          <h2 className="font-semibold text-xl pb-3">Search</h2>
          <div className="">
            <input
              type="text"
              autoComplete="off"
              autoFill="off"
              placeholder="Enter Your City"
              className="bg-transparent text-sm border-b focus:outline-none pb-3 w-full mb-5 city-secrch"
              id="cities"
              list="cities"
              name="cities"
              ref={searchRef}
              onChange={handleFilteredCites}
            />

            {/* <ul className="absolute bg-white w-full z-[1000] ml-[-1rem] h-[10rem] overflow-y-scroll fitered-city-list">
              {filteredCities.length !== 0 &&
                filteredCities.map((city) => (
                  <li
                    key={city.City}
                    className="cursor-pointer hover:bg-red-600"
                    onClick={() => {
                      searchRef.current.value = city.City;
                      getBranches(city.City);
                    }}
                  >
                    {city.City}
                  </li>
                ))}
            </ul> */}
          </div>

          <div className="absolute bottom-[-1rem] right-3 flex gap-3">
            <div className="bg-[#dadada] rounded-full w-10 h-10 p-2 flex justify-center items-center">
              <img src="/location.svg" alt="" />
            </div>
            <button
              type="submit"
              className="bg-[#f21e26] rounded-full w-10 h-10 p-3 flex justify-center items-center"
              onClick={() => getBranches(searchRef.current.value)}
            >
              <img src="/search.svg" alt="" />
            </button>
          </div>
        </form>

        <h2 className="text-[#f21e26] font-semibold text-lg p-4">
          Search Result
        </h2>
        <div className="h-[20rem] overflow-y-scroll">
          {offices.map((office) => (
            <div
              key={office.exp_id}
              className="border-t px-4 py-4 flex flex-col gap-1 cursor-pointer"
              onClick={() => {
                setMapHover(true);
                setPopupCity(office);
                setCenter({ lat: +office.lat, lng: +office.log });
              }}
            >
              <h2 className="font-semibold text-sm">{office.name}</h2>
              <p className="text-xs">City: {office.city}</p>
              <p className="text-xs">Address: {office.address}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1">
        {/* <img src="/map.png" alt="" className="h-[34rem]" /> */}
        <div className="h-[34rem] ">
          <GoogleMap
            // googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC9Ntbzd-arHSe4s-H1Og78KwucQtppVu0"
            // loadingElement={<div style={{ height: `100%` }} />}
            // containerElement={<div style={{ height: `100%` }} />}
            // mapElement={<div style={{ height: `100%` }} />}
            branches={branches}
            handleMarker={handleMarker}
            center={center}
          />
        </div>
        {mapHover && (
          <>
            <div className="absolute top-0 w-full h-full bg-black opacity-30"></div>
            <MapPopup onClose={() => setMapHover(false)} office={popupCity} />
          </>
        )}
      </div>
    </div>
  );
};

export default Map;
