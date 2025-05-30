import { Row, Col } from "react-bootstrap";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPhp,
  FaBootstrap,
  FaLaravel,
  FaReact,
  FaPython,
  FaMarkdown,
} from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import {
  SiFlutter,
  SiMysql,
  SiFlask,
  SiFirebase,
  SiSqlite,
  SiXampp,
} from "react-icons/si";
import { FaDartLang } from "react-icons/fa6";

export default function TechStack() {
  return (
    <Row style={{ justifyContent: "center", marginBottom: 40 }}>
      <Col xs={4} md={2} sm={3} className="tech-icons">
        <FaHtml5 />
      </Col>
      <Col xs={4} md={2} sm={3} className="tech-icons">
        <FaCss3Alt />
      </Col>
      <Col xs={4} md={2} sm={3} className="tech-icons">
        <FaJsSquare />
      </Col>
      <Col xs={4} md={2} sm={3} className="tech-icons">
        <FaBootstrap />
      </Col>
      <Col xs={4} md={2} sm={3} className="tech-icons">
        <TbBrandCSharp />
      </Col>
      <Col xs={4} md={2} sm={3} className="tech-icons">
        <FaPython />
      </Col>
      <Col xs={4} md={2} sm={3} className="tech-icons">
        <SiFlask />
      </Col>
      <Col xs={4} md={2} sm={3} className="tech-icons">
        <SiFlutter />
      </Col>
      <Col xs={4} md={2} sm={3} className="tech-icons">
        <FaDartLang />
      </Col>
      <Col xs={4} md={2} sm={3} className="tech-icons">
        <FaPhp />
      </Col>
      <Col xs={4} md={2} sm={3} className="tech-icons">
        <FaLaravel />
      </Col>
      <Col xs={4} md={2} sm={3} className="tech-icons">
        <FaReact />
      </Col>
      <Col xs={4} md={2} sm={3} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} sm={3} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} sm={3} className="tech-icons">
        <SiSqlite />
      </Col>
      <Col xs={4} md={2} sm={3} className="tech-icons">
        <FaMarkdown />
      </Col>
      <Col xs={4} md={2} sm={3} className="tech-icons">
        <SiXampp />
      </Col>
    </Row>
  );
}
