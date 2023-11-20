import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { RiLockPasswordLine } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { BiUser } from "react-icons/bi";
import { Row, Col } from "react-bootstrap";
const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [signupStatus, setSignupStatus] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${process.env.REACT_APP_API_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSignupStatus("Your in Neo!");
    } else {
      setSignupStatus("Not today Neo!");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container">
      <div className="header">
        <div className="underline"></div>
      </div>
      <Form onSubmit={handleFormSubmit}>
        <div className="inputs">
          <div className="input">
            <Form.Group
              className="input"
              style={{ display: "flex", alignItems: "center" }}
            >
              <BiUser style={{ margin: "0px 30px" }} />{" "}
              <Form.Control
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
              />
            </Form.Group>
          </div>
          <div className="input">
            <Form.Group
              className="input"
              style={{ display: "flex", alignItems: "center" }}
            >
              <CiMail style={{ margin: "0px 30px" }} />{" "}
              <Form.Control
                type="text"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
              />
            </Form.Group>
          </div>
          <div className="input">
            <Form.Group
              className="input"
              style={{ display: "flex", alignItems: "center" }}
            >
              <RiLockPasswordLine style={{ margin: "0px 30px" }} />
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
              />
            </Form.Group>
          </div>
          <Row className="justify-content-end">
            <Col xs="auto">
              <Button className="custom-button" type="submit">
                Sign Up
              </Button>
            </Col>
          </Row>
          {signupStatus && <Alert variant="success">{signupStatus}</Alert>}
        </div>
      </Form>
    </div>
  );
};

export default Signup;
