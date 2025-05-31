import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";

export default function CustomNavbar() {
  const [expand, setExpand] = useState(false);
  const location = useLocation();
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // navColour set to true when user scrolls 20px vertically.
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    };
    // Attaches the handleScroll function to the scroll event.
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup function. Removes the scoll event listener.
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expanded={expand}
      expand="md"
      fixed="top"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="logo">
          TzE
        </Navbar.Brand>
        <Navbar.Toggle
          className="custom-toggle"
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpand(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              onClick={() => setExpand(false)}
              className={`custom-link ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <AiOutlineHome style={{ marginBottom: 3.5 }} /> Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              onClick={() => setExpand(false)}
              className={`custom-link ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              <AiOutlineUser style={{ marginBottom: 3.5 }} /> About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/projects"
              onClick={() => setExpand(false)}
              className={`custom-link ${
                location.pathname === "/projects" ? "active" : ""
              }`}
            >
              <AiOutlineFundProjectionScreen style={{ marginBottom: 3.5 }} />{" "}
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
