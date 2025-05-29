import { Card, Button } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard(props) {
  return (
    <Card className="project-card">
      <Card.Img src={props.img} />
      <Card.Body>
        <Card.Title style={{ textAlign: "center" }}>{props.name}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
      </Card.Body>
      <Button
        className="project-card-btn"
        href={props.githubLink}
        target="_blank"
      >
        <FaGithub style={{ marginBottom: 3.5, marginRight: 3 }} />
        GitHub
      </Button>
    </Card>
  );
}
