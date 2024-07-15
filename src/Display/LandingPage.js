import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Home from "./Home";
import "../Styles/LandingPage.css";

export default function LandingPage() {
  const [adminEmail, setAdminEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleLoginForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/adminLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ adminEmail: adminEmail, password: password }),
      });
      const json = await response.json();
      if (!json) {
        console.log("Please enter correct credentials");
      } else if (json.success) {
        console.log("HOME");
        navigate("/Home");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      style={{
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{}}>
        <Form
          className="p-5"
          style={{
            width: "30rem",
            border: "1px solid brown",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "white",
          }}
        >
          <h2 className="mb-5">Admin Login MusicPlayer</h2>

          <Form.Group
            className="inputContainer mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className="inputBox"
              type="email"
              placeholder="Enter email"
              value={adminEmail}
              onChange={(e) => setAdminEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group
            className="inputContainer mb-3"
            controlId="formBasicPassword"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="inputBox"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            onClick={handleLoginForm}
            style={{ width: "80%" }}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
