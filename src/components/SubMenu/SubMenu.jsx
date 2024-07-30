import React from "react";
import "./SubMenu.css";
import { ChevronRightOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge } from "@mui/material";

const SubMenu = ({ subMenuItems, selectedSubMenu }) => {
  const navigate = useNavigate();
  const storedData = useSelector((state) => state.data);
  const selectedServiceCount = storedData?.selected_services
    ? storedData?.selected_services?.length
    : 0;
  const handleNavigate = (path) => {
    if (path) {
      navigate(path);
    }
  };
  return (
    <div className="submenu-container">
      <div className="submenu-head">Services</div>
      {subMenuItems.map((service, i) => {
        return (
          <div
            className={`pointer ${
              i + 1 === subMenuItems.length
                ? "submenu-item-last"
                : "submenu-item"
            } d-flex ${
              selectedSubMenu === service.keybase ? "submenu-active" : ""
            }`}
            onClick={() => handleNavigate(service.path)}
          >
            <div className="submenu-item-image">
              <Badge
                color="error"
                variant="dot"
                invisible={
                  selectedServiceCount && service.name === "Request Quote"
                    ? false
                    : true
                }
              >
                <img
                  className={`submenu-${service.keybase}`}
                  src={service.image}
                />
              </Badge>
            </div>
            <div className="submenu-menucontent">
              <div className="submenu-menutitle d-flex justify-between">
                <div>{service.name}</div>
                <div>
                  <ChevronRightOutlined />
                </div>
              </div>
              <div className="submenu-menudescription">
                {service.description}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SubMenu;
