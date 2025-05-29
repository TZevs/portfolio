import "./about.css";
import Container from "react-bootstrap/Container";
import { FiArrowRightCircle } from "react-icons/fi";
import TechStack from "../components/TechStack";
import ToolsStack from "../components/ToolsStack";
import GitHubCalendar from "react-github-calendar";

export default function About() {
  return (
    <>
      <Container className="about-container">
        <Container className="about-content">
          <h1>
            Who I <span className="main-colour">Am</span>
          </h1>
          <p>
            Hello Everyone, I am{" "}
            <span className="main-colour">Thalia Evans</span> from{" "}
            <span className="main-colour">Sheffield, England.</span>
          </p>
          <p>
            I have just finished my 2nd year as a{" "}
            <span className="main-colour">software engineering student</span> at
            Sheffield Hallam University.
          </p>
          <p>
            I completed an{" "}
            <span className="main-colour">Extended National Diploma in IT</span>{" "}
            at The Sheffield College, with a triple distinction (DDD).
          </p>
          <p>
            My <span className="main-colour">hobbies</span> outside of
            programming:
          </p>
          <ul style={{ paddingLeft: 0 }}>
            <li className="about-hobby">
              <FiArrowRightCircle
                className="main-colour"
                style={{ marginBottom: 3.5, marginRight: 3 }}
              />
              Art - Sketching, 3D models, Painting
            </li>
            <li className="about-hobby">
              <FiArrowRightCircle
                className="main-colour"
                style={{ marginBottom: 3.5, marginRight: 3 }}
              />
              Reading - Primarily Fantasy
            </li>
            <li className="about-hobby">
              <FiArrowRightCircle
                className="main-colour"
                style={{ marginBottom: 3.5, marginRight: 3 }}
              />
              Sport - Football, Swimming, Running
            </li>
          </ul>
        </Container>

        <Container className="stack-container">
          <h2 style={{ textAlign: "center" }}>
            Professional <span className="main-colour">Skillset</span>
          </h2>
          <TechStack />
        </Container>
        <Container className="stack-container" style={{ textAlign: "center" }}>
          <h2>
            Tools I <span className="main-colour">Use</span>
          </h2>
          <ToolsStack />
        </Container>
        <Container className="stack-container" style={{ textAlign: "center" }}>
          <h2>
            Coding <span className="main-colour">History</span>
          </h2>
          <p>
            This does not include{" "}
            <span className="main-colour">contributions</span> to private
            repositories.
          </p>
          <Container className="github-container">
            <GitHubCalendar
              username="TZevs"
              blockSize={14}
              errorMessage="Cannot fetch GitHub contribution information at the moment."
            />
          </Container>
        </Container>
      </Container>
    </>
  );
}
