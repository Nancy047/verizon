import React, { useRef, useState } from "react";
import "./CommonHeader.css";
import {
  Box,
  Breadcrumbs,
  IconButton,
  InputAdornment,
  Link,
  ListItemIcon,
  Menu,
  MenuItem,
  Popper,
  TextField,
  Typography,
} from "@mui/material";
import { Logout, NavigateNext, Search } from "@mui/icons-material";
import { Stack, width } from "@mui/system";
import aboutIcon from "../../assets/images/question.svg";
import notificationIcon from "../../assets/images/bell.svg";
import SettingIcon from "../../assets/images/setting.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearService } from "../../dataSlice";

const CommonHeader = ({ breadCrumbFlow }) => {
  // const screenHeight = window.innerHeight;
  const [anchorEl, setAnchorEl] = useState(null);
  const [isPopperVisible, setPopperVisible] = useState(false);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [anchorElPopper, setAnchorElPopper] = useState(null);

  const handleOpenPopper = (event) => {
    setAnchorElPopper(anchorEl ? null : event.currentTarget);
  };

  const openPopper = Boolean(anchorEl);
  const PopperId = open ? "simple-popper" : undefined;

  // Your Popper configuration

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    setAnchorEl(null);
    navigate("/login");
    dispatch(clearService());
    sessionStorage.clear();
  };

  return (
    <div className="common-header-container">
      <div className="common-header-card">
        <div className="common-header-headitem d-flex justify-between">
          <div className="" style={{ width: "40%" }}>
            <TextField
              className="common-header-search"
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
          <div className="d-flex">
            <div className="">
              <IconButton
                // onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                // aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                // aria-expanded={open ? "true" : undefined}
              >
                <img src={aboutIcon} className="pointer" />
              </IconButton>
            </div>
            <div className="">
              <IconButton
                onClick={handleOpenPopper}
                size="small"
                sx={{ ml: 2 }}
                aria-haspopup="true"
              >
                <img src={notificationIcon} className="pointer" />
              </IconButton>
              {/* <Popper
                sx={{ zIndex: 1200 }}
                id={PopperId}
                open={openPopper}
                anchorEl={anchorElPopper}
              >
                <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
                  The content of the Popper.
                </Box>
              </Popper> */}
            </div>
            <div>
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                // aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                // aria-expanded={open ? "true" : undefined}
              >
                <img src={SettingIcon} className="pointer" />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "lock-button",
                  role: "listbox",
                }}
              >
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
        <div className="py-1">
          <Stack spacing={2}>
            <Breadcrumbs
              separator={<NavigateNext fontSize="small" />}
              aria-label="breadcrumb"
            >
              {breadCrumbFlow &&
                breadCrumbFlow.map((flow, index) => {
                  return (
                    <Typography
                      key={index}
                      color={
                        index + 1 === breadCrumbFlow.length
                          ? "text.primary"
                          : "inherit"
                      }
                    >
                      {flow.name}
                    </Typography>
                  );
                })}
            </Breadcrumbs>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default CommonHeader;
