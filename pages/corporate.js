import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const Corporate = () => {
  const [bussinessType, setBussinessType] = useState("yes");

  const handleBussinessType = (event) => {
    setBussinessType(event.target.value);
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
          <h1 className="text-[40px] font-bold">Corporate</h1>
          <p className="text-[1.05rem] mt-[-5px]">
            Please tell us more about yourself
          </p>
        </div>
        <div className="my-[3rem]">
          {/* Applicant Information */}
          <div className="flex flex-col justify-center items-center mt-[1rem] ">
            <div className="flex flex-col gap-3 p-8 shadow-my-lg text-sm w-[45rem] rounded-md transition-all duration-500">
              <h2 className="font-bold text-[1.1rem]">Applicant Form</h2>
              <div className="flex gap-4 mt-4">
                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex gap-4">
                    {/* Organization Type */}
                    <FormControl variant="outlined" className="flex-1">
                      <InputLabel id="demo-simple-select-outlined-label">
                        Organization Type
                      </InputLabel>
                      <Select
                        required
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        // value={age}
                        // onChange={handleChange}
                        label="Organization Type"
                      >
                        {/* <MenuItem value="">
                          <em>None</em>
                        </MenuItem> */}
                        <MenuItem value={10}>Sole Properitership</MenuItem>
                        <MenuItem value={20}>Partnership</MenuItem>
                        <MenuItem value={20}>Company</MenuItem>
                      </Select>
                    </FormControl>
                    {/* Tax Registration status */}
                    <FormControl variant="outlined" className="flex-1">
                      <InputLabel id="demo-simple-select-outlined-label">
                        Tax Registration Status
                      </InputLabel>
                      <Select
                        required
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        // value={age}
                        // onChange={handleChange}
                        label="Tax Registration Status"
                      >
                        {/* <MenuItem value="">
                          <em>None</em>
                        </MenuItem> */}
                        <MenuItem value={10}>Yes</MenuItem>
                        <MenuItem value={20}>No</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="flex gap-4">
                    <TextField
                      required
                      id="outlined-required"
                      label="CNIC Number"
                      variant="outlined"
                      className="flex-1"
                      type="number"
                    />
                    <TextField
                      required
                      id="outlined-required"
                      label="NTN Number"
                      variant="outlined"
                      className="flex-1"
                      type="number"
                    />
                  </div>
                  <div className="flex gap-4">
                    {/* City */}
                    <FormControl variant="outlined" className="flex-1">
                      <InputLabel id="demo-simple-select-outlined-label">
                        City
                      </InputLabel>
                      <Select
                        required
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        // value={age}
                        // onChange={handleChange}
                        label="city"
                      >
                        {/* <MenuItem value="">
                          <em>None</em>
                        </MenuItem> */}
                        <MenuItem value={10}>Karachi</MenuItem>
                        <MenuItem value={20}>Lahore</MenuItem>
                      </Select>
                    </FormControl>
                    {/* City */}
                    <FormControl variant="outlined" className="flex-1">
                      <InputLabel id="demo-simple-select-outlined-label">
                        City
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        // value={age}
                        // onChange={handleChange}
                        label="city"
                      >
                        {/* <MenuItem value="">
                          <em>None</em>
                        </MenuItem> */}
                        <MenuItem value={10}>Karachi</MenuItem>
                        <MenuItem value={20}>Lahore</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1 flex flex-col"></div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Corporate;
