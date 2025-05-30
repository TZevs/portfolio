import "./projects.css";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectsCard";
import flashcardImg from "../assets/deck_screen.png";
import portfolioImg from "../assets/portfolio_home.png";
import ray1Img from "../assets/ray1_map.png";
import inventoryImg from "../assets/inventory_dash.png";
import rentalImg from "../assets/rental_cars.png";

export default function Projects() {
  const flashcardTech = [
    "https://img.shields.io/badge/dart-%230175C2.svg?style=for-the-badge&logo=dart&logoColor=white",
    "https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white",
    "https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase",
    "https://img.shields.io/badge/android%20studio-346ac1?style=for-the-badge&logo=android%20studio&logoColor=white",
  ];
  const portfolioTech = [
    "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
    "https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white",
  ];
  const RayTech = [
    "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54",
    "https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white",
    "https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white",
    "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
    "https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white",
  ];
  const IMSTech = [
    "https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white",
    "https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white",
    "https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white",
    "https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white",
  ];
  const rentalTech = [
    "https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white",
    "https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white",
    "https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white",
  ];

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
              desc="A revision app where users can add, edit, delete, share, and save decks of flashcards. User sets their deck to either public or private, private only for their use, public provides access to other users. Add images from camera or gallery onto the cards. Have the card content read aloud."
              img={flashcardImg}
              githubLink="https://github.com/TZevs/flashcard_app"
              techStack={flashcardTech}
              device="mobile"
            />
          </Col>
          <Col>
            <ProjectCard
              name="This Portfolio"
              desc=""
              img={portfolioImg}
              githubLink="https://github.com/TZevs/new_portfolio"
              techStack={portfolioTech}
              device="laptop"
            />
          </Col>
          <Col>
            <ProjectCard
              name="Raytheon Project"
              desc=""
              img={ray1Img}
              githubLink="https://github.com/MrDudZs/Ray1/tree/main"
              techStack={RayTech}
              device="laptop"
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <ProjectCard
              name="Inventory Management System"
              desc=""
              img={inventoryImg}
              githubLink="https://github.com/MrDudZs/Inventory-Managment-System"
              techStack={IMSTech}
              device="laptop"
            />
          </Col>
          <Col>
            <ProjectCard
              name="Vehicle Rental System"
              desc=""
              img={rentalImg}
              githubLink="https://github.com/TZevs/VehicleRentalSystem"
              techStack={rentalTech}
              device="laptop"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
