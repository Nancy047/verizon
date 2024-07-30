import React, { useState } from "react";
import "./progressmenu.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge, Divider } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Logout, NavigateNext, NavigateBefore } from "@mui/icons-material";
import CheckIcon from "@mui/icons-material/Check";

const ProgressMenu = ({
  progressmenuitems,
  selectedSubMenu,
  currentStep,
  activeCardId,
  handleCardClick,
  isExpanded,
  onExpandChange,
}) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleExpandClick = () => {
    onExpandChange(!isExpanded);
  };
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

  const renderCircle = (index) => {
    if (activeCardId === index + 1) {
      return (
        <div className="level-layer">
          <div className="registration-tab-numberCircle2 active">
            {index + 1}
          </div>
        </div>
      );
    } else if (activeCardId > index + 1) {
      return (
        <div className="level-layer">
          <div className="registration-tab-numberCircle2 completed">
            <CheckIcon />
          </div>
        </div>
      );
    } else {
      return (
        <div className="level-layer">
          <div className="registration-tab-numberCircle2">{index + 1}</div>
        </div>
      );
    }
  };

  return (
    <div className="submenu-container" style={{ width: "100%" }}>
      {isExpanded ? (
        <div className="toggle_switch_main_side" onClick={handleExpandClick}>
          <NavigateBefore className="toggle_switch_side" />
        </div>
      ) : (
        <div className="toggle_switch_main_side" onClick={handleExpandClick}>
          <NavigateNext className="toggle_switch_side" />
        </div>
      )}

      <div className="submenu-menucontent">
        {isExpanded && (
          <>
            {progressmenuitems.map((label, index) => {
              return (
                <div className="d-flex" style={{ width: "100%" }}>
                  <div style={{ width: "70%" }}>
                    <div
                      style={{
                        border: "1px solid #cccccc",
                        margin: "10px 20px",
                        padding: "10px",
                        borderColor:
                          activeCardId === index + 1 ? "red" : "black",
                        color: activeCardId === index + 1 ? "" : "grey",
                      }}
                      className="d-flex progress-main-menu"
                      onClick={() => handleCardClick(index + 1)}
                    >
                      <div className="pr-1">
                        <img
                          // className={`submenu-${label.keybase}`}
                          src={
                            activeCardId === label.id
                              ? label.image
                              : label.image1
                          }
                        />
                      </div>

                      <div>
                        <div className="submenu-menutitle d-flex justify-between">
                          <div>{label.name}</div>
                        </div>
                        <div className="submenu-menudescription">
                          {label.description}
                        </div>
                      </div>
                    </div>
                  </div>
                  {index < currentStep && (
                    <div
                      className="text-center"
                      style={{
                        width: "30%",
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Divider
                        flexItem
                        orientation="vertical"
                        style={{
                          height: "100%",
                          position: "absolute",
                          left: "50%",
                        }}
                      />
                      {renderCircle(index)}
                    </div>
                  )}
                  {index >= currentStep && (
                    <div
                      className="text-center"
                      style={{
                        width: "30%",
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Divider
                        flexItem
                        orientation="vertical"
                        style={{
                          height: "100%",
                          position: "absolute",
                          left: "50%",
                          border:
                            activeCardId === 1
                              ? "1px dashed rgba(204, 204, 204, 1)"
                              : activeCardId === 8
                              ? "1px dashed rgba(246, 28, 35, 1)"

                              : "1px dashed rgba(204, 204, 204, 1)",
                        }}
                      />
                      <div className="level-layer">
                        <div
                          className={`registration-tab-numberCircle2 ${
                            activeCardId >= index + 1 ? "completed" : ""
                          }`}
                        >
                          {activeCardId === 8 ? (
                            <CheckIcon />
                          ) : activeCardId === index + 1 ? (
                            <CheckIcon />
                          ) : (
                            index + 1
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </>
        )}
        <div className="submenu-toggle" onClick={handleExpandClick}>
          {isExpanded ? (
            ""
          ) : (
            <>
              {progressmenuitems.map((label, index) => {
                return (
                  <div
                    className="d-flex"
                    style={{ width: "100%", height: "118px" }}
                  >
                    {/* <div style={{ width: "70%" }}>
                      <div
                        style={{
                          border: "1px solid #cccccc",
                          margin: "10px 20px",
                          padding: "10px",
                          backgroundColor:
                            activeCardId === index + 1
                              ? "background": rgba(246, 28, 35, 1);
"
                              : "transparent",
                          color:
                            activeCardId === index + 1
                              ? "rgba(255, 255, 255, 1)"
                              : "",
                        }}
                        className="d-flex progress-main-menu"
                        onClick={() => handleCardClick(index + 1)}
                      >
                        <div className="pr-1">
                          <img
                            // className={`submenu-${label.keybase}`}
                            src={
                              activeCardId === label.id
                                ? label.image2
                                : label.image
                            }
                          />
                        </div>

                        <div>
                          <div className="submenu-menutitle d-flex justify-between">
                            <div>{label.name}</div>
                          </div>
                          <div className="submenu-menudescription">
                            {label.description}
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {index < currentStep && (
                      <div
                        className="text-center"
                        style={{
                          width: "30%",
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Divider
                          flexItem
                          orientation="vertical"
                          style={{
                            height: "100%",
                            position: "absolute",
                            left: "50%",
                            border: "1px solid rgba(246, 28, 35, 1)",
                          }}
                        />
                        {renderCircle(index)}
                      </div>
                    )}
                    {index >= currentStep && (
                      <div
                        className="text-center"
                        style={{
                          width: "30%",
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Divider
                          flexItem
                          orientation="vertical"
                          style={{
                            height: "100%",
                            position: "absolute",
                            left: "50%",
                            border:
                              activeCardId === 1
                                ? "1px dashed rgba(204, 204, 204, 1)"
                                : activeCardId === 8
                                ? "1px dashed rgba(246, 28, 35, 1)"
                                : "1px dashed rgba(204, 204, 204, 1)",
                          }}
                        />
                        <div className="level-layer">
                          <div
                            className={`registration-tab-numberCircle2 ${
                              activeCardId >= index + 1 ? "completed" : ""
                            }`}
                          >
                            {activeCardId === 8 ? (
                              <CheckIcon />
                            ) : activeCardId === index + 1 ? (
                              <CheckIcon />
                            ) : (
                              index + 1
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressMenu;  
