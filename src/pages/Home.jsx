import "./home.css";
import ProfileImg from "../assets/ProfilePic.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ParticlesBg from "../components/Particles";

export default function Home() {
  return (
    <Container fluid className="home-container">
      <ParticlesBg />
      <Container className="home-content">
        <Row>
          <Col className="home-header">
            <h1 className="heading">Hi There 👋</h1>
            <h2 className="heading-name">
              I'M <span className="main-colour">THALIA EVANS</span>
            </h2>
            <h3 className="main-colour" style={{ padding: 50 }}>
              Software Engineering Student
            </h3>
          </Col>
          <Col className="home-header-img">
            <img
              src={ProfileImg}
              alt="Profile Picture"
              className="header-img"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
