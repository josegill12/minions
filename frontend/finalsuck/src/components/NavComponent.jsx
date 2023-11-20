import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Nav} from "react-bootstrap";
import { TbLogout2 } from "react-icons/tb";
import { LuPalmtree } from "react-icons/lu";
import { AiOutlineHome } from "react-icons/ai";

const NavComponent = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  }

  return (
    <Navbar className="navbar" expand="lg" >
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link onClick={() => navigate('/Home')}><AiOutlineHome/> Home</Nav.Link>
        <Nav.Link onClick={() => navigate('/trips')}><LuPalmtree /> My Trips</Nav.Link>
        <Nav.Link onClick={handleLogout}><TbLogout2 /> Logout</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
};

export default NavComponent;
