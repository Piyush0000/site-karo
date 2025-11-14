const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/sitekaro', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).catch(err => {
  console.log('MongoDB not available, using fallback data');
});

const db = mongoose.connection;
db.on('error', (error) => {
  console.log('MongoDB connection error:', error.message);
});
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Sample route
app.get('/', (req, res) => {
  res.send('Site Karo API is running...');
});

// Sample data routes
app.get('/api/services', (req, res) => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Professional website development services with modern technologies.',
      icon: '💻'
    },
    {
      id: 2,
      title: 'App Development',
      description: 'Mobile app development for iOS and Android platforms.',
      icon: '📱'
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'Creative and intuitive user interface and experience design.',
      icon: '🎨'
    },
    {
      id: 4,
      title: 'Digital Marketing',
      description: 'Boost your online presence with our digital marketing strategies.',
      icon: '📈'
    }
  ];
  res.json(services);
});

app.get('/api/projects', (req, res) => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured online shopping platform with payment integration.',
      image: '/images/project1.jpg'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Productivity app for teams to manage projects and tasks efficiently.',
      image: '/images/project2.jpg'
    },
    {
      id: 3,
      title: 'Fitness Tracker',
      description: 'Health and fitness application with workout plans and progress tracking.',
      image: '/images/project3.jpg'
    }
  ];
  res.json(projects);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});