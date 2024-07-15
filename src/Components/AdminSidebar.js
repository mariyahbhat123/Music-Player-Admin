import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Button from "react-bootstrap/esm/Button";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import { useDispatch, useSelector } from "react-redux";
import {
  addMusicToggleOff,
  addMusicToggleOn,
} from "../Redux/Slices/ToggleAddMusic";

export default function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapse = () => {
    if (collapsed === true) {
      setCollapsed(false);
    } else {
      setCollapsed(true);
    }
  };
  const toggleAddMusic = useSelector(
    (state) => state.addMusicToggle.addMusicToggle
  );

  const dispatch = useDispatch();
  const handleToggleAddMusic = () => {
    if (toggleAddMusic === true) {
      dispatch(addMusicToggleOff());
    } else {
      dispatch(addMusicToggleOn());
    }
  };
  return (
    <div>
      <Sidebar collapsed={collapsed}>
        <Menu>
          <MenuItem icon={<MenuIcon />} onClick={handleCollapse}>
            Admin
          </MenuItem>
        </Menu>
        <Menu>
          <SubMenu icon={<DashboardIcon />} label="Dashboard">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>

          <MenuItem icon={<AudiotrackIcon />} onClick={handleToggleAddMusic}>
            {" "}
            Add Music{" "}
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}
