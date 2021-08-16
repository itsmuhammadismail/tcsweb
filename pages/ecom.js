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
import { Modal, Button } from "antd";

const Ecom = () => {
  const [bussinessType, setBussinessType] = useState("yes");

  const handleBussinessType = (event) => {
    setBussinessType(event.target.value);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
          <h1 className="text-[40px] font-bold">ECOM</h1>
          <p className="text-[1.05rem] mt-[-5px]">
            Please tell us more about yourself
          </p>
        </div>
        <div className="my-[3rem]">
          {/* Bussiness Type */}
          <div className="flex flex-col justify-center items-center mt-[1rem] ">
            <div className="flex flex-col gap-3 p-8 shadow-card text-sm w-[45rem] rounded-md transition-all duration-500">
              <h2 className="font-bold text-[1.1rem]">Business Type</h2>
              <div className="flex gap-4">
                <div className="flex-1 flex flex-col">
                  <FormControl component="fieldset">
                    <FormLabel component="legend">
                      Is your Business a registered tax Payer
                    </FormLabel>
                    <RadioGroup
                      aria-label="bussinessType"
                      name="bussinessType"
                      value={bussinessType}
                      onChange={handleBussinessType}
                      className="rowflex"
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1 flex flex-col"></div>
              </div>
            </div>
          </div>
          {/* Applicant Information */}
          <div className="flex flex-col justify-center items-center mt-[1rem] ">
            <div className="flex flex-col gap-3 p-8 shadow-card text-sm w-[45rem] rounded-md transition-all duration-500">
              <h2 className="font-bold text-[1.1rem]">Applicant Form</h2>
              <div className="flex gap-4 mt-4">
                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex gap-4">
                    <TextField
                      required
                      id="outlined-required"
                      label="Company Name/ Acc. Title"
                      variant="outlined"
                      className="flex-1"
                      size="small"
                    />
                    <TextField
                      required
                      id="outlined-required"
                      label="Owner Name"
                      variant="outlined"
                      className="flex-1"
                      size="small"
                    />
                  </div>
                  <div className="flex gap-4">
                    <TextField
                      required
                      id="outlined-required"
                      label="CNIC Number"
                      variant="outlined"
                      className="flex-1"
                      type="number"
                      size="small"
                    />
                    <TextField
                      required
                      id="outlined-required"
                      label="NTN Number"
                      variant="outlined"
                      className="flex-1"
                      type="number"
                      size="small"
                    />
                  </div>
                  <div className="flex gap-4">
                    {/* City */}
                    <FormControl
                      variant="outlined"
                      className="flex-1"
                      size="small"
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        City
                      </InputLabel>
                      <Select
                        required
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        label="city"
                      >
                        <MenuItem value={10}>Karachi</MenuItem>
                        <MenuItem value={20}>Lahore</MenuItem>
                      </Select>
                    </FormControl>
                    {/* Location */}
                    <FormControl
                      variant="outlined"
                      className="flex-1"
                      size="small"
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        Location
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        label="location"
                      >
                        <MenuItem value={10}>Karachi</MenuItem>
                        <MenuItem value={20}>Lahore</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="flex gap-4">
                    <TextField
                      required
                      id="outlined-required"
                      label="Pickup Address"
                      variant="outlined"
                      className="flex-1"
                      size="small"
                    />
                  </div>
                  <div className="flex gap-4">
                    <TextField
                      required
                      id="outlined-required"
                      label="Company Ph #"
                      variant="outlined"
                      className="flex-1"
                      type="number"
                      size="small"
                    />
                    <TextField
                      required
                      id="outlined-required"
                      label="Mobile Number"
                      variant="outlined"
                      className="flex-1"
                      type="number"
                      size="small"
                    />
                  </div>
                  <div className="flex gap-4">
                    <TextField
                      id="outlined-required"
                      label="Mobile Number 2"
                      variant="outlined"
                      className="flex-1"
                      type="number"
                      size="small"
                    />
                    <TextField
                      required
                      id="outlined-required"
                      label="Company Email"
                      variant="outlined"
                      className="flex-1"
                      type="email"
                      size="small"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="mt-2 mb-[-1rem] text-lg">Selling Medium</p>
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox name="checkedB" iconStyle={{ fill: "red" }} />
                    }
                    label={<p className="text-sm">Facebook</p>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox name="checkedB" iconStyle={{ fill: "red" }} />
                    }
                    label={<p className="text-sm">WhatsApp</p>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox name="checkedB" iconStyle={{ fill: "red" }} />
                    }
                    label={<p className="text-sm">Website</p>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox name="checkedB" iconStyle={{ fill: "red" }} />
                    }
                    label={<p className="text-sm">Instagram</p>}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox name="checkedB" iconStyle={{ fill: "red" }} />
                    }
                    label={<p className="text-sm">Others</p>}
                  />
                </FormGroup>
              </div>
              <div className="flex gap-4">
                <TextField
                  required
                  id="outlined-required"
                  label="URL"
                  variant="outlined"
                  className="flex-1"
                  size="small"
                />
              </div>
              <div className="flex gap-4">
                <TextField
                  required
                  id="outlined-required"
                  label="Bussiness Name"
                  variant="outlined"
                  className="flex-1"
                  size="small"
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Nature of Bussiness"
                  variant="outlined"
                  className="flex-1"
                  size="small"
                />
              </div>
              <div className="flex gap-4">
                <TextField
                  required
                  id="outlined-required"
                  label="Billing Address"
                  variant="outlined"
                  className="flex-1"
                  size="small"
                />
                <TextField
                  id="outlined-required"
                  label="Sales Tax #"
                  variant="outlined"
                  className="flex-1"
                  size="small"
                />
              </div>
              <div className="flex gap-4">
                <div className="flex-1 flex flex-col mt-2">
                  <FormControl component="fieldset">
                    {/* <FormLabel component="legend"> */}
                    <p className="mt-2  text-lg">Months into Bussiness</p>
                    {/* </FormLabel> */}
                    <RadioGroup
                      aria-label="bussinessType"
                      name="bussinessType"
                      value={bussinessType}
                      onChange={handleBussinessType}
                      className="rowflex"
                    >
                      <FormControlLabel
                        value="Nil"
                        control={<Radio />}
                        label={<p className="text-sm">Nil</p>}
                      />
                      <FormControlLabel
                        value="Less than 6 months"
                        control={<Radio />}
                        label={<p className="text-sm">Less than 6 months</p>}
                      />
                      <FormControlLabel
                        value="Less than a year"
                        control={<Radio />}
                        label={<p className="text-sm">Less than a year</p>}
                      />
                      <FormControlLabel
                        value="More than a year"
                        control={<Radio />}
                        label={<p className="text-sm">More than a year</p>}
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1 flex flex-col mt-2">
                  <FormControl component="fieldset">
                    <p className="mt-2  text-lg">Average Shipments/Week</p>

                    <RadioGroup
                      aria-label="bussinessType"
                      name="bussinessType"
                      // value={bussinessType}
                      // onChange={handleBussinessType}
                      className="rowflex"
                    >
                      <FormControlLabel
                        value="Nil"
                        control={<Radio />}
                        label={<p className="text-sm">Nil</p>}
                      />
                      <FormControlLabel
                        value="Below 25"
                        control={<Radio />}
                        label={<p className="text-sm">Below 25</p>}
                      />
                      <FormControlLabel
                        value="Above 25"
                        control={<Radio />}
                        label={<p className="text-sm">Above 25</p>}
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="mt-2  text-lg">Contact Person</p>
                <div className="flex gap-4 ">
                  <TextField
                    required
                    id="outlined-required"
                    label="Serial Number"
                    variant="outlined"
                    className="flex-1"
                    size="small"
                    defaultValue="1"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="Name"
                    variant="outlined"
                    className="flex-1"
                    size="small"
                  />
                </div>
                <div className="flex gap-4">
                  <TextField
                    required
                    id="outlined-required"
                    label="Designation"
                    variant="outlined"
                    className="flex-1"
                    size="small"
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="Mobile"
                    variant="outlined"
                    className="flex-1"
                    size="small"
                    type="number"
                  />
                </div>
                <div className="flex gap-4">
                  <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    variant="outlined"
                    className="flex-1"
                    size="small"
                    type="email"
                  />
                  <TextField
                    required
                    id="outlined-required"
                    label="CNIC"
                    variant="outlined"
                    className="flex-1"
                    size="small"
                    type="number"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Product Range */}
          <div className="flex flex-col justify-center items-center mt-[1rem] ">
            <div className="flex flex-col gap-3 p-8 shadow-card text-sm w-[45rem] rounded-md transition-all duration-500">
              <h2 className="font-bold text-[1.1rem]">Product Range</h2>
              <div className="flex gap-4">
                <div className="flex-1 flex flex-col">
                  <p>Please select atleast one product</p>
                  <FormGroup row>
                    <div className="flex-1 flex flex-col">
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="checkedB"
                            iconStyle={{ fill: "red" }}
                          />
                        }
                        label={<p className="text-sm">Clothing</p>}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="checkedB"
                            iconStyle={{ fill: "red" }}
                          />
                        }
                        label={<p className="text-sm">Books</p>}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="checkedB"
                            iconStyle={{ fill: "red" }}
                          />
                        }
                        label={<p className="text-sm">Watches</p>}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="checkedB"
                            iconStyle={{ fill: "red" }}
                          />
                        }
                        label={
                          <p className="text-sm">Perfumes and Cosmetics</p>
                        }
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="checkedB"
                            iconStyle={{ fill: "red" }}
                          />
                        }
                        label={<p className="text-sm">Sports</p>}
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="checkedB"
                            iconStyle={{ fill: "red" }}
                          />
                        }
                        label={<p className="text-sm">Home Decor</p>}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="checkedB"
                            iconStyle={{ fill: "red" }}
                          />
                        }
                        label={<p className="text-sm">Home Appliances</p>}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="checkedB"
                            iconStyle={{ fill: "red" }}
                          />
                        }
                        label={<p className="text-sm">Health and Fitness</p>}
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="checkedB"
                            iconStyle={{ fill: "red" }}
                          />
                        }
                        label={
                          <p className="text-sm">
                            Mobile and Tablets (PTA Approved)
                          </p>
                        }
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="checkedB"
                            iconStyle={{ fill: "red" }}
                          />
                        }
                        label={
                          <p className="text-sm">
                            Computer, Peripherals and Accessories
                          </p>
                        }
                      />
                    </div>
                  </FormGroup>
                  <div className="flex gap-4 mt-2">
                    <TextField
                      id="outlined-required"
                      label="Other (Please Specify)"
                      variant="outlined"
                      className="flex-1"
                      size="small"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1 flex flex-col"></div>
              </div>
            </div>
          </div>
          {/* Terms and Condition */}
          <div className="flex flex-col justify-center items-center mt-[1rem] ">
            <div className="flex flex-col gap-3 p-8 shadow-card text-sm w-[45rem] rounded-md transition-all duration-500">
              <h2 className="font-bold text-[1.1rem]">Terms & Conditions</h2>
              <div className="flex gap-4">
                <div className="flex-1 flex flex-col">
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={true}
                          name="checkedB"
                          iconStyle={{ fill: "red" }}
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
                          iconStyle={{ fill: "red" }}
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
                  <div className="flex gap-[0.1rem]">
                    <div className="bg-[#f21e26] text-white rounded-l-md h-[2.5rem] flex-1 flex justify-center items-center">
                      Upto 1 kg & each additional kg
                    </div>
                    <div className="bg-[#f21e26] text-white rounded-r-md h-[2.5rem] flex-1 flex justify-center items-center">
                      Destination
                    </div>
                  </div>

                  <table className="mt-6">
                    <thead>
                      <tr className="text-left bg-gray-100">
                        <th className="border p-2">Origin</th>
                        <th className="border p-2">South</th>
                        <th className="border p-2">Central</th>
                        <th className="border p-2">North</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">South</td>
                        <td className="border p-2">160</td>
                        <td className="border p-2">240</td>
                        <td className="border p-2">250</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Central</td>
                        <td className="border p-2">240</td>
                        <td className="border p-2">160</td>
                        <td className="border p-2">180</td>
                      </tr>
                      <tr>
                        <td className="border p-2">North</td>
                        <td className="border p-2">250</td>
                        <td className="border p-2">180</td>
                        <td className="border p-2">160</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Within City</td>
                        <td className="border p-2">120</td>
                        <td className="border p-2"></td>
                        <td className="border p-2"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* Table 2 */}
              <div className="flex gap-4 mt-4">
                <div className="flex-1 flex flex-col">
                  <div className="flex gap-[0.1rem]">
                    <div className="bg-[#f21e26] text-white rounded-l-md h-[2.5rem] flex-1 flex justify-center items-center">
                      Upto 0.5 kg
                    </div>
                    <div className="bg-[#f21e26] text-white rounded-r-md h-[2.5rem] flex-1 flex justify-center items-center">
                      Destination
                    </div>
                  </div>

                  <table className="mt-6">
                    <thead>
                      <tr className="text-left bg-gray-100">
                        <th className="border p-2">Origin</th>
                        <th className="border p-2">South</th>
                        <th className="border p-2">Central</th>
                        <th className="border p-2">North</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">South</td>
                        <td className="border p-2">160</td>
                        <td className="border p-2">190</td>
                        <td className="border p-2">190</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Central</td>
                        <td className="border p-2">180</td>
                        <td className="border p-2">250</td>
                        <td className="border p-2">160</td>
                      </tr>
                      <tr>
                        <td className="border p-2">North</td>
                        <td className="border p-2">190</td>
                        <td className="border p-2">160</td>
                        <td className="border p-2">150</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Within City</td>
                        <td className="border p-2">110</td>
                        <td className="border p-2"></td>
                        <td className="border p-2"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex gap-4 mt-4">
                <div className="flex-1 flex flex-col"></div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1 flex flex-col">
                  <button className="text-white bg-[#D40511] border border-[#F21E26] w-full rounded-md mt-1 p-1 h-[2.5rem] text-sm hover:bg-[#F21E26] hover:text-white transition-all duration-500">
                    Accept
                  </button>
                </div>
                <div className="flex-1 flex flex-col w-full text-right justify-center">
                  For Any Query{" "}
                  <span
                    onClick={showModal}
                    className="text-[#D40511] font-semibold cursor-pointer"
                  >
                    Click Here!
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1 flex flex-col">
                  <p className="mt-2 mb-[-1rem] text-lg">
                    Bank Account Details for IBFT
                  </p>
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <TextField
                  id="outlined-required"
                  label="IBAN #"
                  variant="outlined"
                  className="flex-1"
                  size="small"
                  type="number"
                />
                <TextField
                  id="outlined-required"
                  label="Bank Name"
                  variant="outlined"
                  className="flex-1"
                  size="small"
                />
              </div>
              <div className="flex gap-4 ">
                <TextField
                  id="outlined-required"
                  label="Branch"
                  variant="outlined"
                  className="flex-1"
                  size="small"
                  type="number"
                />
                <TextField
                  id="outlined-required"
                  label="Bank A/C Title"
                  variant="outlined"
                  className="flex-1"
                  size="small"
                />
              </div>

              {/* <div className="flex gap-4">
                <div className="flex-1 flex flex-col">
                  <button className="text-white bg-[#D40511] border border-[#F21E26] w-full rounded-md mt-1 p-1 h-[2.5rem] text-sm hover:bg-[#F21E26] hover:text-white transition-all duration-500">
                    Submit
                  </button>
                </div>
                <div className="flex-1 flex flex-col w-full text-right justify-center">
                  
                </div>
              </div> */}
            </div>
            <button className=" text-white bg-[#D40511] border border-[#F21E26] w-[45rem] rounded-md mt-6 p-1 h-[2.5rem] text-sm hover:bg-[#F21E26] hover:text-white transition-all duration-500">
              Submit
            </button>
          </div>
        </div>
      </Layout>
      <Modal
        title="Enter Query"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Submit"
      >
        <div className="flex w-full">
          <TextField
            id="outlined-required"
            label="Enter Query"
            multiline
            rows={4}
            variant="outlined"
            className="flex-1"
            // size="small"
          />
        </div>
      </Modal>
    </div>
  );
};

export default Ecom;
