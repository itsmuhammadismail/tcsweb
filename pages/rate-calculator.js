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

const RateCalculator = () => {
  const [customer, setCustomer] = useState("");
  const [shipping, setShipping] = useState("");

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [productType, setProductType] = useState({
    "Courier Express": [
      "Overnight",
      "Economy 2nd Day Express – For more than 5 Kg parcels",
      "Overland Cargo For bulk parcels",
      "Int’l Courier",
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

  const [product2Dropdown, setProduct2Dropdown] = useState([]);

  let [accountProd, setAccountProd] = useState("");

  const handleProduct = (e) => {
    e.target.value === "0"
      ? setProduct2Dropdown([])
      : setProduct2Dropdown(productType[e.target.value]);
    setAccountProd(e.target.value);
  };

  const route = useRouter();

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
                        // onChange={handleChange}
                        label="Origin"
                        inputProps={{ style: { fontSize: 14 } }} // font size of input text
                        InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                        onChange={handleProduct}
                      >
                        <MenuItem value="Abbotabad">Abbotabad</MenuItem>
                        <MenuItem value="Karachi">Karachi</MenuItem>
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
                        // value={age}
                        // onChange={handleChange}
                        label="Destination"
                        inputProps={{ style: { fontSize: 14 } }} // font size of input text
                        InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                        onChange={handleProduct}
                      >
                        <MenuItem value="Abbotabad">Lahore</MenuItem>
                        <MenuItem value="Karachi">Karachi</MenuItem>
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
                <Link href="/rates">
                  <a>
                    <button className="text-white bg-[#D40511] h-[2.5rem] border border-[#F21E26] w-full rounded-md mt-1 p-1 text-sm hover:bg-[#F21E26] hover:text-white transition-all duration-500">
                      Check Rates
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default RateCalculator;
