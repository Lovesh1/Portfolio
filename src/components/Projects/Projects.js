import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import vehicle from "../../Assets/Projects/icons8-tracking-100.png";  
import editor from "../../Assets/Projects/codeEditor.png";
import suicide from "../../Assets/Projects/icons8-real-estate-16.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Emotion Detection"
              description="Emotion detection using CNN and transfer Learning, you can detect from image wheter a person is sad, happy, angry, fear and many other emotions"
              ghLink="https://github.com/soumyajit4419/Chatify"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Cat and Dog Classifier"
              description="Build a cat and dog classifier, you can detect whether an image is dog or cat."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Student Mental Health Prediction"
              description="Using Random Forest Classifier to predict the mental health of a student based on the features."
              ghLink="https://github.com/soumyajit4419/Editor.io"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="GoMedicx"
              description="Using react.js, node.js, express.js and mongoDB to build a web application for the hospital management system."
              ghLink="https://github.com/Lovesh1/GoMedicx-Client-Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Real-State-web-Application"
              description="Using React and Tailwind to build a frontend Layout for the Real Estate buisness"
              ghLink="https://github.com/Lovesh1/Real-Estate"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vehicle}
              isBlog={false}
              title="Vehicle Tracking System"
              description="Build a Vehicle tracking system for a client to track the Vehicle and track their records."
              ghLink="https://github.com/Lovesh1/Vehicle_Tracker_System"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
