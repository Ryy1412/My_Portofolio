// backend/index.js
const express = require('express');
const cors = require('cors');
const { educationHistory, skills, projects, certificate} = require('./data');
const app = express();
app.use(cors());
app.use(express.json());
app.get('/api/education', (req, res) => res.json(educationHistory));
app.get('/api/skills', (req, res) => res.json(skills));
app.get('/api/projects', (req, res) => res.json(projects));
app.get('/api/certificate', (req, res) => res.json(certificate));
module.exports = app;