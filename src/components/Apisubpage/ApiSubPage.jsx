import React, { useState, useContext } from "react";
import ResponsiveDrawer from "../../components/SideBar/SideBar";
import Inprogress_icon from "../../assets/images/inprogressicon.svg";
import Verified_icon from "../../assets/images/Verifiedicon.svg";
import { useNavigate } from "react-router-dom";
import "./ApiSubPage.css";
import ServiceContext from "../../components/ServiceContext";
import arrowIcon from "../../assets/images/arrowcat.svg";
import clockIcon from "../../assets/images/clockcat.svg";
import upscaleIcon from "../../assets/images/upscale_cat.svg";

import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import ApiSubDesc from "../ApiSubDesc/ApiSubDesc.jsx";

const ApiSubPage = ({ currentStep, setIsVerified }) => {
  const [drawerStatus, setDrawerStatus] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null);
  const {
    handleCardVerified,
    catcard,
    catcard2,
    catcard3,
    handleSetSelectedCard,
  } = useContext(ServiceContext);

  const navigate = useNavigate();
  const updateDrawerStatus = () => {
    setDrawerStatus(!drawerStatus);
  };
  const emptyselected = () => {
    setSelectedCard(null);
  };

  const handleCardClick = (card, selcard) => {
    setSelectedCard(card);
    handleSetSelectedCard(selcard);
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
          {selectedCard ? (
            <ApiSubDesc
              specificCard={selectedCard}
              onVerifyClick={handleCardVerified}
              emptyselected={emptyselected}
            />
          ) : (
            <div className="d-flex" style={{ height: "69vh" }}>
              <div>
                {currentStep === 3
                  ? catcard.map((item) => (
                      <div
                        className="category-desc-card-1"
                        key={item.id}
                        onClick={() => handleCardClick(item, "cartcard1")}
                      >
                        <div className="category-desc-left">
                          <div className="cat_left_logo">
                            <img
                              src={item.logo}
                              className="right-desc-img"
                              style={{ width: "35px", marginTop: "4px" }}
                            />
                          </div>
                          <div className="cat_left_text">
                            <div
                              style={{
                                fontWeight: "bold",
                                fontSize: "15px",
                                padding: "3px",
                                color: "rgba(51, 51, 51, 1)",
                              }}
                            >
                              {item.title}
                            </div>
                            <div
                              className="d-flex"
                              style={{ fontSize: "14px" }}
                            >
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
                              <div style={{ padding: "3px" }}>
                                {item.update}
                              </div>
                            </div>
                            <div
                              className="d-flex"
                              style={{ fontSize: "12px", alignItems: "center" }}
                            >
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
                          <div className="right-text-1">{item.desc}</div>
                          <div className="right-main-desc">
                            <div className="right-desc-1">
                              <img src={clockIcon} className="right-desc-img" />
                              {item.ms}
                            </div>
                            <div className="right-desc-1">
                              <img
                                src={upscaleIcon}
                                className="right-desc-img"
                              />
                              {item.upgrade}
                            </div>
                            <div className="right-desc-1">
                              <img src={arrowIcon} className="right-desc-img" />
                              {item.arrow}
                            </div>
                            <div className="right-desc-1">
                              {item.status === "Inprogress" ? (
                                <>
                                  <img
                                    src={Inprogress_icon}
                                    className="right-desc-img1"
                                  />
                                  <span style={{ color: "#D43F3F" }}>
                                    {item.status}
                                  </span>
                                </>
                              ) : (
                                <>
                                  <img
                                    src={Verified_icon}
                                    className="right-desc-img1"
                                  />
                                  <span style={{ color: "#04BF00" }}>
                                    {item.status}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  : currentStep === 4
                  ? catcard2.map((item) => (
                      <div
                        className="category-desc-card-1"
                        key={item.id1}
                        onClick={() => handleCardClick(item, "cartcard2")}
                      >
                        <div className="category-desc-left">
                          <div className="cat_left_logo">
                            <img
                              src={item.logo}
                              className="right-desc-img"
                              style={{ width: "35px", marginTop: "4px" }}
                            />
                          </div>
                          <div className="cat_left_text">
                            <div
                              style={{
                                fontWeight: "bold",
                                fontSize: "15px",
                                padding: "3px",
                                color: "rgba(51, 51, 51, 1)",
                              }}
                            >
                              {item.title}
                            </div>
                            <div
                              className="d-flex"
                              style={{ fontSize: "14px" }}
                            >
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
                              <div style={{ padding: "3px" }}>
                                {item.update}
                              </div>
                            </div>
                            <div
                              className="d-flex"
                              style={{ fontSize: "12px", alignItems: "center" }}
                            >
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
                          <div className="right-text-1">{item.desc}</div>
                          <div className="right-main-desc">
                            <div className="right-desc-1">
                              <img src={clockIcon} className="right-desc-img" />
                              {item.ms}
                            </div>
                            <div className="right-desc-1">
                              <img
                                src={upscaleIcon}
                                className="right-desc-img"
                              />
                              {item.upgrade}
                            </div>
                            <div className="right-desc-1">
                              <img src={arrowIcon} className="right-desc-img" />
                              {item.arrow}
                            </div>
                            <div className="right-desc-1">
                              {item.status === "Inprogress" ? (
                                <>
                                  <img
                                    src={Inprogress_icon}
                                    className="right-desc-img1"
                                  />
                                  <span style={{ color: "#D43F3F" }}>
                                    {item.status}
                                  </span>
                                </>
                              ) : (
                                <>
                                  <img
                                    src={Verified_icon}
                                    className="right-desc-img1"
                                  />
                                  <span style={{ color: "#04BF00" }}>
                                    {item.status}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  : currentStep === 6
                  ? catcard3.map((item) => (
                      <div
                        className="category-desc-card-1"
                        key={item.id1}
                        onClick={() => handleCardClick(item, "cartcard3")}
                      >
                        <div className="category-desc-left">
                          <div className="cat_left_logo">
                            <img
                              src={item.logo}
                              className="right-desc-img"
                              style={{ width: "35px", marginTop: "4px" }}
                            />
                          </div>
                          <div className="cat_left_text">
                            <div
                              style={{
                                fontWeight: "bold",
                                fontSize: "15px",
                                padding: "3px",
                                color: "rgba(51, 51, 51, 1)",
                              }}
                            >
                              {item.title}
                            </div>
                            <div
                              className="d-flex"
                              style={{ fontSize: "14px" }}
                            >
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
                              <div style={{ padding: "3px" }}>
                                {item.update}
                              </div>
                            </div>
                            <div
                              className="d-flex"
                              style={{ fontSize: "12px", alignItems: "center" }}
                            >
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
                          <div className="right-text-1">{item.desc}</div>
                          <div className="right-main-desc">
                            <div className="right-desc-1">
                              <img src={clockIcon} className="right-desc-img" />
                              {item.ms}
                            </div>
                            <div className="right-desc-1">
                              <img
                                src={upscaleIcon}
                                className="right-desc-img"
                              />
                              {item.upgrade}
                            </div>
                            <div className="right-desc-1">
                              <img src={arrowIcon} className="right-desc-img" />
                              {item.arrow}
                            </div>
                            <div className="right-desc-1">
                              {item.status === "Inprogress" ? (
                                <>
                                  <img
                                    src={Inprogress_icon}
                                    className="right-desc-img1"
                                  />
                                  <span style={{ color: "#D43F3F" }}>
                                    {item.status}
                                  </span>
                                </>
                              ) : (
                                <>
                                  <img
                                    src={Verified_icon}
                                    className="right-desc-img1"
                                  />
                                  <span style={{ color: "#04BF00" }}>
                                    {item.status}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  : ""}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApiSubPage;
