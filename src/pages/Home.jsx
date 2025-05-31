import ProfileImg from "../assets/ProfilePic.jpg";
import CatImg from "../assets/Cat.jpeg";
import { Container, Row, Col, Image } from "react-bootstrap";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Container fluid className="home-container">
        <Container className="home-content">
          <Row>
            <Col xs={12} md={6} className="home-header">
              <h1 className="heading">Hi There 👋</h1>
              <h2 className="heading-name">
                I'M <span className="main-colour">THALIA EVANS</span>
              </h2>
              <h3 className="main-colour heading-role" style={{ padding: 50 }}>
                Software Engineering Student
              </h3>
            </Col>
            <Col xs={12} md={6} className="home-img">
              <Image
                src={ProfileImg}
                alt="Profile Picture"
                className="header-img"
                roundedCircle
                fluid
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-container">
        <Container className="home-about-section">
          <Row>
            <Col md={8} className="home-about-header">
              <h1 className="about-heading">
                LET ME <span className="main-colour">INTRODUCE</span> MYSELF
              </h1>
              <div className="home-about-content">
                <p>
                  I am{" "}
                  <span className="main-colour about-emphasis">Passionate</span>{" "}
                  about software development and programming.
                  <br />
                  Despite and because of the challenges I face.
                </p>
                <p>
                  I am confident in languages like{" "}
                  <span className="main-colour about-emphasis">
                    C# and JavaScript.
                  </span>
                </p>
                <p>
                  My current interests are in developing{" "}
                  <span className="main-colour about-emphasis">
                    Web Applications
                  </span>{" "}
                  using different frameworks, such as{" "}
                  <span className="main-colour about-emphasis">
                    React, Node.js, and Next.js.
                  </span>
                </p>
                <p>
                  I use the courses in{" "}
                  <span className="main-colour about-emphasis">
                    LinkedIn Library
                  </span>{" "}
                  to expand my knowledge and skill.
                </p>
                <p>
                  Soon, I plan on learning more about{" "}
                  <span className="main-colour about-emphasis">
                    Machine Learning Algorithms
                  </span>{" "}
                  using Python with libraries like TensorFlow and Keras.
                </p>
              </div>
            </Col>
            <Col md={4} className="home-img">
              <Image
                src={CatImg}
                roundedCircle
                fluid
                className="header-about-img"
              />
            </Col>
          </Row>
          <Row>
            <Col className="home-about-contact-col">
              <h2>FIND ME ON</h2>
              <p>
                Feel free to <span className="main-colour">connect</span> with
                me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/TZevs"
                    target="_blank"
                    className="home-social-icons"
                  >
                    <AiOutlineGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/thalia-evans-935516314/"
                    target="_blank"
                    className="home-social-icons"
                  >
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
