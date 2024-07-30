import React, { useState } from "react";
import ResponsiveDrawer from "../../components/SideBar/SideBar";
import "./Tracking.css";
import ServiceMenu from "../../components/SubMenu/SubMenu";
import ContractImg from "../../assets/images/ticket.svg";
import OrderTrackingImg from "../../assets/images/staroutline.svg";
import TeansferArrow from "../../assets/images/networkarrow.svg";

import shareIcon from "../../assets/images/share.svg";
import binIcon from "../../assets/images/bin.svg";
import Tower_Icon from "../../assets/images/tower.svg";
import Sim_Icon from "../../assets/images/sim.svg";
import Dish_Icon from "../../assets/images/dish.svg";
import Workd_Icon from "../../assets/images/world.svg";
import addOnIcon2 from "../../assets/images/addon2.svg";
import addOnIcon1 from "../../assets/images/addon1.svg";
import sendIcon from "../../assets/images/Send.svg";
import CategoryIcon from "../../assets/images/Category.svg";
import TicketIcon from "../../assets/images/Ticket Star.svg";
import ActivityIcon from "../../assets/images/Activity.svg";
import GraphIcon from "../../assets/images/Graph.svg";

import {
  Button,
  Card,
  Checkbox,
  Dialog,
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
import {
  AddOutlined,
  DeleteOutline,
  HelpOutlineOutlined,
  IosShareOutlined,
} from "@mui/icons-material";
import { pink } from "@mui/material/colors";
import CommonHeader from "../../components/CommonHeader/CommonHeader";

const OrderTracking = () => {
  const [drawerStatus, setDrawerStatus] = useState(true);
  const updateDrawerStatus = () => {
    setDrawerStatus(!drawerStatus);
  };
  const serviceMenuItems = [
    {
      name: "Verizon 5G",
      description:
        "Verizon 5G for MVNOs: Fast. Reliable. Revolutionary Step into the future with Verizon’s leading 5G services, designed to revolutionize connectivity for Mobile Virtual Network Operators (MVNOs). Experience the difference with lightning-fast speeds, expansive nationwide coverage, and unmatched reliability that keeps your customers connected, no matter where they are.",
      image: Tower_Icon,
      key: "5g",
      keybase: "5g",
    },
    {
      name: "EDGE Computing Services",
      description:
        "Experience the future of low-latency, high-efficiency digital solutions that transform your business operations and customer experiences.",
      image: Workd_Icon,
      key: "edge",
      keybase: "edge",
    },

    {
      name: "OEM SIM Procurement",
      description:
        "Harness the power of advanced SIM technology combined with our intuitive billing platform, ensuring a competitive edge in the fast-paced telecom market, while optimizing revenue and operational efficiency Customized for OEMs.",
      image: Dish_Icon,
      key: "ome",
      keybase: "ome",
    },
    {
      name: "Prepaid",
      description:
        "Harness the power of advanced SIM technology combined with our intuitive billing platform, ensuring a competitive edge in the fast-paced telecom market, while optimizing revenue and operational efficiency Customized for OEMs.",
      image: Sim_Icon,
      key: "prepaid",
      keybase: "prepaid",
    },
  ];
  const trackingMenuItems = [
    {
      name: "Order History",
      description:
        "This involves negotiating the terms and conditions of the agreement, drafting the contract document, and ensuring that it accurately reflects the intentions and agreements of all parties involved. ",
      image: OrderTrackingImg,
      key: "none",
      keybase: "order-tracking",
      path: "/order/history",
    },
    {
      name: "Order Tracking",
      description:
        "This involves negotiating the terms and conditions of the agreement, drafting the contract document, and ensuring that it accurately reflects the intentions and agreements of all parties involved. ",
      image: TeansferArrow,
      key: "none",
      keybase: "contract_management",
      path: "/order/tracking",
    },

    {
      name: "Request Quote",
      description: `The "Request Quote" feature provides users with the ability to obtain pricing information for products or services offered by a business. By filling out a simple form or providing specific details about their requirements, customers can submit a request to receive a customized quote tailored to their needs.`,
      image: ContractImg,
      key: "none",
      keybase: "transfer_status",
      path: "/order/requestquote",
    },
  ];
  const breadCrumbFlow = [
    {
      name: "Order",
      path: "/services/att5g",
    },
    {
      name: "Order Tracking",
      path: "/services/att5edgecomputing",
    },
  ];
  const addOnItems = [
    {
      name: "Portal as a Service",
      description: `In today's rapidly evolving telecom landscape, staying ahead means offering more than just connectivity. It's about delivering a seamless, intuitive experience to your end subscribers. Recognizing this, Verizon introduces an innovative solution for MVNOs without their own website: our "Portal as a Service." This powerful addon is designed to revolutionize the way you manage your subscribers, offering a turnkey web portal that puts control and convenience at the forefront.`,
      subTitle: `Elevate Your MVNO Operations with Verizon's`,
      key: "Service_Portal",
      img: addOnIcon1,
    },
    {
      name: "Billing, Charging & Rating",
      description: `In today's rapidly evolving telecom landscape, staying ahead means offering more than just connectivity. It's about delivering a seamless, intuitive experience to your end subscribers. Recognizing this, Verizon introduces an innovative solution for MVNOs without their own website: our "Portal as a Service." This powerful addon is designed to revolutionize the way you manage your subscribers, offering a turnkey web portal that puts control and convenience at the forefront.`,
      subTitle: `Transform Your MVNO Business with Verizon's Billing, 
        Charging, & Rating Systems Addons`,
      key: "Billing",
      img: addOnIcon2,
    },
  ];
  const [selectedTracking, setSelectedTracking] = useState(
    "contract_management"
  );
  const [currentTracking, setCurrentTracking] = useState(trackingMenuItems[1]);
  const [checkEdgeComput, setCheckEdgeComput] = useState("Yes");
  const [showPolicy, setShowPolicy] = useState(false);
  const [requestSended, setRequestSended] = useState(false);

  const [selectedEdgeComput, setSelectedEdgeComput] =
    useState("Content Delivery");

  const handleRadioChange = (event) => {
    setCheckEdgeComput(event.target.value);
  };
  const updateSelectedTracking = (choosenService) => {
    setCurrentTracking(choosenService);
    setSelectedTracking(choosenService.key);
  };
  return (
    <div>
      {
        <Dialog open={requestSended}>
          <div className="p-4 text-center" style={{ width: "400px" }}>
            <div>
              <img style={{ height: "60px" }} src={sendIcon} />
            </div>
            <div className="mt-2" style={{ fontSize: "20px" }}>
              <b>Service Request Sent!</b>
            </div>
            <div>
              Your Service Request is on its way to us! Sit back, relax, and let
              us take care of the rest!
            </div>
            <div>
              <Button
                variant="contained"
                className="bg-att custom-button mt-3"
                style={{ width: "70%" }}
                onClick={() => {
                  setRequestSended(false);
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
        currentTab="Order"
      />
      <div className="d-flex">
        <div className="drawer-content" />
        <div className="drawer-body">
          <CommonHeader breadCrumbFlow={breadCrumbFlow} />
          <div className="d-flex">
            <div className="tracking-sidemenu">
              <ServiceMenu
                selectedSubMenu={selectedTracking}
                subMenuItems={trackingMenuItems}
                handleUpdateSelectedSubMenu={updateSelectedTracking}
              />
            </div>
            <div className="tracking-body">
              <div className="tracking-details-container">
                <div className="tracking-head-card">
                  <div className="tracking-item-image">
                    <img
                      className={`tracking-${currentTracking.key}`}
                      src={currentTracking.image}
                    />
                    <div className="tracking-menutitle">
                      {currentTracking.name}
                    </div>
                  </div>
                  <div className="tracking-menucontent">
                    <div className="tracking-menudescription">
                      {currentTracking.description}
                    </div>
                  </div>
                  {/* {
                  <div className="d-flex-wrap">
                    {TrackingList.map((trackItem) => {
                      return (
                        <div className="tracking-list-container">
                          <div className="tracking-list-card">
                            <div className="d-flex">
                              <img
                                className="tracking-image-list"
                                src={trackItem.image}
                              />
                              <div>
                                <div className="tracking-list-heading">
                                  {trackItem.name}
                                </div>
                                <div className="tracking-list-Count">
                                  {trackItem.count}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                } */}
                </div>
                <div className="tracking-body-card">
                  <div className="requestquote-head">Checkout</div>
                  <div className="requestquote-checkmenu d-flex justify-between">
                    <div className="d-flex">
                      <Checkbox
                        defaultChecked
                        sx={{
                          color: "rgba(0, 168, 224, 1)",
                          "&.Mui-checked": {
                            color: "rgba(0, 168, 224, 1)",
                          },
                        }}
                      />
                      <div className="pl-1 mY-auto">1/1 Items Selected</div>
                    </div>
                    <div className="d-flex">
                      <div className="mY-auto pr-1">
                        <img src={shareIcon} style={{ height: "25px" }} />
                      </div>
                      <div className="mY-auto">
                        <img src={binIcon} style={{ height: "25px" }} />
                      </div>
                    </div>
                  </div>
                  {serviceMenuItems.map((selService) => {
                    return (
                      <div className="requestquote-head-card d-flex">
                        <div className="d-flex requestquote-midcontent">
                          <div className="mY-auto requestquote-checkbox">
                            <Checkbox
                              defaultChecked
                              sx={{
                                color: "rgba(0, 168, 224, 1)",
                                "&.Mui-checked": {
                                  color: "rgba(0, 168, 224, 1)",
                                },
                              }}
                            />
                          </div>
                          <div className="ml-3">
                            <div className="requestquote-item-image">
                              <img
                                className={`requestquote-${selService.key}`}
                                src={selService.image}
                              />
                              <div className="requestquote-menutitle">
                                {selService.name}
                              </div>
                            </div>
                            <div className="requestquote-menucontent">
                              <div className="requestquote-menudescription">
                                {selService.description}
                              </div>
                            </div>
                          </div>
                        </div>
                        <Divider
                          flexItem
                          orientation="vertical"
                          className="mx-2"
                        />
                        <div className="d-flex requestquote-datas">
                          <div>
                            <div className="requestquote-fieldtitle">
                              Select Edge Computing
                            </div>
                            <div className="requestquote-fieldvalue">
                              Content Delivery
                            </div>
                          </div>
                          <div>
                            <div className="requestquote-fieldtitle">
                              Latency requirements
                            </div>
                            <div className="requestquote-fieldvalue">
                              #66876
                            </div>
                          </div>
                        </div>
                        <div className="d-flex requestquote-datas">
                          <div>
                            <div className="requestquote-fieldtitle">
                              Estimated Data Volume
                            </div>
                            <div className="requestquote-fieldvalue">35 TB</div>
                          </div>
                          <div>
                            <div className="requestquote-fieldtitle">
                              Bandwidth
                            </div>
                            <div className="requestquote-fieldvalue">
                              #66876
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="requestquote-addon">
                  <div className="requestquote-head">ADD ONs</div>
                  {addOnItems.map((addon) => {
                    return (
                      <div className="d-flex requestquote-addon-card">
                        <div className="requestquote-addon-image">
                          <img src={addon.img} />
                        </div>
                        <div className="requestquote-addon-content">
                          <>
                            <div className="d-flex justify-between">
                              <div className="requestquote-addon-head">
                                {addon.name}
                              </div>
                              <div>
                                <Checkbox
                                  defaultChecked
                                  sx={{
                                    color: "rgba(0, 168, 224, 1)",
                                    "&.Mui-checked": {
                                      color: "rgba(0, 168, 224, 1)",
                                    },
                                    "& .MuiSvgIcon-root": { fontSize: 30 },
                                  }}
                                />
                              </div>
                            </div>
                            <div className="requestquote-addon-subtitle">
                              {addon.subTitle}
                            </div>
                            <div className="requestquote-addon-description">
                              {addon.description}
                            </div>
                          </>
                          <div className="d-flex justify-between pt-2">
                            <div className="requestquote-addon-description d-flex">
                              <img src={CategoryIcon} />
                              <div className="pl-1">Portal Service</div>
                            </div>
                            <div className="requestquote-addon-description d-flex">
                              <img src={ActivityIcon} />
                              <div className="pl-1">Seamless Experience</div>
                            </div>
                            <div className="requestquote-addon-description d-flex">
                              <img src={GraphIcon} />
                              <div className="pl-1">Control & Monitoring</div>
                            </div>
                            <div className="requestquote-addon-description d-flex">
                              <img src={TicketIcon} />{" "}
                              <div className="pl-1">Revolutionary Approach</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div className="requestquote-bottom-head d-flex">
                    <div>
                      <Checkbox
                        defaultChecked
                        sx={{
                          color: "rgba(0, 168, 224, 1)",
                          "&.Mui-checked": {
                            color: "rgba(0, 168, 224, 1)",
                          },
                          "& .MuiSvgIcon-root": { fontSize: 30 },
                        }}
                      />
                    </div>
                    <div className="ml-1 mY-auto">
                      Terms of Service for MVNO Partners
                    </div>
                  </div>
                  <div className="requestquote-addon-margin requestquote-addon-subtitle">
                    Introduction
                  </div>
                  <div className="requestquote-addon-margin requestquote-addon-description">
                    This Terms of Service Agreement ("Agreement") is entered
                    into by and between Verizon (the "Provider") and the Mobile
                    Virtual Network Operator ("MVNO", "you", or "your"),
                    collectively referred to as the "Parties". This Agreement
                    governs the provision and use of Verizon's prepaid, postpaid,
                    bulk SIM, and BYOS services (collectively, the "Services").
                    {!showPolicy && (
                      <span>
                        ...{" "}
                        <span
                          className="pointer color-att"
                          onClick={() => setShowPolicy(true)}
                        >
                          View
                        </span>
                      </span>
                    )}
                  </div>
                  {showPolicy && (
                    <>
                      <div className="requestquote-addon-margin requestquote-addon-subtitle">
                        Services Description
                      </div>
                      <div className="requestquote-addon-margin requestquote-addon-description">
                        Verizon agrees to provide the MVNO with access to its
                        telecommunications network and related services,
                        including but not limited to prepaid and postpaid mobile
                        services, bulk SIM card procurement, and the option for
                        MVNOs to utilize their own SIM cards (BYOS) under the
                        terms outlined herein.
                      </div>
                      <div className="requestquote-addon-margin requestquote-addon-subtitle">
                        MVNO Obligations
                      </div>
                      <div className="requestquote-addon-margin requestquote-addon-description">
                        Compliance: MVNO agrees to comply with all applicable
                        laws, regulations, and policies related to the use of
                        the Services. Use of Services: MVNO shall use the
                        Services only for lawful purposes and in accordance with
                        this Agreement. Payment: MVNO agrees to timely pay for
                        all Services rendered by Verizon at the agreed-upon rates.
                      </div>
                      <div className="requestquote-addon-margin requestquote-addon-subtitle">
                        Pricing and Payment Terms
                      </div>
                      <div className="requestquote-addon-margin requestquote-addon-description">
                        Detailed pricing for each Service will be specified in
                        the corresponding Service Schedule or Order Form.
                        Payments are due within [number] days of invoice receipt
                        unless otherwise agreed in writing.
                      </div>
                      <div className="requestquote-addon-margin requestquote-addon-subtitle">
                        Term and Termination
                      </div>
                      <div className="requestquote-addon-margin requestquote-addon-description">
                        This Agreement shall commence on the Effective Date and
                        continue for an initial term of [number] years ("Initial
                        Term"), unless terminated earlier as provided herein.
                        Either party may terminate this Agreement upon [number]
                        days' written notice to the other party. Specific
                        termination conditions related to breach of contract,
                        insolvency, or inability to perform the Services will be
                        outlined herein.
                      </div>
                      <div className="requestquote-addon-margin requestquote-addon-subtitle">
                        Intellectual Property Rights
                      </div>
                      <div className="requestquote-addon-margin requestquote-addon-description">
                        Each party retains all rights, title, and interest in
                        and to its own trademarks, service marks, and
                        intellectual property. Use of the other party's
                        trademarks or intellectual property requires prior
                        written consent.
                      </div>
                      <div className="requestquote-addon-margin requestquote-addon-subtitle">
                        Confidentiality
                      </div>
                      <div className="requestquote-addon-margin requestquote-addon-description">
                        The Parties agree to maintain the confidentiality of
                        Confidential Information shared during the term of this
                        Agreement and for [number] years thereafter.
                      </div>
                      <div className="requestquote-addon-margin requestquote-addon-subtitle">
                        Limitation of Liability
                      </div>
                      <div className="requestquote-addon-margin requestquote-addon-description">
                        Verizon's liability under this Agreement shall be limited
                        to the amount paid by the MVNO for the Services during
                        the [number] months prior to the claim. Neither party
                        shall be liable for indirect, special, or consequential
                        damages.
                      </div>
                      <div className="requestquote-addon-margin requestquote-addon-subtitle">
                        Dispute Resolution
                      </div>
                      <div className="requestquote-addon-margin requestquote-addon-description">
                        The Parties agree to first attempt to resolve any
                        dispute informally. If the dispute cannot be resolved,
                        it shall be settled by arbitration in [Location], in
                        accordance with the rules of [Arbitration Association].
                      </div>
                      <div className="requestquote-addon-margin requestquote-addon-subtitle">
                        General Provisions
                      </div>
                      <div className="requestquote-addon-margin requestquote-addon-description">
                        Amendments: This Agreement may only be amended in
                        writing, signed by both Parties. Governing Law: This
                        Agreement shall be governed by the laws of
                        [State/Country]. Entire Agreement: This Agreement
                        constitutes the entire agreement between the Parties
                        regarding its subject matter.
                      </div>
                      <div className="requestquote-addon-margin requestquote-addon-subtitle">
                        Acceptance
                      </div>
                      <div className="requestquote-addon-margin requestquote-addon-description">
                        By using the Services, MVNO acknowledges that they have
                        read, understood, and agreed to be bound by the terms of
                        this Agreemen{" "}
                        <span
                          className="pointer color-att"
                          onClick={() => setShowPolicy(false)}
                        >
                          Collapse
                        </span>
                      </div>
                    </>
                  )}
                  <div className="d-flex justify-end m-2">
                    <div className="text-left mx-2">
                      <Button
                        variant="text"
                        className="custom-button color-att"
                      >
                        Draft
                      </Button>
                    </div>
                    <div className="text-left">
                      <Button
                        variant="contained"
                        className="bg-att custom-button registration-partner-button"
                        onClick={() => setRequestSended(true)}
                      >
                        Proceed
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

export default OrderTracking;
