import React from 'react';
import { Accordion } from 'react-bootstrap';

const Faq = () => {
    return (  <Accordion defaultActiveKey="0">

    <Accordion.Item eventKey="0">
    <Accordion.Header>Applied Learning Project</Accordion.Header>
        <Accordion.Body>
        This program includes over 140 hours of instruction
         and hundreds of practice-based assessments which 
         will help you simulate real-world project management 
         scenarios that are critical for success in the workplace.
        The content is highly interactive and exclusively developed 
        by Google employees with decades of experience in program and
         project management.
        </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Build the Skills to Get Job Ready</Accordion.Header>
    <Accordion.Body>
    Whether you re looking to start a new career,
     or change your current one, Professional Certificates 
     on Coursera help you become job ready.Learn at your
      own pace, whenever and wherever it’s 
      most convenient for you You can
     pause your learning or end your subscription at any
      time..
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Hands-On Projects</Accordion.Header>
    <Accordion.Body>
    Apply your skills with hands-on projects and build
     a portfolio that showcases your job readiness to 
     potential employers. You'll need to successfully 
     finish the project(s) to earn your Certificate.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>Earn a Career Credential</Accordion.Header>
    <Accordion.Body>
    When you complete all of the courses in the program,
     you'll earn a Certificate to share with your 
     professional network as well as unlock access to 
     career support resources to help you kickstart your
      new career. Many Professional Certificates have 
      hiring partners that recognize the Professional
       Certificate credential and others can help prepare
        you for a certification exam.
    </Accordion.Body>
  </Accordion.Item>
  
</Accordion>
);
};

export default Faq;