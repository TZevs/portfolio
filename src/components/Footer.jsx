import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-col">
          <h6 style={{ marginBottom: 0 }}>Created by Thalia Evans</h6>
        </Col>
        <Col md="4" className="footer-col">
          <h6
            style={{ textAlign: "center", marginBottom: 0, fontWeight: "300" }}
          >
            Copyright © {year}
          </h6>
        </Col>
        <Col md="4" className="footer-col">
          <ul className="footer-icon-list">
            <li className="footer-icon-item">
              <a
                href="https://github.com/TZevs"
                target="_blank"
                className="footer-icons "
              >
                <AiOutlineGithub />
              </a>
            </li>
            <li className="footer-icon-item">
              <a
                href="https://www.linkedin.com/in/thalia-evans-935516314/"
                target="_blank"
                className="footer-icons "
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
