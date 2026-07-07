# job-recruitment-platform


A full-stack MERN application built as part of the Applywizz Technologies Entry-Level Software Engineer take-home assignment.

The application enables recruiters to efficiently search, analyze, and manage job postings imported from an Excel dataset. It also performs data cleaning, normalization, duplicate detection, and provides interactive analytics through a dashboard.

---

## Live Demo

Frontend:
https://job-recruitment-platform-m35vi47s3-codes-h7s-projects.vercel.app/

Backend API:
https://job-recruitment-platform-ky9a.onrender.com/

Demo Video:
https://drive.google.com/file/d/1uhQVmw9kBiM_zAt7tcqUs6pKxI5Ft3EW/view

---

# Features

## Backend

- Import job data from Excel dataset
- MongoDB database integration
- Data validation
- Data normalization
- HTML cleaning
- Date parsing
- Duplicate detection
- REST APIs
- Dashboard analytics using MongoDB Aggregation
- Filtering
- Searching
- Sorting
- Pagination
- Service Layer Architecture
- Controller Layer
- Utility Functions

## Frontend

- Dashboard
- Jobs Listing
- Job Details
- Duplicate Review
- Search
- Filters
- Sorting
- Pagination
- Responsive UI
- Interactive Charts

---

# Tech Stack

## Frontend

- React
- Redux Toolkit
- React Router
- Tailwind CSS
- Axios
- Recharts
- React Icons

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- XLSX
- Validator
- CORS
- Morgan
- Dotenv

---

# Project Structure

```
job-recruitment-platform

├── backend
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── services
│   ├── scripts
│   ├── utils
│   ├── app.js
│   └── server.js
│
├── client
│   ├── src
│   │   ├── components
│   │   ├── features
│   │   ├── pages
│   │   ├── api
│   │   ├── redux
│   │   └── utils
│
└── README.md
```

---

# Architecture

## Backend

```
Client

↓

Routes

↓

Controllers

↓

Services

↓

MongoDB
```

### Responsibilities

### Routes

Define REST endpoints.

### Controllers

Handle HTTP requests and responses.

### Services

Contain all business logic.

### Models

Define MongoDB collections.

### Utilities

Reusable helper functions for:

- Data validation
- HTML cleaning
- Date parsing
- Normalization
- Duplicate detection

---

# Database Schema

Each Job document contains fields such as:

- Title
- Company
- Location
- Description
- Salary
- Currency
- Employment Type
- Experience Level
- Department
- Remote Flag
- Job URL
- Posted Date
- Duplicate Status

---

# Data Import Process

The application imports data directly from the provided Excel dataset.

Import flow:

```
Excel Dataset

↓

Read Excel

↓

Validate Data

↓

Normalize Data

↓

Detect Duplicates

↓

Store into MongoDB
```

Run the importer:

```bash
npm run import
```

---

# Data Normalization

During import the application performs:

- Trim whitespace
- Remove HTML tags from descriptions
- Standardize dates
- Normalize text fields
- Replace missing optional values with "N/A"
- Skip invalid records

This ensures the stored data remains consistent.

---

# Duplicate Detection

Two types of duplicate detection are implemented.

## Exact Duplicate

Detected using:

- Job URL

If the URL already exists, the record is skipped.

## Near Duplicate

A normalized duplicate key is generated using:

- Job Title
- Company
- Location

Potential duplicates are stored separately for manual review.

---

# API Endpoints

## Jobs

```
GET /api/jobs
```

Supports:

- Search
- Pagination
- Filtering
- Sorting

---

```
GET /api/jobs/:id
```

Returns complete job information.

---

## Dashboard

```
GET /api/dashboard
```

Returns:

- Total Jobs
- Companies
- Remote Jobs
- Hybrid Jobs
- Onsite Jobs
- Top Companies
- Employment Types
- Experience Levels
- Top Locations

---

## Duplicate Review

```
GET /api/duplicates
```

Returns detected duplicate jobs.

---

```
PATCH /api/duplicates/:id
```

Updates duplicate review status.

---

# Dashboard Analytics

Dashboard statistics are generated using MongoDB Aggregation Pipelines.

Charts include:

- Top Companies
- Employment Types
- Experience Levels
- Top Locations

---

# Setup Instructions

## Clone Repository

```bash
git clone https://github.com/HarmeetSingh25/job-recruitment-platform.git
```

---

## Backend

```bash
cd backend

npm install
```

Create `.env`

```
PORT=

MONGO_URI=
```

Run server

```bash
npm run dev
```

Import dataset

```bash
npm run import
```

---

## Frontend

```bash
cd client

npm install
```

Create `.env`

```
VITE_API_URL=http://localhost:3000/api
```

Run

```bash
npm run dev
```

---

# Design Decisions

- Layered backend architecture
- Feature-based frontend structure
- Service layer for business logic
- MongoDB Aggregation for dashboard analytics
- Backend pagination for scalability
- Rule-based duplicate detection
- Utility functions shared across importer and API layer
- Data normalization before database insertion

---

# Assumptions

- Duplicate jobs should not be automatically inserted into the main jobs collection.
- Missing optional values are replaced with "N/A".
- Salary values are preserved in their original format because the dataset contains multiple salary formats.
- Dashboard analytics are generated from imported data only.

---

# Trade-offs

- Rule-based duplicate detection was chosen over fuzzy matching for simplicity and performance.
- Analytics are computed on demand rather than cached.
- Search uses MongoDB queries instead of Elasticsearch.

---

# Known Limitations

- Duplicate detection may miss some complex near-duplicate cases.
- Authentication and authorization are not implemented.
- Salary normalization can be improved for better analytics.
- Dashboard analytics are not cached.
- Background job processing is not implemented for large imports.

---

# Future Improvements

- Authentication & Authorization
- Resume Tailoring Agent
- Elasticsearch Integration
- Redis Caching
- Background Queue Processing
- AI-based Duplicate Detection
- Advanced Analytics
- Role-Based Access Control

---

# Author

**Harmeet Singh**

GitHub:
https://github.com/HarmeetSingh25