import React, { useEffect, useState, useContext } from "react";

import ResponsiveDrawer from "../../components/SideBar/SideBar";

import "./serviecDeployment.css";

import ProgressMenu from "./ProgressMenu";
import fileIcon from "../../assets/images/servicedep1.svg";
import selectserviceIcon from "../../assets/images/Selectservice.svg";
import servicetestingIcon from "../../assets/images/Servicetesting.svg";
import { useDropzone } from "react-dropzone";
import CommonHeader from "../../components/CommonHeader/CommonHeader";
import SDJ1Icon from "../../assets/images/SDJ1.svg";
import SDJ2Icon from "../../assets/images/SDJ2.svg";
import SDJ3Icon from "../../assets/images/SDJ3.svg";
import SDJ4Icon from "../../assets/images/SDJ4.svg";
import SDJ5Icon from "../../assets/images/SDJ5.svg";
import SDJ6Icon from "../../assets/images/SDJ6.svg";
import SDJ7Icon from "../../assets/images/SDJ7.svg";
import SDJ8Icon from "../../assets/images/SDJ8.svg";
import SDJW1Icon from "../../assets/images/SDJW1.svg";
import SDJW2Icon from "../../assets/images/SDJW2.svg";
import SDJW3Icon from "../../assets/images/SDJW3.svg";
import SDJW4Icon from "../../assets/images/SDJW4.svg";
import SDJW5Icon from "../../assets/images/SDJW5.svg";
import SDJW6Icon from "../../assets/images/SDJW6.svg";
import SDJW7Icon from "../../assets/images/SDJW7.svg";
import SDJW8Icon from "../../assets/images/SDJW8.svg";
import CheckIcon from "../../assets/images/check.svg";
import { useNavigate } from "react-router-dom";
import PdfViewer from "../../components/PdfViewer/PdfViewer";
import ServiceContext from "../../components/ServiceContext";
import { MdUpload } from "react-icons/md";
import { KeyboardArrowLeft } from "@mui/icons-material";
import {
  Button,
  Dialog,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import ApiSubPage from "../../components/Apisubpage/ApiSubPage";

const ServiceDepJourney = () => {
  const [drawerStatus, setDrawerStatus] = useState(true);
  const [selectedService, setSelectedService] = useState("5g");
  const [currentStep, setCurrentStep] = useState(1);
  const [onBordingCompleted, setOnBordingCompleted] = useState(false);
  const [activeCardId, setActiveCardId] = useState(null);
  const [isExpanded, setIsExpanded] = useState(true);
  const [isVerified, setIsVerified] = useState(false);
  const { allCardsVerified } = useContext(ServiceContext);
  const navigate = useNavigate();
  const handleExpandChange = (newExpandedState) => {
    setIsExpanded(newExpandedState);
  };
  useEffect(() => {
    if (currentStep <= 7) {
      setActiveCardId(currentStep);
      console.log("active1");
    } else {
      setActiveCardId(1);
      console.log("active8");
    }
  }, [currentStep]);

  const handleCardClick = (cardId) => {
    setCurrentStep(cardId);
  };

  const handleNextStep = () => {
    if (currentStep === 7) {
      setOnBordingCompleted(true);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const updateDrawerStatus = () => {
    setDrawerStatus(!drawerStatus);
  };
  const breadCrumbFlow = [
    {
      name: "Services",
      path: "/services/att5g",
    },
    {
      name: "Service Deployment Journey",
      path: "/services/att5edgecomputing",
    },
  ];
  const progressmenuitems = [
    {
      id: 1,
      name: "Initial Agreement",
      description:
        "These agreements outline the terms and conditions under which the MVNO/MVNE will operate on the MNO's network",
      path: "/services/att5g",
      image: SDJ1Icon,
      image2: SDJW1Icon,
      key: "prepaid",
      keybase: "prepaid",
    },
    {
      id: 2,
      name: "Legal Compliance",
      description: "Ensuring adherence to industry regulations and standards.",
      path: "/services/att5g",
      image: SDJ2Icon,
      image2: SDJW2Icon,
      key: "prepaid",
      keybase: "prepaid",
    },
    {
      id: 3,
      name: "Network Integration",
      description: "Integrating various technical components seamlessly",
      path: "/services/att5g",
      image: SDJ3Icon,
      image2: SDJW3Icon,
      key: "prepaid",
      keybase: "prepaid",
    },
    {
      id: 4,
      name: "Voice, SMS & Data",
      description: "Establishing operational processes and workflows.",
      path: "/services/att5g",
      image: SDJ5Icon,
      image2: SDJW4Icon,
      key: "prepaid",
      keybase: "prepaid",
    },
    {
      id: 5,
      name: "SIM Card Provisioning",
      description: "Preparing SIM cards for activation and use.",
      path: "/services/att5g",
      image: SDJ4Icon,
      image2: SDJW5Icon,
      key: "prepaid",
      keybase: "prepaid",
    },
    {
      id: 6,
      name: "Service Billing",
      description:
        "Billing processes are managed either independently by the MVNO/MVNE or through a revenue-sharing agreement with the MNO.",
      path: "/services/att5g",
      image: SDJ7Icon,
      image2: SDJW6Icon,
      key: "prepaid",
      keybase: "prepaid",
    },
    // {
    //   id: 7,
    //   name: "Enterprise Mobility",
    //   description: "Verifying functionality and reliability of services.",
    //   path: "/services/att5g",
    //   image: SDJ6Icon,
    //   image2: SDJW7Icon,
    //   key: "prepaid",
    //   keybase: "prepaid",
    // },
    {
      id: 7,
      name: "Service Testing",
      description:
        "It conducts thorough testing to ensure that its systems are working correctly and that the quality of service meets expectations.",
      path: "/services/att5g",
      image: SDJ8Icon,
      image2: SDJW8Icon,
      key: "prepaid",
      keybase: "prepaid",
    },
  ];
  const { getRootProps, getInputProps, open } = useDropzone({});

  return (
    <div>
      <ResponsiveDrawer
        updateDrawerStatus={updateDrawerStatus}
        currentTab="Dashboard"
      />
      <div className="drawer-content" />
      <div className="d-flex">
        <div className="drawer-content" />
        <div className="drawer-body ">
          <CommonHeader breadCrumbFlow={breadCrumbFlow} />
          <>
            <div
              className=""
              style={{
                padding: "10px 15px",
                borderBottom: "1px solid #cccccc",
                fontSize: "18px",
                fontWeight: "600",
                height: "50px",
              }}
            >
              Service Deployment Journey
            </div>
            <div className="d-flex">
              <div
                className={
                  isExpanded ? "progress-sidemenu" : "progress-sidemenu2"
                }
              >
                <ProgressMenu
                  selectedSubMenu={selectedService}
                  progressmenuitems={progressmenuitems}
                  currentStep={currentStep}
                  activeCardId={activeCardId}
                  handleCardClick={handleCardClick}
                  isExpanded={isExpanded}
                  onExpandChange={handleExpandChange}
                />
              </div>

              <div
                className={
                  isExpanded ? "registration-dataset" : "registration-dataset2"
                }
              >
                {currentStep === 1 ? (
                  <>
                    <div className="api-deploy-service">
                      <div style={{ width: "70%" }}>
                        <div className="registration-dataset-title">
                          <div style={{ height: "40px", paddingRight: "10px" }}>
                            <img  src={fileIcon} style={{ width: "30px" }} />
                          </div>
                          <div style={{ paddingleft: "20px" }}>
                            Initial Agreement
                          </div>
                        </div>
                        <div className="text-left" style={{ width: "70%" }}>
                          These agreements outline the terms and conditions
                          under which the MVNO/MVNE will operate on the MNO's
                          network.
                        </div>
                        <div className="d-flex justify-between my-1">
                          <div className="text-left registration-partner-content">
                            <div className="my-1" style={{ fontWeight: "600" }}>
                              Business registration No.
                            </div>
                            <TextField
                              className="registration-partner-input"
                              placeholder="12-3456789"
                            />
                          </div>
                          <div className="text-left registration-partner-content">
                            <div className="my-1" style={{ fontWeight: "600" }}>
                              Tax identification No.
                            </div>
                            <TextField
                              className="registration-partner-input-right"
                              placeholder="123 456 789"
                            />
                          </div>
                        </div>
                        <div className="d-flex justify-between my-1">
                          <div className="text-left registration-partner-content1">
                            <div className="card">
                              <div className="card-content">
                                <div className="drop-head-text">
                                  Verify your Signed Agreement
                                </div>
                                <PdfViewer />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : currentStep === 2 ? (
                  <>
                    <div className="api-deploy-service">
                      <div style={{ width: "70%" }}>
                        <div className="registration-dataset-title">
                          <div style={{ height: "40px", paddingRight: "10px" }}>
                            <img
                              src={servicetestingIcon}
                              style={{ width: "30px" }}
                            />
                          </div>
                          <div style={{ paddingleft: "20px" }}>
                            Legal Documents
                          </div>
                        </div>
                        <div className="text-left" style={{ width: "70%" }}>
                          It conducts thorough submission of the document like
                          CALCEA trust document for trusting your organization..
                        </div>
                        <div className="d-flex justify-between my-1">
                          <div className="text-left registration-partner-content1">
                            <div className="card">
                              <div className="card-content">
                                <div className="drop-head-text">
                                  Upload Your Signed Agreement
                                </div>

                                <div {...getRootProps()} className="dropzone1">
                                  <input {...getInputProps()} />

                                  <div className="browse1">
                                    {/* <img
                                      src={selectserviceIcon}
                                      style={{ width: "20px" }}
                                    /> */}
                                    <MdUpload />
                                    Select Service
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : currentStep === 3 ? (
                  <>
                    <div className="ApisubPagemain">
                      <div style={{ width: "100%" }}>
                        {!allCardsVerified && (
                          <ApiSubPage
                            currentStep={currentStep}
                            setIsVerified={setIsVerified}
                          />
                        )}
                      </div>
                    </div>
                  </>
                ) : currentStep === 4 ? (
                  <>
                    <div className="ApisubPagemain">
                      <div style={{ width: "100%" }}>
                        <ApiSubPage
                          currentStep={currentStep}
                          setIsVerified={setIsVerified}
                        />
                      </div>
                    </div>
                  </>
                ) : currentStep === 5 ? (
                  <div className="api-deploy-service">
                    <div style={{ width: "70%" }}>
                      <div className="registration-dataset-title">
                        <div style={{ height: "40px", paddingRight: "10px" }}>
                          <img src={SDJ4Icon} style={{ width: "30px" }} />
                        </div>
                        <div style={{ paddingleft: "20px" }}>
                          Sim card Provisioning
                        </div>
                      </div>
                      <div className="text-left" style={{ width: "70%" }}>
                        These agreements outline the total amount of simcards
                        required to test by which the MVNO/MVNE will operate on
                        the MNO's network.
                      </div>
                      <div className="d-flex justify-between my-1">
                        <div className="text-left registration-partner-content">
                          <div className="my-1" style={{ fontWeight: "600" }}>
                            registered Account No.
                          </div>
                          <TextField
                            className="registration-partner-input"
                            placeholder="12-3456789"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-between my-1">
                        <div className="text-left registration-partner-content">
                          <div className="my-1" style={{ fontWeight: "600" }}>
                            Network Providers
                          </div>
                          <FormControl className="registration-partner-input">
                            <Select value={"Verizon"}>
                              <MenuItem value={"Verizon"}>Verizon</MenuItem>
                              <MenuItem value={"Content Delivery"}>
                                Windstream
                              </MenuItem>
                              <MenuItem value={"Content Delivery"}>
                                Virgin Media
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                        <div className="text-left registration-partner-content">
                          <div className="my-1" style={{ fontWeight: "600" }}>
                            Required
                          </div>
                          <FormControl className="registration-partner-input">
                            <Select value={"100"}>
                              <MenuItem value={"100"}>100 Sim</MenuItem>
                              <MenuItem value={"Content Delivery"}>
                                200 Sim
                              </MenuItem>
                              <MenuItem value={"Content Delivery"}>
                                300 Sim
                              </MenuItem>
                              <MenuItem value={"Content Delivery"}>
                                400 Sim
                              </MenuItem>
                              <MenuItem value={"Content Delivery"}>
                                500 Sim
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : currentStep === 6 ? (
                  <>
                    <div className="ApisubPagemain">
                      <div style={{ width: "100%" }}>
                        <ApiSubPage
                          currentStep={currentStep}
                          setIsVerified={setIsVerified}
                        />
                      </div>
                    </div>
                  </>
                ) : currentStep === 7 ? (
                  <>
                    <div className="api-deploy-service">
                      <div style={{ width: "70%" }}>
                        <div className="registration-dataset-title">
                          <div style={{ height: "40px", paddingRight: "10px" }}>
                            <img
                              src={servicetestingIcon}
                              style={{ width: "30px" }}
                            />
                          </div>
                          <div style={{ paddingleft: "20px" }}>
                            Service Testing
                          </div>
                        </div>
                        <div className="text-left" style={{ width: "70%" }}>
                          It conducts thorough testing to ensure that its
                          systems are working correctly and that the quality of
                          service meets expectations.
                        </div>
                        <div className="d-flex justify-between my-1">
                          <div className="text-left registration-partner-content1">
                            <div className="card">
                              <div className="card-content">
                                <div className="drop-head-text">
                                  Upload Your Signed Agreement
                                </div>

                                <div {...getRootProps()} className="dropzone1">
                                  <input {...getInputProps()} />

                                  <div className="browse1">
                                    {/* <img
                                      src={selectserviceIcon}
                                      style={{ width: "20px" }}
                                    /> */}
                                    <MdUpload />
                                    Select Service
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
                <div className="d-flex next-back-btn">
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
                      {currentStep === 7 ? "Submit" : "Next"}
                    </Button>
                  </div>
                </div>
                {onBordingCompleted && (
                  <Dialog open={onBordingCompleted}>
                    <div className="p-4 text-center" style={{ width: "400px" }}>
                      <div>
                        <img style={{ height: "60px" }} src={CheckIcon} />
                      </div>
                      <div className="mt-2" style={{ fontSize: "20px" }}>
                        Successful <b>Testing</b>
                      </div>
                      <div>Thanks for using our service.</div>
                      <div>
                        <Button
                          variant="contained"
                          className="bg-att custom-button mt-3"
                          style={{ width: "70%" }}
                          onClick={() => {
                            setOnBordingCompleted(false);
                            navigate("/dashboard");
                          }}
                        >
                          Go to Dashboard
                        </Button>
                      </div>
                    </div>
                  </Dialog>
                )}
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default ServiceDepJourney;
