import "../pages/about.css";
import { Row, Col } from "react-bootstrap";
import { SiMacos, SiXcode, SiAndroidstudio } from "react-icons/si";
import { FaWindows, FaNpm, FaFigma, FaCodepen, FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { RiNotionFill } from "react-icons/ri";

export default function ToolsStack() {
  return (
    <Row style={{ justifyContent: "center", marginBottom: 40 }}>
      <Col xs={4} md={2} sm={3} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} sm={3} className="tech-icons">
        <FaWindows />
      </Col>
      <Col xs={4} md={2} sm={3} className="tech-icons">
        <FaNpm />
      </Col>
      <Col xs={4} md={2} sm={3} className="tech-icons">
        <VscVscode />
      </Col>
      <Col xs={4} md={2} sm={3} className="tech-icons">
        <RiNotionFill />
      </Col>
      <Col xs={4} md={2} sm={3} className="tech-icons">
        <FaFigma />
      </Col>
      <Col xs={4} md={2} sm={3} className="tech-icons">
        <SiXcode />
      </Col>
      <Col xs={4} md={2} sm={3} className="tech-icons">
        <SiAndroidstudio />
      </Col>
      <Col xs={4} md={2} sm={3} className="tech-icons">
        <FaCodepen />
      </Col>
      <Col xs={4} md={2} sm={3} className="tech-icons">
        <FaGithub />
      </Col>
    </Row>
  );
}
