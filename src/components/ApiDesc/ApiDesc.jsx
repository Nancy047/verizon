import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ResponsiveDrawer from "../../components/SideBar/SideBar";
import "./ApiDesc.css";
import { NavigateNext } from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import {
  Button,
  Divider,
  FormControl,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import CommonHeader from "../../components/CommonHeader/CommonHeader";
import arrowIcon from "../../assets/images/arrowcat.svg";
import clockIcon from "../../assets/images/clockcat.svg";
import upscaleIcon from "../../assets/images/upscale_cat.svg";
import chattousIcon from "../../assets/images/chattous.svg";
import callusIcon from "../../assets/images/callus.svg";
import visitusIcon from "../../assets/images/visitus.svg";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import ReactCodeMirror from "@uiw/react-codemirror";
import axios from "axios";

const ApiDesc = () => {
  const [drawerStatus, setDrawerStatus] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState("Overview");
  const [selectedStatustype, setSelectedStatustype] = useState("Code Snippet");
  const [employees, setEmployees] = useState("");
  const [currentInputTab, setCurrentInputTab] = useState("Keys");
  const [currentOutputTab, setCurrentOutputTab] = useState("Preview");
  const location = useLocation();
  const specificCard = location.state?.specificCard || {};
  const handleStatusFilterChange = (status) => {
    setSelectedStatus(status);
  };

  const handleStatusFilterChange2 = (status2) => {
    setSelectedStatustype(status2);
  };
  const updateDrawerStatus = () => {
    setDrawerStatus(!drawerStatus);
  };
  useEffect(() => {
    const initialBreadCrumbFlow = [
      {
        id: 1,
        name: "Service Testing",
        path: "/services/att5g",
      },
      {
        id: 2,
        name: specificCard.title || "",
        path: "/services/att5edgecomputing",
      },
      {
        id: 3,
        name: selectedStatus,
        path: "/services/att5edgecomputing",
      },
    ];
    setBreadCrumbFlow(initialBreadCrumbFlow);
  }, [specificCard.title, selectedStatus]);

  const [breadCrumbFlow, setBreadCrumbFlow] = useState([
    {
      id: 1,
      name: "Service Testing",
      path: "/services/att5g",
    },
    {
      id: 2,
      name: "",
      path: "/services/att5edgecomputing",
    },
    {
      id: 3,
      name: "overview", // This will be updated based on the selected status
      path: "/services/att5edgecomputing",
    },
  ]);
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (event, id) => {
    const { checked } = event.target;
    setCheckedItems((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
  };
  const handlePost = async () => {
    alert("postworking");
    try {
      const response = await axios.get(
        "https://35.225.97.219/tmf-api/accountManagement/v4/billFormat/getAll"
      );
      setEmployees(response);
      console.log("reponse", response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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
          <div className="d-flex" style={{ width: "100%", height: "200px" }}>
            <div style={{ width: "100%" }}>
              <div className="categoryapi-desc-card">
                <div className="category-desc-left">
                  <div className="cat_left_logo">
                    <img
                      src={specificCard.logo}
                      className="right-desc-img"
                      style={{ width: "75px", marginTop: "4px" }}
                    />
                  </div>
                  <div className="cat_left_text">
                    <div
                      style={{
                        fontWeight: "bold",
                        fontSize: "20px",
                        padding: "3px",
                        color: "rgba(51, 51, 51, 1)",
                      }}
                    >
                      {specificCard.title}
                    </div>
                    <div className="d-flex" style={{ fontSize: "19px" }}>
                      <div style={{ padding: "3px" }}>
                        By{" "}
                        <span
                          style={{
                            color: "red",
                            fontWeight: "bold",
                          }}
                        >
                          Verizon
                        </span>
                      </div>
                      <div
                        className="cat_right_line"
                        style={{ margin: "3px" }}
                      ></div>
                      <div style={{ padding: "3px" }}>
                        {specificCard.update}
                      </div>
                    </div>
                    <div className="d-flex">
                      <Stack spacing={1}>
                        <Rating
                          name="half-rating"
                          defaultValue={4.5}
                          precision={0.5}
                        />
                      </Stack>
                      <div>{specificCard.review}</div>
                    </div>
                  </div>
                </div>
                <div className="cat_right_line"></div>
                <div className="category-desc-right">
                  <div className="right-desc-text">{specificCard.desc}</div>
                  <div className="right-main-desc2">
                    <div className="d-flex">
                      <div className="right-api-desc">
                        <div className="d-flex">
                          <img src={clockIcon} className="right-desc-img" />
                          <span>Latency</span>
                        </div>
                        <div className="lat_desc">{specificCard.ms}</div>
                      </div>
                      <div className="right-api-desc">
                        <div className="d-flex">
                          <img src={upscaleIcon} className="right-desc-img" />
                          <span>Popularity</span>
                        </div>
                        <div className="lat_desc">{specificCard.upgrade}</div>
                      </div>
                      <div className="right-api-desc">
                        <div className="d-flex">
                          <img src={arrowIcon} className="right-desc-img" />
                          <span>Servicelevel</span>
                        </div>
                        <div className="lat_desc">{specificCard.arrow}</div>
                      </div>
                    </div>
                    <div className="right-api-desc2 d-flex">
                      <Button
                        variant="contained"
                        className="bg-att api-table-button"
                        onClick={() => ""}
                      >
                        Verify
                      </Button>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex dashboard-api-desc-text-head">
              <div className="d-flex dashboard-api-desc-text-head">
                {["Overview", "Document", "Endpoints", "Support", "Review"].map(
                  (status) => (
                    <div
                      key={status}
                      className={`dashboard-text-api pointer ${
                        selectedStatus === status ? "tab-active-api" : ""
                      }`}
                      onClick={() => handleStatusFilterChange(status)}
                    >
                      <div className="dashboard-api-desc-text">{status}</div>
                    </div>
                  )
                )}
              </div>
            </div>
            {selectedStatus === "Overview" ? (
              <div className="api-desc-overview">
                <div className="api-desc-over-title">Product overview</div>
                <div className="api-desc-over-desc">
                  The Verizon SMS API is a service provided by Verizon that enables
                  developers to integrate SMS (Short Message Service)
                  functionality into their applications. This API allows
                  developers to send and receive text messages programmatically,
                  facilitating communication between their applications and
                  mobile devices.
                </div>
                <div className="api-desc-over-title">
                  Why this solution is different
                </div>
                <div className="api-desc-over-desc">
                  <ul>
                    <li>Support for Multiple Data Sources</li>
                    <li>Triple Engine Technology</li>
                    <li>Multiple Scanning Models</li>
                    <li>Static, Dynamic & Forensic Analysis</li>
                    <li>Configuration Intelligence</li>
                    <li>Simplified Setup</li>
                    <li>Security First Approach with In-Tenant Scanning</li>
                  </ul>
                </div>
                <div className="api-desc-over-desc">
                  As of my last update in January 2022, Verizon provides various
                  telecom APIs (Application Programming Interfaces) to enable
                  developers to integrate their services into third-party
                  applications. Some of the APIs offered by Verizon include.
                </div>
              </div>
            ) : selectedStatus === "Document" ? (
              <div className="api-desc-overview">
                <div className="api-desc-over-title">
                  Verizon Call Management API
                </div>
                <div className="api-desc-over-desc">
                  This API is organized around REST. Our API has predictable
                  resource-oriented URLs, accepts form-encoded request bodies,
                  returns JSON-encoded responses, and uses standard HTTP
                  response codes, authentication, and verbs.
                </div>
                <div className="api-desc-over-sugg">
                  <div className="api-desc-over-title">
                    Just Getting Started ?
                  </div>
                  <div className="api-desc-over-desc">
                    Check Out our{" "}
                    <span
                      style={{
                        color: "rgba(0, 168, 224, 1)",
                        cursor: "pointer",
                      }}
                    >
                      development quickstart guide.
                    </span>
                  </div>
                </div>
                <div className="api-desc-over-title">Authentication</div>
                <div className="api-desc-over-desc">
                  Image Upload API uses API keys to authenticate requests. You
                  can view and manage your API keys in the Accounts page.
                </div>
                <div className="api-desc-over-desc">
                  Your API keys carry many privileges, so be sure to keep them
                  secure! Do not share your secret API keys in publicly
                  accessible areas such as GitHub, client-side code, and so
                  forth. All requests made to the API must hold a custom HTTP
                  header named "apikey". Implementation differs with each
                  programming language. Below are some samples. All API requests
                  must be made over HTTPS. Calls made over plain HTTP will fail.
                  API requests without authentication will also fail.
                </div>
              </div>
            ) : selectedStatus === "Endpoints1" ? (
              <div className="api-desc-overview">
                <div className="endpoint-card-main">
                  <div className="endpoint-card1">
                    <div className="endpoint-title">Call Management API</div>
                    <div className="endpoint-submenu d-flex">
                      <div style={{ width: "90%" }}>Post Chat Completion</div>
                      <div className="d-flex">
                        <NavigateNext fontSize="small" />
                      </div>
                    </div>
                  </div>
                  <div className="endpoint-right-line"></div>
                  <div className="endpoint-card1">
                    <div className="endpoint-title"></div>
                    <div className="api-desc-over-desc">
                      Post Chat Completion
                    </div>
                    <div className="api-endpoint-sub-title">Account</div>
                    <div className="endpoint-dropdown">
                      <FormControl className="registration-partner-input-right">
                        <Select value={"Jerrald, Michael"}>
                          <MenuItem value={"Jerrald, Michael"}>
                            Jerrald, Michael
                          </MenuItem>
                          <MenuItem value={"Evan, Chris"}>Evan, Chris</MenuItem>
                          <MenuItem value={"Ashwin, Anto"}>
                            Ashwin, Anto
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="endpoint-submenu2 d-flex">
                      <div style={{ width: "90%" }}>Header Paramenters</div>
                      <div className="d-flex">
                        <KeyboardArrowDownIcon fontSize="small" />
                      </div>
                    </div>
                    <div>
                      <div className="api-endpoint-sub-title">Content Type</div>
                      <div className="api-endpoint-input">
                        {" "}
                        <TextField placeholder="application/(Node.js) Axios" />
                      </div>
                    </div>
                    <div>
                      <div className="api-endpoint-sub-title">Key</div>
                      <div className="api-endpoint-input">
                        <TextField placeholder="65869b2d-65e0-46b3-bd75-5848fa1a1dee" />
                      </div>
                    </div>
                    <div>
                      <div className="api-endpoint-sub-title">Host</div>
                      <div className="api-endpoint-input">
                        <TextField placeholder="chat-gpt26.p.rapidapi.com" />
                      </div>
                    </div>
                  </div>
                  <div className="endpoint-card2">
                    <div className="d-flex dashboard-api-desc-text-head">
                      {["Code Snippet", "Results"].map((status2) => (
                        <div
                          key={status2}
                          className={`dashboard-text-endpoint pointer ${
                            selectedStatustype === status2
                              ? "tab-active-api"
                              : ""
                          }`}
                          onClick={() => handleStatusFilterChange2(status2)}
                        >
                          <div className="dashboard-api-desc-text">
                            {status2}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div>
                      <div
                        style={{
                          width: "50%",
                          color: "rgba(204, 204, 204, 1)",
                          display: "flex",
                          padding: "10px",
                        }}
                      >
                        <div style={{ width: "50%", display: "flex" }}>
                          <div style={{ width: "70%" }}>(Node.js) Axios</div>
                          <div>
                            <KeyboardArrowDownIcon fontSize="small" />
                          </div>
                        </div>
                        <div style={{ width: "50%", display: "flex" }}>
                          <div>
                            <ContentCopyIcon fontSize="small" />
                          </div>
                          <div>CopyCode</div>
                        </div>
                      </div>
                    </div>
                    <div style={{ color: "rgba(204, 204, 204, 1)" }}>
                      You will get your code here
                    </div>
                  </div>
                </div>
              </div>
            ) : selectedStatus === "Endpoints" ? (
              <div className="api-desc-overview">
                <div className="endpoint-card-main">
                  <div className="endpoint-card1">
                    <div
                      className=""
                      style={{ backgroundColor: "rgba(241, 246, 246, 1)" }}
                    >
                      <div
                        className="d-flex"
                        style={{
                          padding: "10px",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          className="d-flex"
                          style={{
                            width: "calc(100% - 120px)",
                          }}
                        >
                          <TextField
                            style={{ width: "100%" }}
                            className="api-input"
                            disabled
                            value="35.225.97.219/tmf-api/accountManagement/v4/billFormat/getAll"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <div style={{ position: "relative" }}>
                                    <div
                                      style={{
                                        fontSize: "18px",
                                        fontWeight: "600",
                                      }}
                                    >
                                      post
                                    </div>
                                    <Divider
                                      style={{
                                        position: "absolute",
                                        height: "calc(100% + 17px)",
                                        top: "-8.5px",
                                        right: -10,
                                      }}
                                      flexItem
                                      orientation="vertical"
                                    />
                                  </div>
                                </InputAdornment>
                              ),
                            }}
                          />
                        </div>
                        <div>
                          <Button
                            style={{ padding: "7.5px 30px" }}
                            variant="contained"
                            className="bg-att api-table-button"
                            onClick={() => handlePost()}
                          >
                            Post
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div
                        className="pointer"
                        style={{
                          padding: "15px 10px",
                          borderTop: `${
                            currentInputTab === "Keys"
                              ? "2px solid rgba(0, 168, 224, 1)"
                              : "2px solid white"
                          }`,
                        }}
                        onClick={() => setCurrentInputTab("Keys")}
                      >
                        <div
                          className="dashboard-api-desc-text"
                          style={{
                            color:
                              currentInputTab === "Keys"
                                ? "rgba(0, 168, 224, 1)"
                                : "",
                          }}
                        >
                          Keys
                        </div>
                      </div>
                      <div
                        className="pointer"
                        style={{
                          padding: "15px 10px",
                          borderTop: `${
                            currentInputTab === "Body"
                              ? "2px solid rgba(0, 168, 224, 1)"
                              : "2px solid white"
                          }`,
                        }}
                        onClick={() => setCurrentInputTab("Body")}
                      >
                        <div
                          className="dashboard-api-desc-text"
                          style={{
                            color:
                              currentInputTab === "Body"
                                ? "rgba(0, 168, 224, 1)"
                                : "",
                          }}
                        >
                          Body
                        </div>
                      </div>
                    </div>
                    {currentInputTab === "Keys" ? (
                      <div>
                        <div style={{ padding: "10px" }}>
                          <TextField
                            style={{ width: "50%" }}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <div style={{ position: "relative" }}>
                                    <div>Customer Id</div>
                                    {/* <Divider
                                    style={{
                                      position: "absolute",
                                      height: "calc(100% + 12px)",
                                      top: "-8.5px",
                                      right: -10,
                                    }}
                                    flexItem
                                    orientation="vertical"
                                  /> */}
                                  </div>
                                </InputAdornment>
                              ),
                            }}
                          />
                        </div>
                        <div style={{ padding: "10px" }}>
                          <TextField
                            style={{ width: "50%" }}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <div style={{ position: "relative" }}>
                                    <div>Customer Name</div>
                                    {/* <Divider
                                    style={{
                                      position: "absolute",
                                      height: "calc(100% + 10px)",
                                      top: "-4.5px",
                                      right: -10,
                                    }}
                                    flexItem
                                    orientation="vertical"
                                  /> */}
                                  </div>
                                </InputAdornment>
                              ),
                            }}
                          />
                        </div>
                      </div>
                    ) : currentInputTab === "Body" ? (
                      <div
                        className=""
                        style={{
                          padding: "10px",
                          height: "calc(100% - 56px - 63px)",
                        }}
                      >
                        <ReactCodeMirror className="input-editor" />
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="endpoint-right-line"></div>
                  <div className="endpoint-card2">
                    <div className="d-flex">
                      <div
                        className="pointer"
                        style={{
                          padding: "15px 10px",
                          borderBottom: `${
                            currentOutputTab === "Preview"
                              ? "2px solid rgba(0, 168, 224, 1)"
                              : "2px solid black"
                          }`,
                        }}
                        onClick={() => setCurrentOutputTab("Preview")}
                      >
                        <div
                          className="dashboard-api-desc-text"
                          style={{
                            color:
                              currentOutputTab === "Preview"
                                ? "rgba(0, 168, 224, 1)"
                                : "white",
                          }}
                        >
                          Preview
                        </div>
                      </div>
                      <div
                        className="pointer"
                        style={{
                          padding: "15px 10px",
                          borderBottom: `${
                            currentOutputTab === "Headers"
                              ? "2px solid rgba(0, 168, 224, 1)"
                              : "2px solid black"
                          }`,
                        }}
                        onClick={() => setCurrentOutputTab("Headers")}
                      >
                        <div
                          className="dashboard-api-desc-text"
                          style={{
                            color:
                              currentOutputTab === "Headers"
                                ? "rgba(0, 168, 224, 1)"
                                : "white",
                          }}
                        >
                          Headers
                        </div>
                      </div>
                    </div>
                    {currentOutputTab === "Headers" ? (
                      <div>
                        {employees && (
                          <Table>
                            <TableHead>
                              <TableRow>
                                <TableCell>Key</TableCell>
                                <TableCell>Value</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {employees &&
                                Object.entries(employees?.data).map(
                                  ([key, value]) => (
                                    <TableRow key={key}>
                                      <TableCell
                                        className=""
                                        style={{ color: "white" }}
                                      >
                                        {key}
                                      </TableCell>
                                      <TableCell
                                        className=""
                                        style={{ color: "white" }}
                                      >
                                        {value === true
                                          ? "True"
                                          : value === false
                                          ? "False"
                                          : value}
                                      </TableCell>
                                    </TableRow>
                                  )
                                )}
                            </TableBody>
                          </Table>
                        )}
                      </div>
                    ) : currentOutputTab === "Preview" ? (
                      <div
                        className=""
                        style={{
                          padding: "10px",
                          height: "calc(100% - 63px)",
                        }}
                      >
                        <ReactCodeMirror
                          className="input-editor editor2"
                          theme="dark"
                          value={
                            employees?.data
                              ? JSON.stringify(employees?.data, null, 2)
                              : ""
                          } // Convert JSON to string with indentation
                          options={{
                            mode: "javascript",
                            readOnly: true, // Make the editor read-only
                            autoFormatOnStart: true, // Auto-format lines on editor start
                            autoFormatOnModeChange: true, // Auto-format lines when mode changes
                            lineWrapping: true, // Enable line wrapping for long lines
                            indentUnit: 2, // Set the number of spaces for each indentation level
                            tabSize: 2, // Set the size of tabs
                          }}
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            ) : selectedStatus === "Support" ? (
              <div className="api-desc-overview">
                <div className="d-flex" style={{ height: "100%" }}>
                  <div className="api-desc-support">
                    <div className="api-support-title">Contact Us</div>
                    <div className="api-support-title2">
                      Feel free to email,
                    </div>
                    <div className="api-support-title3">
                      Questions? concerns? we want hear you!
                    </div>
                    <div className="api-support-text1 api-support-text-box">
                      <TextField
                        className="registration-partner-input"
                        placeholder="Tell us about your concerns?"
                      />
                    </div>
                    <div className="api-support-button">
                      <Button
                        variant="contained"
                        className="bg-att api-table-button2"
                        onClick={() => ""}
                      >
                        Send
                      </Button>
                    </div>
                  </div>
                  <div className="cat_right_line"></div>
                  <div className="api-desc-support1">
                    <div className="api-support-text1">Got Ideas,</div>
                    <div className="api-support-text2">Let's team up.</div>
                    <div className="api-support-title3">
                      <div className="d-flex" style={{ marginTop: "15px" }}>
                        <div>
                          <img
                            style={{ width: "20px" }}
                            src={chattousIcon}
                          ></img>
                        </div>
                        <div style={{ marginLeft: "10px" }}>
                          <div style={{ fontSize: "18px", fontWeight: "600" }}>
                            Chat to Us
                          </div>
                          <div style={{ fontSize: "16px" }}>
                            Our friendly team is here to help you
                          </div>
                          <div
                            style={{
                              fontSize: "14px",
                              color: "rgba(0, 148, 198, 1)",
                              fontWeight: "600",
                            }}
                          >
                            Chat Us
                          </div>
                        </div>
                      </div>
                      <div className="d-flex" style={{ marginTop: "15px" }}>
                        <div>
                          <img
                            style={{ width: "20px" }}
                            src={visitusIcon}
                          ></img>
                        </div>
                        <div style={{ marginLeft: "10px" }}>
                          <div style={{ fontSize: "18px", fontWeight: "600" }}>
                            Visit Us
                          </div>
                          <div style={{ fontSize: "16px" }}>
                            Opens 10am to 5 pm
                          </div>
                          <div
                            style={{
                              fontSize: "14px",
                              color: "rgba(0, 148, 198, 1)",
                              fontWeight: "600",
                            }}
                          >
                            City, State, IN - 000 000
                          </div>
                        </div>
                      </div>
                      <div className="d-flex" style={{ marginTop: "15px" }}>
                        <div>
                          <img style={{ width: "20px" }} src={callusIcon}></img>
                        </div>
                        <div style={{ marginLeft: "10px" }}>
                          <div style={{ fontSize: "18px", fontWeight: "600" }}>
                            Call Us
                          </div>
                          <div style={{ fontSize: "16px" }}>
                            tollfree 24 * 7
                          </div>
                          <div
                            style={{
                              fontSize: "14px",
                              color: "rgba(0, 148, 198, 1)",
                              fontWeight: "600",
                            }}
                          >
                            +0 (000) 123-4567
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : selectedStatus === "Review" ? (
              <div className="api-desc-overview">
                <div className="d-flex" style={{ height: "100%" }}>
                  <div className="api-desc-review">
                    <div
                      className="api-support-title"
                      style={{ color: "rgba(51, 51, 51, 1)", fontSize: "22px" }}
                    >
                      Rating Overview
                    </div>
                    <div
                      className="api-support-title2"
                      style={{ color: "rgba(0, 0, 0, 1)", fontSize: "32px" }}
                    >
                      4.8
                    </div>
                    <div className="d-flex" style={{ marginLeft: "20px" }}>
                      <Stack spacing={1}>
                        <Rating
                          name="half-rating"
                          defaultValue={4.5}
                          precision={0.5}
                        />
                      </Stack>
                    </div>
                    <div className="based-on-review">Based On 47 Reviews</div>
                    <div className="d-flex review_bar_content">
                      <div
                        style={{ color: "rgba(0, 0, 0, 1)", fontSize: "22px" }}
                      >
                        5
                      </div>
                      <div
                        className="review_bar"
                        style={{ width: "50%" }}
                      ></div>
                      <div
                        style={{
                          color: "rgba(117, 117, 117, 1)",
                          fontSize: "18px",
                        }}
                      >
                        16
                      </div>
                    </div>
                    <div className="d-flex review_bar_content">
                      <div
                        style={{ color: "rgba(0, 0, 0, 1)", fontSize: "22px" }}
                      >
                        4
                      </div>
                      <div
                        className="review_bar"
                        style={{ width: "40%" }}
                      ></div>
                      <div
                        style={{
                          color: "rgba(117, 117, 117, 1)",
                          fontSize: "18px",
                        }}
                      >
                        12
                      </div>
                    </div>
                    <div className="d-flex review_bar_content">
                      <div
                        style={{ color: "rgba(0, 0, 0, 1)", fontSize: "22px" }}
                      >
                        3
                      </div>
                      <div
                        className="review_bar"
                        style={{ width: "30%" }}
                      ></div>
                      <div
                        style={{
                          color: "rgba(117, 117, 117, 1)",
                          fontSize: "18px",
                        }}
                      >
                        10
                      </div>
                    </div>
                    <div className="d-flex review_bar_content">
                      <div
                        style={{ color: "rgba(0, 0, 0, 1)", fontSize: "22px" }}
                      >
                        2
                      </div>
                      <div
                        className="review_bar"
                        style={{ width: "20%" }}
                      ></div>
                      <div
                        style={{
                          color: "rgba(117, 117, 117, 1)",
                          fontSize: "18px",
                        }}
                      >
                        07
                      </div>
                    </div>
                    <div className="d-flex review_bar_content">
                      <div
                        style={{ color: "rgba(0, 0, 0, 1)", fontSize: "22px" }}
                      >
                        1
                      </div>
                      <div
                        className="review_bar"
                        style={{ width: "10%" }}
                      ></div>
                      <div
                        style={{
                          color: "rgba(117, 117, 117, 1)",
                          fontSize: "18px",
                        }}
                      >
                        02
                      </div>
                    </div>
                  </div>
                  <div className="cat_right_line"></div>
                  <div className="api-desc-review12">
                    <div className="api-desc-right-head">
                      <div
                        style={{
                          color: "rgba(51, 51, 51, 1)",
                          fontWeight: "600",
                        }}
                      >
                        Reviews (47)
                      </div>
                      <div
                        style={{
                          color: "rgba(0, 148, 198, 1)",
                          cursor: "pointer",
                        }}
                      >
                        View All
                      </div>
                    </div>
                    <div className="api-desc-right-main">
                      <div
                        className="api-desc-right-main-head"
                        style={{ justifycontent: "space-between" }}
                      >
                        <div className="d-flex" style={{ marginLeft: "20px" }}>
                          <Stack spacing={1}>
                            <Rating
                              name="half-rating"
                              defaultValue={4.5}
                              precision={0.5}
                            />
                          </Stack>
                        </div>
                        <div
                          style={{
                            color: "rgba(117, 117, 117, 1)",
                            cursor: "pointer",
                            marginRight: "20px",
                          }}
                        >
                          2 Months Ago
                        </div>
                      </div>
                      <div className="review-content-head-text">Windstream</div>
                      <div className="review-content-main-text">
                        Windstream Communications provides high-speed broadband
                        Internet, phone service and Digital TV packages to
                        residential customers as well as products and services
                        for small, medium and large businesses, and government
                        agencies.
                      </div>
                      <div className="review-content-main-text2">
                        Jerrald John
                      </div>
                    </div>
                    <div
                      className="api-desc-right-main"
                      style={{ marginTop: "10px" }}
                    >
                      <div
                        className="api-desc-right-main-head"
                        style={{ justifycontent: "space-between" }}
                      >
                        <div className="d-flex" style={{ marginLeft: "20px" }}>
                          <Stack spacing={1}>
                            <Rating
                              name="half-rating"
                              defaultValue={4.5}
                              precision={0.5}
                            />
                          </Stack>
                        </div>
                        <div
                          style={{
                            color: "rgba(117, 117, 117, 1)",
                            cursor: "pointer",
                            marginRight: "20px",
                          }}
                        >
                          2 Months Ago
                        </div>
                      </div>
                      <div className="review-content-head-text">Roger</div>
                      <div className="review-content-main-text">
                        Roger Technology provides phone service and Digital TV
                        packages to technicial customers as well as products and
                        services for small, medium and large businesses, and
                        government agencies.
                      </div>
                      <div className="review-content-main-text2">
                        Machado Jacob
                      </div>
                    </div>
                    <div
                      className="api-desc-right-main"
                      style={{ marginTop: "10px" }}
                    >
                      <div
                        className="api-desc-right-main-head"
                        style={{ justifycontent: "space-between" }}
                      >
                        <div className="d-flex" style={{ marginLeft: "20px" }}>
                          <Stack spacing={1}>
                            <Rating
                              name="half-rating"
                              defaultValue={4.5}
                              precision={0.5}
                            />
                          </Stack>
                        </div>
                        <div
                          style={{
                            color: "rgba(117, 117, 117, 1)",
                            cursor: "pointer",
                            marginRight: "20px",
                          }}
                        >
                          3 Months Ago
                        </div>
                      </div>
                      <div className="review-content-head-text">
                        Global technology
                      </div>
                      <div className="review-content-main-text">
                        Gobal technology provides high-speed broadband Internet.
                      </div>
                      <div className="review-content-main-text2">
                        Ashwin Anto
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiDesc;
