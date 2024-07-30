import React, { useState } from "react";
import ResponsiveDrawer from "../../components/SideBar/SideBar";
import "./PartnerRegistration.css";
import {
  Button,
  Dialog,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Tooltip,
} from "@mui/material";
import {
  AddOutlined,
  HelpOutlineOutlined,
  KeyboardArrowLeft,
} from "@mui/icons-material";
import userIcon from "../../assets/images/user.svg";
import contectIcon from "../../assets/images/Subtract.svg";
import businessIcon from "../../assets/images/SubtractB.svg";
import CheckIcon from "../../assets/images/check.svg";
import { useNavigate } from "react-router";

const PartnerRegistration = () => {
  const [drawerStatus, setDrawerStatus] = useState(true);
  const updateDrawerStatus = () => {
    setDrawerStatus(!drawerStatus);
  };

  const [firstName, setFirstName] = useState('Jerry');
const [lastName, setLastName] = useState('Machado');
const [addressLine1, setAddressLine1] = useState('1st cross St');
const [addressLine2, setAddressLine2] = useState('Antopark');
const [city, setCity] = useState('Texas');
const [state, setState] = useState('New york');
const [zip, setZip] = useState('600930');
const [phoneNumber, setPhoneNumber] = useState('+1 009 2990 2999');
const [telephone, setTelephone] = useState('+12345678');
const [businessEmail, setBusinessEmail] = useState('ceo@prodapt.com');
const [ssn, setSsn] = useState('600930');
const [dob, setDob] = useState('29/01/2001');
const [businessName, setbusinessName] = useState('Prodapt');
const [businessregno, setbusinessregno] = useState('18918');
const [taxid, setTaxid] = useState('122 33 33 2999');
// const [businesstype, setbusinesstype] = useState('+12345678');
// const [billingtype, setbillingtype] = useState('ceo@prodapt.com');


  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);
  const [onBordingCompleted, setOnBordingCompleted] = useState(false);

  const handleNextStep = () => {
    if (currentStep === 3) {
      setOnBordingCompleted(true);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };
  return (
    <div>
      {
        <Dialog open={onBordingCompleted}>
          <div className="p-4 text-center" style={{ width: "400px" }}>
            <div>
              <img style={{ height: "60px" }} src={CheckIcon} />
            </div>
            <div className="mt-2" style={{ fontSize: "20px" }}>
              Successful <b>Register</b>
            </div>
            <div>
              This helps them understand their role within the broader context
              of the company.
            </div>
            <div>
              <Button
                variant="contained"
                className="bg-att custom-button mt-3"
                style={{ width: "70%" }}
                onClick={() => {
                  setOnBordingCompleted(false);
                  navigate("/services/servicedeploy");
                }}
              >
                Continue
              </Button>
            </div>
          </div>
        </Dialog>
      }
      <ResponsiveDrawer
        updateDrawerStatus={updateDrawerStatus}
        currentTab="none"
      />
      <div className="d-flex">
        <div className="drawer-content" />
        <div className="drawer-body">
          <div className="registration-container">
            <div className="registration-tabs">
              <div
                className={`registration-tab ${
                  currentStep >= 1 ? "registration-tab-completed" : ""
                }`}
              >
                <div
                  className={`registration-tab-numberCircle ${
                    currentStep === 1
                      ? "registration-tab-numberCircleprogress"
                      : currentStep > 1
                      ? "registration-tab-numberCirclecompleted"
                      : ""
                  }`}
                >
                  1
                </div>
                <div>Partner Information</div>
              </div>
              <div
                className={`registration-tab ${
                  currentStep >= 2 ? "registration-tab-completed" : ""
                }`}
              >
                <div
                  className={`registration-tab-numberCircle ${
                    currentStep === 2
                      ? "registration-tab-numberCircleprogress"
                      : currentStep > 2
                      ? "registration-tab-numberCirclecompleted"
                      : ""
                  }`}
                >
                  2
                </div>
                <div>Contact Information</div>
              </div>
              <div
                className={`registration-tab ${
                  currentStep >= 3 ? "registration-tab-completed" : ""
                }`}
              >
                <div
                  className={`registration-tab-numberCircle ${
                    currentStep === 3
                      ? "registration-tab-numberCircleprogress"
                      : currentStep > 3
                      ? "registration-tab-numberCirclecompleted"
                      : ""
                  }`}
                >
                  3
                </div>
                <div>Business Information</div>
              </div>
            </div>
            <div className="registration-tab-content d-flex">
              <div className="registration-tab-subcontent">
                <div className="registration-tabsubcontent-container">
                  <div />
                  <div>
                    <div className="registration-step">
                      Step {currentStep} of 3
                    </div>
                    <div className="registration-step-desc">
                      {" "}
                      {currentStep === 1
                        ? "Please Enter Your Personal Details"
                        : currentStep === 2
                        ? "Please Enter Your Contact Information"
                        : "Please Tell a bit about your business"}
                    </div>
                  </div>
                  <div className="d-flex registration-tabsubcontent-bottom">
                    <Tooltip title={"Current Use of Edge Computing"}>
                      <HelpOutlineOutlined className="pointer registration-tab-info" />
                    </Tooltip>
                    {currentStep === 3 ? (
                      <div className="registration-tab-info-content">
                        Identify your target market or customer demographics.
                        Who are your ideal customers, and what are their
                        characteristics? Understanding your audience
                      </div>
                    ) : (
                      <div className="registration-tab-info-content">
                        It signifies that the entity ororganization you are
                        interacting with requires specific information about you
                        to proceed with a particular action or service
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="registration-tab-maincontent">
                <div className="registration-tab-maincontiner">
                  <div className="registration-dataset">
                    {currentStep === 1 ? (
                      <>
                        <div className="registration-dataset-title">
                          <div style={{ height: "40px", paddingRight: "10px" }}>
                            <img src={userIcon} />
                          </div>
                          <div className="">MVNO Partner Information</div>
                        </div>
                        <div className="text-left">
                          These details are crucial for communication purposes
                          and for providing updates or notifications related to
                          the service.
                        </div>
                        <div className="d-flex justify-between my-1">
                          <div className="text-left registration-partner-content">
                            <div className="my-1">First Name</div>
                            <TextField
                              className="registration-partner-input"
                              placeholder="Enter First Name"
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                            />
                          </div>
                          <div className="text-left registration-partner-content">
                            <div className="my-1">Last Name</div>
                            <TextField
                              className="registration-partner-input-right"
                              placeholder="Enter Last Name"
                              value={lastName}
  onChange={(e) => setLastName(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="d-flex justify-between my-1">
                          <div className="text-left registration-partner-content">
                            <div className="my-1">Address Line 1</div>
                            <TextField
                              className="registration-partner-input"
                              placeholder="Enter Address Line 1"
                              value={addressLine1}
  onChange={(e) => setAddressLine1(e.target.value)}
                            />
                          </div>
                          <div className="text-left registration-partner-content">
                            <div className="my-1">Address Line 2</div>
                            <TextField
                              className="registration-partner-input-right"
                              placeholder="Enter Address Line 2"
                              value={addressLine2}
                              onChange={(e) => setAddressLine2(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="d-flex justify-between my-1">
                          <div className="text-left registration-partner-content-3">
                            <div className="my-1">City</div>
                            <TextField
                              className="registration-partner-input"
                              placeholder="Enter City"
                              value={city}
  onChange={(e) => setCity(e.target.value)}
                            />
                          </div>
                          <div className="text-left registration-partner-content-3">
                            <div className="my-1">State</div>
                            <TextField
                              className="registration-partner-input"
                              placeholder="Enter State"
                              value={state}
  onChange={(e) => setState(e.target.value)}
                            />
                          </div>
                          <div className="text-left registration-partner-content-3">
                            <div className="my-1">Zip</div>
                            <TextField
                              className="registration-partner-input-right"
                              placeholder="Enter Zip"
                              value={zip}
  onChange={(e) => setZip(e.target.value)}
                            />
                          </div>
                        </div>
                      </>
                    ) : currentStep === 2 ? (
                      <>
                        <div className="registration-dataset-title">
                          <div style={{ height: "40px", paddingRight: "10px" }}>
                            <img src={contectIcon} />
                          </div>
                          <div className="">MVNO Contact Information</div>
                        </div>
                        <div className="text-left">
                          These details are crucial for communication purposes
                          and for providing updates or notifications related to
                          the service.
                        </div>
                        <div className="d-flex justify-between my-1">
                          <div className="text-left registration-partner-content">
                            <div className="my-1">Phone Number</div>
                            <TextField
                              className="registration-partner-input"
                              placeholder="Enter Phone Number"
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                          </div>
                          <div className="text-left registration-partner-content">
                            <div className="my-1">Telephone</div>
                            <TextField
                              className="registration-partner-input-right"
                              placeholder="Enter Telephone Number"
                              value={telephone}
  onChange={(e) => setTelephone(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="d-flex my-1">
                          <div className="text-left registration-partner-BEmailID">
                            <div className="my-1">Business Email ID</div>
                            <TextField
                              className="registration-partner-input-right"
                              placeholder="Enter Business Email ID"
                              value={businessEmail}
  onChange={(e) => setBusinessEmail(e.target.value)}
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="registration-dataset-title">
                          <div style={{ height: "40px", paddingRight: "10px" }}>
                            <img src={businessIcon} />
                          </div>
                          <div className="">MVNO Business Information</div>
                        </div>
                        <div className="text-left">
                          These details are crucial for communication purposes
                          and for providing updates or notifications related to
                          the service.
                        </div>
                        <div className="d-flex justify-between my-1">
                          <div className="text-left registration-partner-content">
                            <div className="my-1">SSN Name</div>
                            <TextField
                              className="registration-partner-input"
                              placeholder="Enter First Name"
                              value={ssn}
                              onChange={(e) => setSsn(e.target.value)}
                            />
                          </div>
                          <div className="text-left registration-partner-content">
                            <div className="my-1">DOB</div>
                            <TextField
                              className="registration-partner-input-right"
                              placeholder="Enter DOB"
                              type="date"
                              value={dob}
                              onChange={(e) => setDob(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="d-flex my-1">
                          <div className="text-left registration-partner-BEmailID">
                            <div className="my-1">Business Name</div>
                            <TextField
                              className="registration-partner-input-right"
                              placeholder="Enter Business Name"
                              value={businessName}
                              onChange={(e) => setbusinessName(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="d-flex justify-between my-1">
                          <div className="text-left registration-partner-content">
                            <div className="my-1">Business Reg No</div>
                            <TextField
                              className="registration-partner-input"
                              placeholder="Enter Business Reg No"
                              value={businessregno}
                              onChange={(e) => setbusinessregno(e.target.value)}
                            />
                          </div>
                          <div className="text-left registration-partner-content">
                            <div className="my-1">TAX ID</div>
                            <TextField
                              className="registration-partner-input-right"
                              placeholder="Enter TAX ID"
                              value={taxid}
                              onChange={(e) => setTaxid(e.target.value)}
                               
                            />
                          </div>
                        </div>
                        <div className="d-flex justify-between my-1">
                          <div className="text-left registration-partner-content">
                            <div className="my-1">Business Type</div>
                            <FormControl className="registration-partner-input">
                              <Select value={"Telecom"}>
                                <MenuItem value={"Telecom"}>
                                Telecom
                                </MenuItem>
                                <MenuItem value={"Content Delivery"}>
                                  Business Type
                                </MenuItem>
                                <MenuItem value={"Content Delivery"}>
                                  Business Type
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </div>
                          <div className="text-left registration-partner-content">
                            <div className="my-1">Billing Type</div>

                            <FormControl className="registration-partner-input-right">
                              <Select value={"Contract"}>
                                <MenuItem value={"Contract"}>
                                Contract
                                </MenuItem>
                                <MenuItem value={"Content Delivery"}>
                                  Billing Type
                                </MenuItem>
                                <MenuItem value={"Content Delivery"}>
                                  Billing Type
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </div>
                        </div>
                      </>
                    )}
                    <div className="d-flex justify-end mt-4">
                      <div className="text-left mx-2">
                        <Button
                          variant="text"
                          className={`custom-button registration-partner-button ${
                            currentStep !== 1 ? "color-att" : ``
                          }`}
                          disabled={currentStep === 1}
                          onClick={() => setCurrentStep(currentStep - 1)}
                          startIcon={<KeyboardArrowLeft />}
                        >
                          Back
                        </Button>
                      </div>
                      <div className="text-left">
                        <Button
                          variant="contained"
                          className="bg-att custom-button registration-partner-button"
                          onClick={() => handleNextStep()}
                        >
                          {currentStep === 3 ? "Submit" : "Next"}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerRegistration;
