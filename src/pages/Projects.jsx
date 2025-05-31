import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/ProjectsCard";
import flashcardImg from "../assets/deck_screen.png";
import portfolioImg from "../assets/portfolio_home.png";
import ray1Img from "../assets/ray1_map.png";
import inventoryImg from "../assets/admin_dash.png";
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
    "https://img.shields.io/badge/Windows%20Terminal-%234D4D4D.svg?style=for-the-badge&logo=windows-terminal&logoColor=white",
  ];

  return (
    <Container className="projects-container">
      <Container className="projects-header">
        <h1>
          Some of <span className="main-colour">My Projects</span>
        </h1>
        <p>Here are a few of my more recent projects</p>
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
              desc="After completing the React Essential Training LinkedIn course, I decided to apply my newly gained knowledge by updating my portfolio website using React."
              img={portfolioImg}
              githubLink="https://github.com/TZevs/new_portfolio"
              techStack={portfolioTech}
              device="laptop"
            />
          </Col>
          <Col>
            <ProjectCard
              name="Raytheon Project"
              desc="An analytic software that takes data from SCi-Discover, a Raytheon product, and visualises it on a map with the percentage coverage of the product area across the UK. The coverage is also calculated for each region and county as well as an area the user has drawn across. Developed with 4 others, we came joint 2nd out of 5 after preseting our finished product to the Raytheon representitives."
              img={ray1Img}
              githubLink="https://github.com/MrDudZs/Ray1/tree/main"
              techStack={RayTech}
              device="laptop"
            />
          </Col>
        </Row>
        {/* <br /> */}
        <Row>
          <Col>
            <ProjectCard
              name="Inventory Management App"
              desc="A system that could be implemented into a computer peripherals business, it allows 2 different branches and has 2 different user permissions. An admin user has more functionality and access to data / statistics while a clerk will just be able to see the basics and create invoices."
              img={inventoryImg}
              githubLink="https://github.com/MrDudZs/Inventory-Managment-System"
              techStack={IMSTech}
              device="laptop"
            />
          </Col>
          <Col>
            <ProjectCard
              name="Vehicle Rental System"
              desc="A console application that allows user to view, add, remove, rent, and return different vehicles with an account. This project was part of an assignment where I had to implement the OOP principles such as; Encapsulation, Abstraction, Inheritance, and Polymorphism."
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
