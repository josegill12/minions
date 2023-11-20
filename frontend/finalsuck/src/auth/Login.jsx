import React, {useState}from 'react'
import { CiMail } from 'react-icons/ci';
import { RiLockPasswordLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Col, Button, Alert } from 'react-bootstrap';

const Login = () => {
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
  
    // const [showModal, setShowModal] = useState(false);
    const [loginStatus, setLoginStatus] = useState(null);
    const navigate = useNavigate(); 
  
    const handleFormSubmit = async (e) => {
      e.preventDefault();
  
      const { email, password } = formData;
  
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (response.ok) {
          const data = await response.json();
  
          if (data.name) {
            localStorage.setItem('currentUser', JSON.stringify(data))
            navigate("/home");
          }
        } else {
          const errorData = await response.json();
          setLoginStatus(errorData.message);
          // setShowModal(true);
        }
      } catch (error) {
        setLoginStatus("Login failed");
        // setShowModal(true);
      }
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    // const closeModal = () => {
    //   setShowModal(false);
    // };
  
    return (
  <div className="container">
    <div className="header d-flex justify-content-end">
      <div className="underline"></div>
      <h3 style={{ color: 'white', textShadow: '3px 3px 4px rgba(0, 0, 0, 0.5)' }}>Join Today.</h3>
    </div>
  
        <div className="inputs">
        <Form>
    <Row className="justify-content-end">
      <Col xs="auto">
        <Form.Group className="input" style={{ display: "flex", alignItems: "center" }}>
          <CiMail style={{ margin: "0px 20px", backgroundColor: "rgba(255, 255, 255, 0.5)", fontSize: "24px",borderRadius: "30%" }} />
          <Form.Control
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="short-input" 
            style={{backgroundColor: "rgba(255, 255, 255, 0.7)"}}
          />
        </Form.Group>
      </Col>
    </Row>
    <Row className="justify-content-end mt-2">
      <Col xs="auto">
        <Form.Group className="input" style={{ display: "flex", alignItems: "center" }}>
          <RiLockPasswordLine style={{ margin: "0px 20px", backgroundColor: "rgba(255, 255, 255, 0.5)", fontSize: "24px", borderRadius: "30%"  }} />
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="short-input" 
            style={{backgroundColor: "rgba(255, 255, 255, 0.7)"}}
          />
        </Form.Group>
      </Col>
    </Row>
    <Row className="justify-content-center mt-2">
      <Col xs="auto">
        <Button type="submit" onClick={handleFormSubmit}className="custom-button">
          Login
        </Button>
      </Col>
    </Row>
  </Form>
  
          {loginStatus && (
            <Alert variant="danger">
              {loginStatus}
            </Alert>
          )}
        </div>
      </div>
    );
  };

export default Login