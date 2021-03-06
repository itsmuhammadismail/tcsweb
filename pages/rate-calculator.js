import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useRouter } from "next/dist/client/router";
import getOrigins from "../apis/getOrigins";
import getDestinations from "../apis/getDestinations";
import moment from "moment";

const RateCalculator = () => {
  const router = useRouter();
  const [origins, setOrigins] = useState(null);
  const [destinations, setDestinations] = useState(null);

  const [selectedOrigin, setSelectedOrigin] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [weight, setWeight] = useState("");

  const [showPostal, setShowPostal] = useState(false);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleOrigin = (e) => {
    setSelectedOrigin(e.target.value);
  };

  const handleDestination = (e) => {
    let value = e.target.value;
    setSelectedDestination(value);
    if (value.slice(-2) !== "PK") {
      setShowPostal(true);
    } else {
      setShowPostal(false);
    }
  };

  const handleRates = () => {
    const theDate = moment(selectedDate).format("DD/MM/YYYY");

    if (!showPostal) {
      router.push(
        `/rates?origin=${selectedOrigin}&destination=${selectedDestination}&weight=${weight}&date=${theDate}&postalCode=`
      );
    } else {
      router.push(
        `/rates?origin=${selectedOrigin}&destination=${selectedDestination}&weight=${weight}&date=${theDate}&postalCode=${postalCode}`
      );
    }
  };

  useEffect(async () => {
    const resultOrigin = await getOrigins();
    const resultDestination = await getDestinations();
    if (resultOrigin["IsSuccess"] === true) setOrigins(resultOrigin["Data"]);
    if (resultDestination["IsSuccess"] === true)
      setDestinations(resultDestination["Data"]);
  }, []);

  const [productType, setProductType] = useState({
    "Courier Express": [
      "Overnight",
      "Economy 2nd Day Express ??? For more than 5 Kg parcels",
      "Overland Cargo For bulk parcels",
      "Int???l Courier",
      "Air Freight",
      "Air Cargo Airport To Airport",
    ],
    "E-Commerce Solutions": [
      "COD Express",
      "COD Overland",
      "Fulfillment Solution",
    ],
    "Sentiments Express": ["Gift Delivery"],
    "Supply Chain Solutions": [],
    "Warehousing & Transportation": ["Cold Chain", "Ambient"],
    "Digital Transactional Printing": [],
    "Bulk Distribution": [],
  });

  const [productDropdown, setProductDropdown] = useState(
    Object.keys(productType)
  );

  let [accountProd, setAccountProd] = useState("");

  const handleAccount = () => {
    if (accountProd === "E-Commerce Solutions") route.push("/ecom");
    else route.push("/corporate");
  };

  return (
    <div>
      <Head>
        <title>TCS</title>
        <meta name="description" content="TCS" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <div className="bg-[#efefef] flex flex-col justify-center items-center h-[150px]">
          <h1 className="text-[40px] font-bold">Rate Calculator</h1>
          <p className="text-[1.05rem] mt-[-5px]">
            Please tell us more about yourself
          </p>
        </div>
        <div className="my-[3rem] mb-[5rem]">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center mt-[1rem]">
              <div className="flex flex-col gap-1 p-4 shadow-my-lg text-sm w-[45rem] rounded-md transition-all duration-500">
                <h2 className="font-bold text-[1.1rem]">Get a Quote</h2>
                <div className="flex gap-4 mt-2">
                  <div className="flex-1 flex flex-col">
                    <FormControl
                      variant="outlined"
                      className="flex-1"
                      size="small"
                      inputProps={{ style: { fontSize: 14 } }} // font size of input text
                      InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                    >
                      <InputLabel
                        id="demo-simple-select-outlined-label"
                        style={{ fontSize: "14px !important" }}
                      >
                        Origin
                      </InputLabel>
                      <Select
                        required
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        // value={age}
                        onChange={handleOrigin}
                        label="Origin"
                        inputProps={{ style: { fontSize: 14 } }} // font size of input text
                        InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                      >
                        {origins &&
                          origins.map((origin) => (
                            <MenuItem
                              key={origin.Description}
                              value={origin.Value}
                            >
                              {origin.Description}
                            </MenuItem>
                          ))}
                      </Select>
                    </FormControl>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <FormControl
                      variant="outlined"
                      className="flex-1"
                      size="small"
                      inputProps={{ style: { fontSize: 14 } }} // font size of input text
                      InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                    >
                      <InputLabel
                        id="demo-simple-select-outlined-label"
                        style={{ fontSize: "14px !important" }}
                      >
                        Destination
                      </InputLabel>
                      <Select
                        required
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        label="Destination"
                        inputProps={{ style: { fontSize: 14 } }} // font size of input text
                        InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                        onChange={handleDestination}
                      >
                        {destinations &&
                          destinations.map((destination) => (
                            <MenuItem
                              key={destination.Description}
                              value={destination.Value}
                            >
                              {destination.Description}
                            </MenuItem>
                          ))}
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className="flex gap-4 my-4">
                  <div className="flex-1 flex flex-col">
                    <TextField
                      required
                      id="outlined-required"
                      label="Weight"
                      variant="outlined"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      size="small"
                      type="number"
                      inputProps={{ style: { fontSize: 14 } }} // font size of input text
                      InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        // margin="normal"
                        size="small"
                        id="date-picker-dialog"
                        label="Date"
                        inputVariant="outlined"
                        format="MM/dd/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />
                    </MuiPickersUtilsProvider>
                  </div>
                </div>
                {showPostal && (
                  <div className="flex gap-4 mb-4">
                    <div className="flex-1 flex flex-col">
                      <TextField
                        required
                        id="outlined-required"
                        label="Postal Code"
                        variant="outlined"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        size="small"
                        inputProps={{ style: { fontSize: 14 } }} // font size of input text
                        InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                      />
                    </div>
                  </div>
                )}

                <button
                  className="text-white bg-[#D40511] h-[2.5rem] border border-[#F21E26] w-full rounded-md mt-1 p-1 text-sm hover:bg-[#F21E26] hover:text-white transition-all duration-500"
                  onClick={handleRates}
                >
                  Check Rates
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default RateCalculator;
