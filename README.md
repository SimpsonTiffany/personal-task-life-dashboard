Personal Task & Life Dashboard
A web-based productivity dashboard designed to help users organize tasks, customize their workspace, and receive simple AI-powered insights.
This project is part of an academic course demonstrating modern software development skills, including backend development, cloud deployment, AI integration, and Agile project planning.

## Project Overview
The Personal Task Life Dashboard is a backend-focused application designed to demonstrate modern software development practices, including automated testing, CI/CD pipelines, containerization, and cloud deployment.

The project was built incrementally across multiple sprints, evolving from a functional MVP into a production-ready system with professional safeguards that prevent unstable code from reaching users.



## Technology Stack
- Node.js
- Express.js
- Jest & Supertest (Automated Testing)
- Docker
- GitHub Actions (CI/CD)
- Google Cloud Run
- Jira & Confluence (Agile Project Management)



MVP Features (Sprint 1)
The Minimum Viable Product (MVP) focuses on three core areas:
1. Dashboard & User Interface
  Dashboard Layout
  Customize Dashboard Layout
  Quick Notes
  Color-Coded Categories

2. Task Management System
  Add New Task
  Edit or Update Tasks
  Categorize Tasks
  Set Task Reminders

3. AI Insights (Basic Version)
  AI Task Summary (Simple text-generation summary)

> Note: The technology stack reflects the current MVP implementation and may evolve in future iterations.


 Project Management Links
Jira Project:
https://simpsontiffany84.atlassian.net/jira/software/projects/SCRUM/boards/1/backlog
Confluence Space:
https://simpsontiffany84.atlassian.net/wiki/spaces/PTLODD/pages/393219/Project+Overview+-+Personal+Task+Life+Organization+Dashboard

## Features

- Health check endpoint (/health) for service availability
- Detailed health metadata endpoint (/health/details)
- Automated test coverage for all API endpoints
- CI pipeline that runs tests on every push
- CD pipeline that deploys automatically to Google Cloud Run after tests pass

## CI/CD Pipeline

This project uses GitHub Actions to implement a full CI/CD pipeline.

### Continuous Integration (CI)
- Automatically runs Jest tests on every push
- Prevents untested or broken code from being merged

### Continuous Deployment (CD)
- Automatically deploys to Google Cloud Run after tests pass
- Deployments are triggered only when changes are merged to `main`

This pipeline ensures production stability and directly addresses real-world failures caused by insufficient testing and deployment practices.

## Live Deployment

The application is deployed on Google Cloud Run and updates automatically through the CI/CD pipeline.

**Cloud Run URL:**  
https://personal-task-life-dashboard-861437902916.europe-west1.run.app

## Testing

Automated tests are implemented using Jest and Supertest.

To run tests locally:

``bash
cd backend
npm test


## Local Setup Instructions

### Prerequisites
- Node.js
- npm
- Git
- Docker (optional, for containerized runs)

### Installation

- Run: git clone https://github.com/SimpsonTiffany/personal-task-life-dashboard.git`
- Run: cd personal-task-life-dashboard`
- Run: npm install`


Repository Structure
personal-task-life-dashboard/
├── backend/
│ ├── index.js
│ ├── package.json
│ ├── tests/
│ │ └── health.test.js
├── .github/
│ └── workflows/
│ └── ci.yml
├── Dockerfile
├── README.md

## Agile & Documentation

Development was managed using Agile principles with:

- Jira for sprint planning, user stories, and task tracking
- Confluence for sprint reviews, retrospectives, and technical documentation

The project was completed across multiple sprints, including CI/CD implementation and feature enhancement.


## MVP Scope

This project represents a Minimum Viable Product (MVP) created to demonstrate core task and life organization functionality and modern development workflows, including Git branching, Docker containerization, cloud deployment, Agile project management, and AI-assisted development. The focus is proof of concept rather than a full production-ready system.

## Cloud Deployment
The application has been deployed to Google Cloud Run as part of the MVP workflow.

**Cloud Run URL:**  
https://personal-task-life-dashboard-861437902916.europe-west1.run.app

> Note: As an MVP, the deployment may be incomplete or unstable. The focus is on demonstrating cloud deployment tooling rather than production readiness.
