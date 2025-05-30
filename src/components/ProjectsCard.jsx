import { Card, Button } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard(props) {
  const items = props.techStack;
  const techStackObjs = items.map((tech, i) => ({
    id: i,
    link: tech,
  }));

  return (
    <Card className="project-card">
      <Card.Img
        src={props.img}
        className="project-card-img"
        style={{ width: props.device === "mobile" ? 100 : 300 }}
      />
      <Card.Body>
        <Card.Title style={{ textAlign: "center" }}>{props.name}</Card.Title>
        <Card.Text style={{ letterSpacing: 1 }}>{props.desc}</Card.Text>
        {techStackObjs.map((tech) => (
          <Card.Img key={tech.id} src={tech.link} className="stack-icons" />
        ))}
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
