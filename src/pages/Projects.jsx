import "./projects.css";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectsCard";

export default function Projects() {
  return (
    <Container className="projects-container">
      <Container className="projects-header">
        <h1>
          Some of <span className="main-colour">My Projects</span>
        </h1>
        <p>Here are a few projects I've worked on recently</p>
      </Container>
      <Container className="project-cards">
        <Row>
          <Col>
            <ProjectCard
              name="Flashcard Mobile App"
              desc="Inspired by seeing my sister revising for her ALevels using hand written flashcards."
              img=""
              githubLink="https://github.com/TZevs/flashcard_app"
            />
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </Container>
  );
}
