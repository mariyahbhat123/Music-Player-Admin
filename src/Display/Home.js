import React from "react";
import AdminNavbar from "../Components/AdminNavbar";
import AdminSidebar from "../Components/AdminSidebar";
import AddMusic from "../Components/AddMusic";
import { useSelector } from "react-redux";

export default function Home() {
  const toggleAddMusic = useSelector(
    (state) => state.addMusicToggle.addMusicToggle
  );
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <AdminSidebar />
        </div>
        <div className="w-100">
          <div>
            <AdminNavbar />
          </div>
          {toggleAddMusic === true ? (
            <div>
              <AddMusic />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
