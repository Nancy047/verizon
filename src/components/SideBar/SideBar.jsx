import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./SideBar.css";
import ATT_LOGO from "../../assets/images/AT&T_logo_2016 3.svg";
import { Avatar, Badge } from "@mui/material";
import Service_Icon_Active from "../../assets/images/DiscoveryActive.svg";
import Service_Icon from "../../assets/images/DiscoveryInactive.svg";
import Home_Icon from "../../assets/images/HomeInactive.svg";
import Home_Icon_Active from "../../assets/images/HomeActive.svg";
import Tracking_Icon from "../../assets/images/BagInactive.svg";
import Tracking_Icon_Active from "../../assets/images/BagActive.svg";
import Billing_Icon from "../../assets/images/WalletInactive.svg";
import Reports_Icon from "../../assets/images/PaperInactive.svg";
import Support_Icon from "../../assets/images/WorkInactive.svg";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import v_logo from "../../assets/images/verzionLogo.png"

const drawerWidth = 90;
function ResponsiveDrawer(props) {
  const navigate = useNavigate();
  const getUser = sessionStorage.getItem("username");
  const getRole = sessionStorage.getItem("role");
  const storedData = useSelector((state) => state.data);
  const selectedServiceCount = storedData?.selected_services
    ? storedData?.selected_services?.length
    : 0;
  const sideBarPages = [
    // {
    //   name: "Dashboard",
    //   activeicon: Home_Icon_Active,
    //   icon: Home_Icon,
    //   path: "/dashboard",
    // },
    // {
    //   name: "Service",
    //   icon: Service_Icon,s
    //   activeicon: Service_Icon_Active,
    //   path: "/services/att5g",
    // },
    // {
    //   name: "Order",
    //   icon: Tracking_Icon,
    //   activeicon: Tracking_Icon_Active,
    //   path: "/order/requestquote",
    // },
    // {
    //   name: "Billing",
    //   icon: Billing_Icon,
    //   activeicon: Billing_Icon,
    // },
    // {
    //   name: "Reports",
    //   icon: Reports_Icon,
    //   activeicon: Reports_Icon,
    // },
    // {
    //   name: "Support",
    //   icon: Support_Icon,
    //   activeicon: Support_Icon,
    // },
  ];
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    props.updateDrawerStatus();
  };

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
  const handleNavigate = (path) => {
    if (path) {
      navigate(path);
    }
  };
  useEffect(() => {
    if (getUser && (getUser === "user" || getUser === "admin")) {
      if (
        getUser &&
        getUser === "admin" &&
        (props?.currentTab === "none" ||
          props?.currentTab === "Service" ||
          props?.currentTab === "Order")
      ) {
        navigate("/dashboard");
      }
    } else {
      navigate("/login");
    }
  }, []);

  const drawer = (
    <div className="sidebar-container">
      <div className="sidebar-top">
        <div className="sidebar-head">
          <img className="siderbar-logo" src={v_logo} />
        </div>
        <Divider style={{ backgroundColor: "rgba(102, 102, 102, 1)" }} />
        <div className="sidebar-content">
          {sideBarPages.map((page) => {
            if (
              !(
                getUser === "admin" &&
                (page?.name === "none" ||
                  page?.name === "Service" ||
                  page?.name === "Order")
              )
            ) {
              return (
                <div
                  className={`${
                    props?.currentTab?.toLowerCase() ===
                    page?.name?.toLowerCase()
                      ? "sidebar-item-selected"
                      : ``
                  } text-center sidebar-item pointer`}
                  onClick={() => handleNavigate(page?.path)}
                >
                  <div className="d-flex justify-center mb-05">
                    {page?.name === "Order" && selectedServiceCount ? (
                      <Badge badgeContent={selectedServiceCount} color="error">
                        <img
                          className="sidebar-option_icon"
                          src={
                            props?.currentTab?.toLowerCase() ===
                            page?.name?.toLowerCase()
                              ? page.activeicon
                              : page.icon
                          }
                        />
                      </Badge>
                    ) : (
                      <img
                        className="sidebar-option_icon"
                        src={
                          props?.currentTab?.toLowerCase() ===
                          page?.name?.toLowerCase()
                            ? page.activeicon
                            : page.icon
                        }
                      />
                    )}
                  </div>
                  <div
                    className={
                      props?.currentTab?.toLowerCase() ===
                      page?.name?.toLowerCase()
                        ? `sidebar-active sidebar-text`
                        : `sidebar-text`
                    }
                  >
                    {page.name}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="sidebar-bottom">
        <Avatar className="siderbar-avatar" {...stringAvatar("Ashwin Anto")} />
      </div>
    </div>
  );

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          display: { sm: "none" },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {props.currentTab}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
