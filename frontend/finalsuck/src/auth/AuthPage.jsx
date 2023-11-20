import React, { useState } from "react";
import { Button, Modal, Row, Col, Container } from "react-bootstrap";
import Signup from "./Signup";
import Login from "./Login";



const AuthPage = () => {
  const [isSignupVisible, setSignupVisible] = useState(false);

  const toggleSignupForm = () => {
    setSignupVisible(!isSignupVisible);
  };

  return (
    <div className="firstpage">
      <Container>
        <h1
          style={{
            color: "white",
            textShadow: "3px 3px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
            Pick your Paradise
        </h1>
        <h3
          style={{
            color: "white",
            textShadow: "3px 3px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
            Plan your next trip with us!
        </h3>

        <Row className="justify-content-end mt-1">
          <Col xs={12} md={6} className="text-md-center">
            {!isSignupVisible && (
              <div className="text-center">
                   <Login />
                <Button className="custom-button mt-1" onClick={toggleSignupForm}>
                  Sign Up
                </Button>
              </div>
            )}
          </Col>
        </Row>

        <Modal show={isSignupVisible} onHide={toggleSignupForm} centered>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Signup />
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default AuthPage;