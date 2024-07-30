import React, { useState } from "react";
import ResponsiveDrawer from "../../components/SideBar/SideBar";
import { useNavigate } from "react-router-dom";
import "./ApiPage.css";
import { Checkbox } from "@mui/material";
import arrowIcon from "../../assets/images/arrowcat.svg";
import clockIcon from "../../assets/images/clockcat.svg";
import upscaleIcon from "../../assets/images/upscale_cat.svg";
import codelabIcon from "../../assets/images/CodeLab.png";
import towerIcon from "../../assets/images/Towers.png";

import niraIcon from "../../assets/images/Nira.png";
import hexaIcon from "../../assets/images/HexLab.png";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const ApiPage = () => {
  const [drawerStatus, setDrawerStatus] = useState(true);
  const navigate = useNavigate();
  const updateDrawerStatus = () => {
    setDrawerStatus(!drawerStatus);
  };
  const Navnext = (id) => {
    const specificCard = catcard.find((card) => card.id === id);
    navigate("/apidesc", { state: { specificCard } });
  };

  const Apidesc = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Messaging APIs",
    },
    {
      id: 3,
      name: "Location APIs",
    },
    {
      id: 4,
      name: "Payment and Billing APIs ",
    },
    {
      id: 5,
      name: "Device APIs",
    },
    {
      id: 6,
      name: "Data and Connectivity APIs",
    },
    {
      id: 7,
      name: "IoT (Internet of Things) APIs",
    },
    {
      id: 8,
      name: "Identity and Authentication APIs",
    },
  ];

  const catcard = [
    {
      id: 1,
      logo: codelabIcon,
      title: "Verizon SMS API",
      update: "updated 4 days  ago",
      review: "(22 Reviews)",
      desc: "The Verizon SMS API is a set of tools and resources provided by Verizon to enable developers to integrate call management features into their applications. ",
      ms: "360 ms",
      upgrade: "9.5",
      arrow: "100%",
    },
    {
      id: 2,
      logo: towerIcon,
      title: "Verizon Call Management API",
      update: "updated 6 days  ago",
      review: "(18 Reviews)",
      desc: "The Verizon Call Management API is a set of tools and resources provided by Verizon to enable developers to integrate call management features into their applications. ",
      ms: "760 ms",
      upgrade: "9.9",
      arrow: "100%",
    },
    {
      id: 3,
      logo: niraIcon,
      title: "Verizon Location API",
      update: "updated 2 days  ago",
      review: "(21 Reviews)",
      desc: "Provides access to location-based services, allowing developers to retrieve the location of Verizon mobile devices.",
      ms: "740 ms",
      upgrade: "9.8",
      arrow: "100%",
    },
    {
      id: 4,
      logo: hexaIcon,
      title: "Verizon In-App Messaging API",
      update: "updated 6 days  ago",
      review: "(23 Reviews)",
      desc: "The Verizon In-App Messaging API is a set of tools and resources provided by Verizon to enable developers to integrate call management features into their applications. ",
      ms: "760 ms",
      upgrade: "9.9",
      arrow: "100%",
    },
  ];

  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (event, id) => {
    const { checked } = event.target;
    setCheckedItems((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
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
          {/* <CommonHeader breadCrumbFlow={breadCrumbFlow} /> */}
          <div className="d-flex">
            <div className="category-menu-container">
              <div className="category-head">Category</div>
              <hr></hr>
              <div className="category-menutitle">APIs Type</div>
              {Apidesc.map((item) => (
                <div className="Category-container" key={item.id}>
                  <Checkbox
                    onClick={handleCheckboxChange}
                    defaultunChecked
                    sx={{
                      "&.Mui-checked": {
                        color: "rgba(0, 168, 224, 1)",
                      },
                    }}
                  />
                  <div className="categorymenu-item">
                    <span>{item.name}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="cat_right_line"></div>
            <div>
              {catcard.map((item) => (
                <div
                  className="category-desc-card"
                  onClick={() => Navnext(item.id)}
                >
                  <div className="category-desc-left">
                    <div className="cat_left_logo">
                      <img
                        src={item.logo}
                        className="right-desc-img"
                        style={{ width: "44px", marginTop: "4px" }}
                      />
                    </div>
                    <div className="cat_left_text">
                      <div
                        style={{
                          fontWeight: "bold",
                          fontSize: "18px",
                          padding: "3px",
                          color: "rgba(51, 51, 51, 1)",
                        }}
                      >
                        {item.title}
                      </div>
                      <div className="d-flex" style={{ fontSize: "19px" }}>
                        <div style={{ padding: "3px" }}>
                          By{" "}
                          <span
                            style={{
                              color: "#f60923",
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
                        <div style={{ padding: "3px" }}>{item.update}</div>
                      </div>
                      <div className="d-flex">
                        <Stack spacing={1}>
                          <Rating
                            name="half-rating"
                            defaultValue={4.5}
                            precision={0.5}
                          />
                        </Stack>
                        <div>{item.review}</div>
                      </div>
                    </div>
                  </div>
                  <div className="cat_right_line"></div>
                  <div className="category-desc-right">
                    <div className="right-text">{item.desc}</div>
                    <div className="right-main-desc">
                      <div className="right-desc">
                        <img src={clockIcon} className="right-desc-img" />
                        {item.ms}
                      </div>
                      <div className="right-desc">
                        <img src={upscaleIcon} className="right-desc-img" />
                        {item.upgrade}
                      </div>
                      <div className="right-desc">
                        <img src={arrowIcon} className="right-desc-img" />
                        {item.arrow}
                      </div>
                      <div className="right-desc">
                        <img
                          src={arrowIcon}
                          className="right-desc-img"
                          style={{ width: "100px" }}
                        />
                        {item.status}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiPage;
