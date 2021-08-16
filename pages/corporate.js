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
import { Checkbox, FormGroup } from "@material-ui/core";

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
          {/* Applicant Information  */}
          <div className="flex flex-col justify-center items-center mt-[1rem] ">
            <div className="flex flex-col gap-3 p-8 shadow-card text-sm w-[45rem] rounded-md transition-all duration-500">
              <h2 className="font-bold text-[1.1rem]">Applicant Form</h2>
              <div className="flex gap-4 mt-4">
                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex gap-4">
                    {/* Organization Type */}
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
                        Organization Type
                      </InputLabel>
                      <Select
                        required
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        // value={age}
                        // onChange={handleChange}
                        label="Organization Type"
                        inputProps={{ style: { fontSize: 14 } }} // font size of input text
                        InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
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
                      label="Customer Name/ Accout Title"
                      variant="outlined"
                      className="flex-1"
                      size="small"
                      type="number"
                      inputProps={{ style: { fontSize: 14 } }} // font size of input text
                      InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                    />
                    <TextField
                      required
                      id="outlined-required"
                      label="CNIC Number"
                      variant="outlined"
                      className="flex-1"
                      size="small"
                      type="number"
                      inputProps={{ style: { fontSize: 14 } }} // font size of input text
                      InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                    />
                  </div>
                  <div className="flex gap-4">
                    <TextField
                      required
                      id="outlined-required"
                      label="NTN Number"
                      variant="outlined"
                      className="flex-1"
                      size="small"
                      type="number"
                      inputProps={{ style: { fontSize: 14 } }} // font size of input text
                      InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                    />
                    {/* Industry */}
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
                        Industry
                      </InputLabel>
                      <Select
                        required
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        // value={age}
                        // onChange={handleChange}
                        label="Industry"
                      >
                        <MenuItem value={10}>General</MenuItem>
                        <MenuItem value={20}>Banking</MenuItem>
                        <MenuItem value={30}>Banking Bulk</MenuItem>
                        <MenuItem value={40}>General Bulk</MenuItem>
                        <MenuItem value={50}>Print Banking</MenuItem>
                        <MenuItem value={60}>General Banking</MenuItem>
                        <MenuItem value={70}>Sentiments</MenuItem>
                        <MenuItem value={80}>International Import</MenuItem>
                        <MenuItem value={90}>International Export</MenuItem>
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
          {/* Billing Address */}
          <div className="flex flex-col justify-center items-center mt-[1rem] ">
            <div className="flex flex-col gap-3 p-8 shadow-card text-sm w-[45rem] rounded-md transition-all duration-500">
              <h2 className="font-bold text-[1.1rem]">Billing Address</h2>
              <div className="flex gap-4 mt-4">
                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex gap-4">
                    <TextField
                      required
                      id="outlined-required"
                      label="Address"
                      variant="outlined"
                      className="flex-1"
                      size="small"
                      inputProps={{ style: { fontSize: 14 } }} // font size of input text
                      InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                    />
                  </div>

                  <div className="flex gap-4">
                    {/* City */}
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
                    {/* Province */}
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
                        Province
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        // value={age}
                        // onChange={handleChange}
                        label="province"
                      >
                        {/* <MenuItem value="">
                          <em>None</em>
                        </MenuItem> */}
                        <MenuItem value={10}>Sindh</MenuItem>
                        <MenuItem value={20}>KPK</MenuItem>
                        <MenuItem value={30}>Punjab</MenuItem>
                        <MenuItem value={40}>Balochistan</MenuItem>
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
          {/* Pickup Address */}
          <div className="flex flex-col justify-center items-center mt-[1rem] ">
            <div className="flex flex-col gap-3 p-8 shadow-card text-sm w-[45rem] rounded-md transition-all duration-500">
              <h2 className="font-bold text-[1.1rem]">Pickup Address</h2>
              <div className="flex gap-4 mt-4">
                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex gap-4">
                    <TextField
                      required
                      id="outlined-required"
                      label="Address"
                      variant="outlined"
                      className="flex-1"
                      size="small"
                      inputProps={{ style: { fontSize: 14 } }} // font size of input text
                      InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                    />
                  </div>

                  <div className="flex gap-4">
                    {/* City */}
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
                    {/* Province */}
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
                        Province
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        // value={age}
                        // onChange={handleChange}
                        label="province"
                      >
                        {/* <MenuItem value="">
                          <em>None</em>
                        </MenuItem> */}
                        <MenuItem value={10}>Sindh</MenuItem>
                        <MenuItem value={20}>KPK</MenuItem>
                        <MenuItem value={30}>Punjab</MenuItem>
                        <MenuItem value={40}>Balochistan</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="flex gap-4">
                    <TextField
                      required
                      id="outlined-required"
                      label="Cell Number"
                      variant="outlined"
                      className="flex-1"
                      size="small"
                      type="number"
                      inputProps={{ style: { fontSize: 14 } }} // font size of input text
                      InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                    />
                    <TextField
                      required
                      id="outlined-required"
                      label="Landline Number"
                      variant="outlined"
                      className="flex-1"
                      size="small"
                      type="number"
                      inputProps={{ style: { fontSize: 14 } }} // font size of input text
                      InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="mt-2  text-lg">Product</p>
                    <div className="flex gap-4">
                      <FormGroup row>
                        <div className="flex-1 flex flex-col">
                          <FormControlLabel
                            control={
                              <Checkbox name="checkedB" color="primary" />
                            }
                            label={<p className="text-sm">Clothing</p>}
                          />
                          <FormControlLabel
                            control={
                              <Checkbox name="checkedB" color="primary" />
                            }
                            label={<p className="text-sm">Books</p>}
                          />
                          <FormControlLabel
                            control={
                              <Checkbox name="checkedB" color="primary" />
                            }
                            label={<p className="text-sm">Watches</p>}
                          />
                          <FormControlLabel
                            control={
                              <Checkbox name="checkedB" color="primary" />
                            }
                            label={
                              <p className="text-sm">Perfumes and Cosmetics</p>
                            }
                          />
                          <FormControlLabel
                            control={
                              <Checkbox name="checkedB" color="primary" />
                            }
                            label={<p className="text-sm">Sports</p>}
                          />
                        </div>
                        <div className="flex-1 flex flex-col">
                          <FormControlLabel
                            control={
                              <Checkbox name="checkedB" color="primary" />
                            }
                            label={<p className="text-sm">Home Decor</p>}
                          />
                          <FormControlLabel
                            control={
                              <Checkbox name="checkedB" color="primary" />
                            }
                            label={<p className="text-sm">Home Appliances</p>}
                          />
                          <FormControlLabel
                            control={
                              <Checkbox name="checkedB" color="primary" />
                            }
                            label={
                              <p className="text-sm">Health and Fitness</p>
                            }
                          />
                          <FormControlLabel
                            control={
                              <Checkbox name="checkedB" color="primary" />
                            }
                            label={
                              <p className="text-sm">
                                Mobile and Tablets (PTA Approved)
                              </p>
                            }
                          />
                          <FormControlLabel
                            control={
                              <Checkbox name="checkedB" color="primary" />
                            }
                            label={
                              <p className="text-sm">
                                Computer, Peripherals and Accessories
                              </p>
                            }
                          />
                        </div>
                      </FormGroup>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <TextField
                      required
                      id="outlined-required"
                      label="Average Shipments per Month"
                      variant="outlined"
                      className="flex-1"
                      size="small"
                      type="number"
                      inputProps={{ style: { fontSize: 14 } }} // font size of input text
                      InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                    />
                    <TextField
                      required
                      id="outlined-required"
                      label="Average Weight per Month"
                      variant="outlined"
                      className="flex-1"
                      size="small"
                      type="number"
                      inputProps={{ style: { fontSize: 14 } }} // font size of input text
                      InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1 flex flex-col"></div>
              </div>
            </div>
          </div>
          {/* Rates and Acceptance */}
          <div className="flex flex-col justify-center items-center mt-[1rem] ">
            <div className="flex flex-col gap-3 p-8 shadow-card text-sm w-[45rem] rounded-md transition-all duration-500">
              <h2 className="font-bold text-[1.1rem]">Rates & Acceptance</h2>
              <div className="flex gap-4">
                <div className="flex-1 flex flex-col">
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={true}
                          name="checkedB"
                          iconStyle={{fill: 'red'}}
                        />
                      }
                      label={
                        <p className="text-sm">
                          I have read and hereby accept the{" "}
                          <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://customeraccount.tcscourier.com/accountopening/TermsAndCond.aspx"
                            className="text-[#337ab7]"
                          >
                            Terms and Conditions
                          </a>
                          *
                        </p>
                      }
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={true}
                          name="checkedB"
                          iconStyle={{fill: 'red'}}
                        />
                      }
                      label={
                        <p className="text-sm">
                          I have read and hereby accept the{" "}
                          <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://customeraccount.tcscourier.com/accountopening/RegUndertaking.aspx"
                            className="text-[#337ab7]"
                          >
                            Undertaking
                          </a>
                          *
                        </p>
                      }
                    />
                  </FormGroup>
                  <p className="mt-4 text-xs">
                    A TCS sales representative will contact you within next 24
                    hours (during workdays) for further details and
                    confirmations.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1 flex flex-col"></div>
              </div>
            </div>
            <button className="text-white bg-[#D40511] border border-[#F21E26] w-[45rem] rounded-md mt-1 p-1 h-[2.5rem] text-sm hover:bg-[#F21E26] hover:text-white transition-all duration-500">
              Submit
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Corporate;
