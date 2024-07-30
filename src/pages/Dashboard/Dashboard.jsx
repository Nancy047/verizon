import React, { useState } from "react";
import ResponsiveDrawer from "../../components/SideBar/SideBar";
import CommonHeader from "../../components/CommonHeader/CommonHeader";
import TrackbBlue from "../../assets/images/blueTracking.svg";
import TrackbRed from "../../assets/images/redTracking.svg";
import TrackbYellow from "../../assets/images/yellowTracking.svg";
import TrackbGreen from "../../assets/images/greenTracking.svg";
import contract from "../../assets/images/contract.svg";
import "./Dashboard.css";

import {
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  InputAdornment,
  TextField,
  FormControl,
  MenuItem,
  Select,
  Fab,
  TableContainer,
  Paper,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import QuotationApproval from "../../components/QuotationApproval/QuotationApproval";
import { valueToPercent } from "@mui/base";
import { color } from "@mui/system";
import QuotationRequestE from "../../components/QuotationRequestE/QuotationRequestE";

const Dashboard = () => {
  const [drawerStatus, setDrawerStatus] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedRowStatus, setSelectedRowStatus] = useState("");
  const getUser = sessionStorage.getItem("username");
  const getRole = sessionStorage.getItem("role");
  const [showContract, setShowContract] = useState(false);

  const rows = [
    createData(
      1,
      "Prodapt",
      "IOT Device",
      "Permanent",
      "Anto Britto",
      "Awaiting Signature",
      "Internet of Things (IoT) devices are physical objects embedded with sensors, software, and other technologies that enable them to connect and exchange data with other devices and systems over the internet. ",
      "#66876",
      "35 TB",
      "#20 HZ"
    ),
    createData(
      2,
      "InfyQ",
      "5G Connection",
      "Temporary",
      "Jacob Marsh",
      "Awaiting Signature",
      "5G promises significantly faster data speeds compared to 4G LTE. While exact speeds can vary depending on network conditions and infrastructure, 5G is capable of delivering peak download speeds of several gigabits per second (Gbps). ",
      "#74846",
      "23 TB",
      "#25 HZ"
    ),
    createData(
      3,
      "CST",
      "Edge Computing",
      "Temporary",
      "Michael Jerrald",
      "Active",
      "Edge computing refers to the practice of processing, analyzing, and storing data near the source of data generation, rather than relying solely on centralized data centers or cloud computing resources. In traditional cloud computing models.",
      "#12847",
      "37 TB",
      "#43 HZ"
    ),
    createData(
      4,
      "CST",
      "IOT Device",
      "Permanent",
      "Mitchel Stark",
      "Awaiting Signature",
      "Internet of Things (IoT) devices are physical objects embedded with sensors, software, and other technologies that enable them to connect and exchange data with other devices and systems over the internet. ",
      "#46836",
      "27 TB",
      "#20 HZ"
    ),
    createData(
      5,
      "Prodapt",
      "5G Connection",
      "Permanent",
      "Edward Ashwik",
      "Expired",
      "5G promises significantly faster data speeds compared to 4G LTE. While exact speeds can vary depending on network conditions and infrastructure, 5G is capable of delivering peak download speeds of several gigabits per second (Gbps). ",
      "#10875",
      "32 TB",
      "#23 HZ"
    ),
    createData(
      6,
      "InfyQ",
      "Edge Computing",
      "Temporary",
      "Nitx Mac",
      "Expired",
      "Edge computing refers to the practice of processing, analyzing, and storing data near the source of data generation, rather than relying solely on centralized data centers or cloud computing resources. In traditional cloud computing models.",
      "#52356",
      "34 TB",
      "#25 HZ"
    ),
  ];

  const [sideInfodata, setSideInfodata] = useState(rows[0]);

  const handleStatusFilterChange = (status) => {
    setSelectedStatus(status);
  };
  const updateDrawerStatus = () => {
    setDrawerStatus(!drawerStatus);
  };
  const TrackingList = [
    {
      name: "Total no of Tracking",
      count: "348",

      image: TrackbBlue,
    },
    {
      name: "Active Contracts",
      count: "280",

      image: TrackbGreen,
    },
    {
      name: "Awaiting Contracts",
      count: "60",

      image: TrackbYellow,
    },
    {
      name: "Expired Contracts",
      count: "8",
      image: TrackbRed,
    },
  ];

  const [breadCrumbFlow, setBreadCrumbFlow] = useState([
    {
      name: "Dashboard",
      path: "/services/att5g",
    },
    {
      name: "Quotation Approval",
      path: "/services/att5edgecomputing",
    },
  ]);

  const filteredRows =
    selectedStatus === "All"
      ? rows
      : rows.filter((row) => row.Status === selectedStatus);

  const getRowCount = (status) => {
    if (status === "All") {
      return rows.length;
    } else {
      return rows.filter((row) => row.Status === status).length;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "rgba(74, 195, 0, 1)";
      case "Awaiting Signature":
        return "rgba(232, 182, 52, 1)";
      case "Expired":
        return "rgba(201, 0, 0, 1)";
      default:
        return "#12A6CA";
    }
  };
  function createData(
    id,
    CompanyName,
    Title,
    ContractType,
    Businessuser,
    Status,
    description,
    Latency,
    Estdata,
    Bandwidth
  ) {
    return {
      id,
      CompanyName,
      Title,
      ContractType,
      Businessuser,
      Status,
      description,
      Latency,
      Estdata,
      Bandwidth,
    };
  }
  const handleRowSelect = (status) => {
    setSelectedRowStatus(status);
  };

  return (
    <div>
      <ResponsiveDrawer
        updateDrawerStatus={updateDrawerStatus}
        currentTab="Dashboard"
      />
      <div className="d-flex">
        <div className="drawer-content" />
        <div className="drawer-body">
          <CommonHeader breadCrumbFlow={breadCrumbFlow} />
          {
            /* {getUser === "user" ? (
            <QuotationApproval
              updateShowContract={() => setShowContract(false)}
            />
          )*/
            (getUser === "admin" || getUser === "user") && showContract ? (
              <QuotationRequestE
                updateShowContract={() => setShowContract(false)}
              />
            ) : (
              ""
            )
          }
          {getUser === "user" ? (
            <div className="dashboard-container-main">
              <div className="dashboard-container d-flex">
                <div className="dashboard-container-mainarea">
                  <div className="daschboard-tracking-card">
                    <div className="dash-title">
                      <img src={contract} style={{ width: "3%" }} />
                      <div className="dashboard-menutitle">
                        Contract Management
                      </div>
                    </div>
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
                  </div>
                  <div className="daschboard-tracking-card">
                    <div className="dashboard-menutitle">Search Contract</div>
                    <div className="dashboard-header-headitem d-flex justify-between">
                      <div className="dash-search">
                        <TextField
                          className="dashboard-header-search"
                          style={{ width: "100%" }}
                          placeholder="Search by Contract Title or Company name"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Search />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="dash-dropdown">
                        <FormControl className="service-field-width">
                          <Select value={"Vendor"}>
                            <MenuItem value={"Vendor"}>Vendor</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                      <div className="dash-dropdown">
                        <FormControl className="service-field-width">
                          <Select value={"Type"}>
                            <MenuItem value={"Type"}>Type</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                      <div className="dash-dropdown">
                        <FormControl className="service-field-width">
                          <Select value={"Category"}>
                            <MenuItem value={"Category"}>Category</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                      <div className="dash-dropdown">
                        <FormControl className="service-field-width">
                          <Select value={"Title"}>
                            <MenuItem value={"Title"}>Title</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </div>
                    <div className="d-flex dashboard-desc-text-head">
                      <div className="d-flex dashboard-desc-text-head">
                        {["All", "Active", "Awaiting Signature", "Expired"].map(
                          (status) => (
                            <div
                              key={status}
                              className={`dashboard-text-circle pointer ${
                                selectedStatus === status ? "tab-active" : ""
                              }`}
                              onClick={() => handleStatusFilterChange(status)}
                            >
                              <div className="dashboard-desc-text">
                                {status}
                              </div>
                              <div
                                className="numberCircle"
                                style={{ background: getStatusColor(status) }}
                              >
                                {getRowCount(status)}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                    <div>
                      <TableContainer
                        style={{ height: "350px" }}
                        className="dash_table"
                      >
                        <Table
                          stickyHeader
                          sx={{ minWidth: 550 }}
                          aria-label="simple table"
                        >
                          <TableHead style={{ backgroundColor: "whitesmoke" }}>
                            <TableRow>
                              <TableCell>Company Name</TableCell>
                              <TableCell align="left">Title</TableCell>
                              <TableCell align="left">Contract Type</TableCell>
                              <TableCell align="left">Business user</TableCell>
                              <TableCell align="left">Status</TableCell>
                              <TableCell align="left">Action</TableCell>
                            </TableRow>
                          </TableHead>

                          <TableBody className="tb-row">
                            {filteredRows.map((row) => (
                              <TableRow
                                key={row.id}
                                className={
                                  row.id == sideInfodata?.id ? "tb-active" : ""
                                }
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                                onClick={() => setSideInfodata(row)}
                              >
                                <TableCell component="th" scope="row">
                                  {row.CompanyName}
                                </TableCell>
                                <TableCell align="left">{row.Title}</TableCell>
                                <TableCell align="left">
                                  {row.ContractType}
                                </TableCell>
                                <TableCell align="left">
                                  {row.Businessuser}
                                </TableCell>
                                <TableCell align="left">
                                  <div className="tab-status">
                                    <div>
                                      {row.Status === "Awaiting Signature" ? (
                                        <div
                                          style={{
                                            width: "10px",
                                            height: "10px",
                                            borderRadius: "50%",
                                            backgroundColor:
                                              "rgba(232, 182, 52, 1)",
                                          }}
                                        ></div>
                                      ) : row.Status === "Active" ? (
                                        <div
                                          style={{
                                            width: "10px",
                                            height: "10px",
                                            borderRadius: "50%",
                                            backgroundColor:
                                              "rgba(74, 195, 0, 1)",
                                          }}
                                        ></div>
                                      ) : (
                                        <div
                                          style={{
                                            width: "10px",
                                            height: "10px",
                                            borderRadius: "50%",
                                            backgroundColor:
                                              "rgba(201, 0, 0, 1)",
                                          }}
                                        ></div>
                                      )}
                                    </div>
                                    <div style={{ marginLeft: "5px" }}>
                                      {row.Status}
                                    </div>
                                  </div>
                                </TableCell>
                                <TableCell align="left">
                                  {row.Status === "Active" ||
                                  row.Status === "Expired" ? (
                                    <Button
                                      variant="contained"
                                      className="dashboard-table-button-view"
                                    >
                                      View
                                    </Button>
                                  ) : row.Status === "Awaiting Signature" ? (
                                    <Button
                                      variant="contained"
                                      className="bg-att dashboard-table-button"
                                      onClick={() => setShowContract(true)}
                                    >
                                      Send Quote
                                    </Button>
                                  ) : (
                                    <Button
                                      variant="contained"
                                      className="bg-att dashboard-table-button"
                                    >
                                      Action
                                    </Button>
                                  )}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </div>
                  </div>
                </div>
                <div className="dashboard-side-container">
                  <div className="dashboard-sidearea-container">
                    <div>
                      <div className="dashboard-side-container-heading">
                        {" "}
                        Information
                      </div>
                      <div className="dashboard-side-container-body">
                        <div className="dashboard-side-container-desc-head">
                          Title:
                        </div>
                        <div className="dashboard-side-container-desc-text">
                          {" "}
                          {sideInfodata.Title}
                        </div>
                      </div>
                      <div className="dashboard-side-container-body">
                        <div className="dashboard-side-container-desc-head">
                          Business User:
                        </div>
                        <div className="dashboard-side-container-desc-text">
                          {" "}
                          {sideInfodata.Businessuser}
                        </div>
                      </div>

                      <div className="dashboard-side-container-body">
                        <div className="dashboard-side-container-desc-head">
                          Company Name:
                        </div>
                        <div className="dashboard-side-container-desc-text">
                          {" "}
                          {sideInfodata.CompanyName}
                        </div>
                      </div>
                      <div className="dashboard-side-container-body">
                        <div className="dashboard-side-container-desc-head">
                          Business Type:
                        </div>
                        <div className="dashboard-side-container-desc-text">
                          {" "}
                          {sideInfodata.ContractType}
                        </div>
                      </div>
                      <div className="dashboard-side-container-body">
                        <div className="dashboard-side-container-desc-head">
                          Business Address:
                        </div>
                        <div className="dashboard-side-container-desc-text">
                          {" "}
                          Little Rock, Arkasnsas
                        </div>
                      </div>
                      <div className="dashboard-side-container-heading">
                        {" "}
                        Service Details
                      </div>
                      <div className="dashboard-side-container-body2">
                        <div className="dashboard-side-container-desc-head2">
                          Description:
                        </div>
                        <div className="dashboard-side-container-desc-text2">
                          {" "}
                          {sideInfodata.description}
                        </div>
                      </div>
                      <div className="dashboard-side-container-body2">
                        <div className="dashboard-side-container-desc-head2">
                          Latency requirements:
                        </div>
                        <div className="dashboard-side-container-desc-text2">
                          {" "}
                          {sideInfodata.Latency}
                        </div>
                      </div>
                      <div className="dashboard-side-container-body2">
                        <div className="dashboard-side-container-desc-head2">
                          Estimated Data Volume:
                        </div>
                        <div className="dashboard-side-container-desc-text2">
                          {" "}
                          {sideInfodata.Estdata}
                        </div>
                      </div>
                      <div className="dashboard-side-container-body2">
                        <div className="dashboard-side-container-desc-head2">
                          Bandwidth:
                        </div>
                        <div className="dashboard-side-container-desc-text2">
                          {" "}
                          {sideInfodata.Bandwidth}
                        </div>
                      </div>
                    </div>
                    <div className="side-button">
                      {sideInfodata.Status === "Awaiting Signature" && (
                        <Button
                          variant="contained"
                          className="bg-att dashboard-side-button"
                          onClick={() => setShowContract(true)}
                        >
                          Generate Quote
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
