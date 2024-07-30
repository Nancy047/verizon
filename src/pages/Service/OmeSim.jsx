import React, { useEffect, useState } from "react";
import ResponsiveDrawer from "../../components/SideBar/SideBar";
import "./Service.css";
import ServiceMenu from "../../components/SubMenu/SubMenu";
import Tower_Icon from "../../assets/images/tower.svg";
import Sim_Icon from "../../assets/images/sim.svg";
import Dish_Icon from "../../assets/images/dish.svg";
import Workd_Icon from "../../assets/images/world.svg";
import {
  Button,
  Card,
  Divider,
  FormControl,
  FormControlLabel,
  InputAdornment,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Tooltip,
} from "@mui/material";
import { AddOutlined, HelpOutlineOutlined } from "@mui/icons-material";
import CommonHeader from "../../components/CommonHeader/CommonHeader";
import { useDispatch, useSelector } from "react-redux";
import { addService, removeService, updateService } from "../../dataSlice";

const OmeSim = () => {
  const [drawerStatus, setDrawerStatus] = useState(true);
  const updateDrawerStatus = () => {
    setDrawerStatus(!drawerStatus);
  };
  const dispatch = useDispatch();
  const storedData = useSelector((state) => state.data);
  const [formData, setFormData] = useState({
    name: "OEM SIM Procurement",
    description:
      "Harness the power of advanced SIM technology combined with our intuitive billing platform, ensuring a competitive edge in the fast-paced telecom market, while optimizing revenue and operational efficiency Customized for OEMs.",
    image: Dish_Icon,
    edgeComput: "Yes",
    describe: null,
    edge_computing_type: "Content Delivery",
    estimated_data: null,
    bandwidth: null,
    latency_req: null,
    bandwidth: null,
    integration_req: null,
    key: "ome",
    keybase: "ome",
  });
  const serviceMenuItems = [
    {
      name: "Verizon 5G",
      description:
        "Verizon 5G for MVNOs: Fast. Reliable. Revolutionary Step into the future with Verizon’s leading 5G services, designed to revolutionize connectivity for Mobile Virtual Network Operators (MVNOs). Experience the difference with lightning-fast speeds, expansive nationwide coverage, and unmatched reliability that keeps your customers connected, no matter where they are.",
      image: Tower_Icon,
      key: "5g",
      keybase: "5g",
      path: "/services/att5g",
    },
    {
      name: "EDGE Computing Services",
      description:
        "Experience the future of low-latency, high-efficiency digital solutions that transform your business operations and customer experiences.",
      image: Workd_Icon,
      key: "edge",
      keybase: "edge",
      path: "/services/att5edgecomputing",
    },

    {
      name: "OEM SIM Procurement",
      description:
        "Harness the power of advanced SIM technology combined with our intuitive billing platform, ensuring a competitive edge in the fast-paced telecom market, while optimizing revenue and operational efficiency Customized for OEMs.",
      image: Dish_Icon,
      key: "ome",
      keybase: "ome",
      path: "/services/oemsimprocurement",
    },
    {
      name: "Prepaid",
      description:
        "Harness the power of advanced SIM technology combined with our intuitive billing platform, ensuring a competitive edge in the fast-paced telecom market, while optimizing revenue and operational efficiency Customized for OEMs.",
      image: Sim_Icon,
      key: "prepaid",
      keybase: "prepaid",
      path: "/services/prepaid",
    },
  ];
  const breadCrumbFlow = [
    {
      name: "Services",
      path: "/services/att5g",
    },
    {
      name: "OEM SIM Procurement",
      path: "/services/att5edgecomputing",
    },
  ];
  const addOnItems = [
    {
      name: "Portal as a Service",
      description: `In today's rapidly evolving telecom landscape, staying ahead means offering more than just connectivity. It's about delivering a seamless, intuitive experience to your end subscribers. Recognizing this, Verizon introduces an innovative solution for MVNOs without their own website: our "Portal as a Service." This powerful addon is designed to revolutionize the way you manage your subscribers, offering a turnkey web portal that puts control and convenience at the forefront.`,
      subTitle: `Elevate Your MVNO Operations with Verizon's`,
      key: "Service_Portal",
    },
    {
      name: "Billing, Charging & Rating",
      description: `In today's rapidly evolving telecom landscape, staying ahead means offering more than just connectivity. It's about delivering a seamless, intuitive experience to your end subscribers. Recognizing this, Verizon introduces an innovative solution for MVNOs without their own website: our "Portal as a Service." This powerful addon is designed to revolutionize the way you manage your subscribers, offering a turnkey web portal that puts control and convenience at the forefront.`,
      subTitle: `Transform Your MVNO Business with Verizon's Billing, 
        Charging, & Rating Systems Addons`,
      key: "Billing",
    },
  ];
  const [selectedService, setSelectedService] = useState("ome");
  const [currentService, setCurrentService] = useState(serviceMenuItems[2]);
  const [checkEdgeComput, setCheckEdgeComput] = useState("Yes");
  const [selectedEdgeComput, setSelectedEdgeComput] =
    useState("Content Delivery");
  useEffect(() => {
    if (storedData?.selected_services) {
      var isCurrentServiceIn = storedData?.selected_services?.find(
        (service) => service.name === currentService.name
      );
      if (isCurrentServiceIn) {
        setFormData(isCurrentServiceIn);
      }
    }
  }, [storedData]);
  const insertService = () => {
    const newStoreData = storedData;
    if (
      newStoreData?.selected_services &&
      newStoreData?.selected_services?.length
    ) {
      if (
        newStoreData?.selected_services?.some(
          (service) => service.name === currentService.name
        )
      ) {
        dispatch(updateService({ key: formData }));
      } else {
        dispatch(addService({ key: formData }));
      }
    } else {
      dispatch(addService({ key: formData }));
    }
  };

  function checkServiceInCart() {
    if (
      storedData?.selected_services?.some(
        (service) => service.name === currentService.name
      )
    ) {
      return true;
    }
    return false;
  }
  const removeFromCart = () => {
    var newStoreData = storedData;
    var servicesToRemove = newStoreData?.selected_services.find(
      (serviceIn) => serviceIn.name === currentService.name
    );
    // updateStoredData(newStoreData);
    dispatch(removeService({ key: servicesToRemove }));
  };
  const handleRadioChange = (event) => {
    setCheckEdgeComput(event.target.value);
  };
  const updateSelectedService = (choosenService) => {
    setCurrentService(choosenService);
    setSelectedService(choosenService.key);
  };
  return (
    <div>
      <ResponsiveDrawer
        updateDrawerStatus={updateDrawerStatus}
        currentTab="Service"
      />
      <div className="d-flex">
        <div className="drawer-content" />
        <div className="drawer-body ">
          <CommonHeader breadCrumbFlow={breadCrumbFlow} />
          <div className="d-flex">
            <div className="service-sidemenu">
              <ServiceMenu
                selectedSubMenu={selectedService}
                subMenuItems={serviceMenuItems}
                // handleUpdateSelectedSubMenu={updateSelectedService}
              />
            </div>
            <div className="service-body">
              <div className="service-details-container">
                <div className="service-head-card">
                  <div className="service-item-image">
                    <img
                      className={`service-${currentService.key}`}
                      src={currentService.image}
                    />
                    <div className="service-menutitle">
                      {currentService.name}
                    </div>
                  </div>
                  <div className="service-menucontent">
                    <div className="service-menudescription">
                      {currentService.description}
                    </div>
                  </div>
                </div>
                <div className="service-body-card">
                  <div className="service-body-title">Service Management</div>
                  <div>
                    <div className="service-question-area">
                      <span className="service-question">
                        Current Use of Edge Computing
                      </span>
                      <Tooltip title={"Current Use of Edge Computing"}>
                        <HelpOutlineOutlined className="service-question-icon pointer" />
                      </Tooltip>
                    </div>
                    <RadioGroup
                      value={formData.edgeComput}
                      onChange={(e) =>
                        handleRadioChange(e, e.target.value, "edgeComput")
                      }
                      row
                    >
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                        labelPlacement="end"
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio />}
                        label="No"
                        labelPlacement="end"
                      />
                    </RadioGroup>
                    <TextField
                      className="service-Describe"
                      multiline
                      rows={3}
                      value={formData.describe}
                      onChange={(e) =>
                        handleRadioChange(e, e.target.value, "describe")
                      }
                      placeholder="Describe"
                    />
                  </div>
                  <div className="d-flex service-body-edgecomputing">
                    <div className="service-body-edge-item">
                      <div className="service-question-area">
                        <span className="service-question">
                          Select Edge Computing
                        </span>
                        <Tooltip title={"Current Use of Edge Computing"}>
                          <HelpOutlineOutlined className="service-question-icon pointer" />
                        </Tooltip>
                      </div>
                      <FormControl className="service-field-width">
                        <Select
                          value={formData.edge_computing_type}
                          onChange={(e) =>
                            handleRadioChange(
                              e,
                              e.target.value,
                              "edge_computing_type"
                            )
                          }
                        >
                          <MenuItem value={"Content Delivery"}>
                            Content Delivery
                          </MenuItem>
                          <MenuItem value={"Content Delivery"}>
                            Content Delivery
                          </MenuItem>
                          <MenuItem value={"Content Delivery"}>
                            Content Delivery
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="service-body-edge-item">
                      <div className="service-question-area">
                        <span className="service-question">
                          Estimated Data Volume
                        </span>
                        <Tooltip title={"Current Use of Edge Computing"}>
                          <HelpOutlineOutlined className="service-question-icon pointer" />
                        </Tooltip>
                      </div>
                      <TextField
                        value={formData.estimated_data}
                        onChange={(e) =>
                          handleRadioChange(e, e.target.value, "estimated_data")
                        }
                        InputProps={{
                          endAdornment: (
                            <InputAdornment
                              className="side-name"
                              position="end"
                            >
                              Per Month
                            </InputAdornment>
                          ),
                        }}
                        className="service-field-width-end"
                        placeholder="Enter data volume"
                      />
                    </div>
                  </div>
                  <div className="service-body-requirements-head">
                    <span className="service-question-2">
                      Connectivity Requirements
                    </span>
                    <Tooltip title={"Current Use of Edge Computing"}>
                      <HelpOutlineOutlined className="service-question-icon-head pointer" />
                    </Tooltip>
                  </div>

                  <div className="d-flex service-body-edgecomputing">
                    <div className="service-body-edge-item">
                      <div className="service-question-area">
                        <span className="service-question">Bandwidth</span>
                      </div>
                      <TextField
                        value={formData.bandwidth}
                        onChange={(e) =>
                          handleRadioChange(e, e.target.value, "bandwidth")
                        }
                        InputProps={{
                          endAdornment: (
                            <InputAdornment
                              className="side-name"
                              position="end"
                            >
                              Mbps
                            </InputAdornment>
                          ),
                        }}
                        className="service-field-width"
                        placeholder="Enter Bandwidth"
                      />
                    </div>
                    <div className="service-body-edge-item">
                      <div className="service-question-area">
                        <span className="service-question">
                          Latency requirements
                        </span>
                      </div>
                      <TextField
                        value={formData.latency_req}
                        onChange={(e) =>
                          handleRadioChange(e, e.target.value, "latency_req")
                        }
                        InputProps={{
                          endAdornment: (
                            <InputAdornment
                              className="side-name"
                              position="end"
                            >
                              M/S
                            </InputAdornment>
                          ),
                        }}
                        className="service-field-width-end"
                        placeholder="Content Delivery"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="service-question-area">
                      <span className="service-question">
                        Integration Requirements:
                      </span>
                    </div>
                    <TextField
                      value={formData.integration_req}
                      onChange={(e) =>
                        handleRadioChange(e, e.target.value, "integration_req")
                      }
                      className="service-Describe"
                      multiline
                      rows={3}
                      placeholder="Describe any specific requirements"
                    />
                  </div>
                  <Divider className="my-2" />
                  <div className="d-flex justify-end m-2">
                    <div className="text-left mx-2">
                      <Button
                        variant="text"
                        className="custom-button color-att"
                        onClick={() => {
                          {
                            checkServiceInCart()
                              ? removeFromCart()
                              : console.log("gg");
                          }
                        }}
                      >
                        {checkServiceInCart() ? "Discard" : "Draft"}
                      </Button>
                    </div>
                    <div className="text-left">
                      <Button
                        variant="contained"
                        className={"bg-att custom-button"}
                        onClick={insertService}
                      >
                        {checkServiceInCart()
                          ? "Update Service"
                          : "Add Service"}
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
  );
};

export default OmeSim;
