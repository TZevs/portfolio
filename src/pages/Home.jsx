import "./home.css";
import ProfileImg from "../assets/ProfilePic.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ParticlesBg from "../components/Particles";

export default function Home() {
  return (
    <>
      <Container fluid className="home-container">
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
      <Container fluid className="home-about-container">
        <Container className="home-content">
          <Row>
            <Col sm={7} className="home-header">
              <h1 className="about-heading">
                LET ME <span className="main-colour">INTRODUCE</span> MYSELF
              </h1>
              <div className="home-about-section">
                <p className="home-about">
                  I am passionate about software developing and programming,
                  despite how challenging it can get.
                </p>
                <p>I am confident in languages like C# and JavaScript.</p>
                <p>
                  My current interests are in developing Web applications using
                  different Frameworks.
                </p>
              </div>
            </Col>
            <Col className="home-bottom-img"></Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
