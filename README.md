# MERN Stack Website - Site Karo

A full-stack web application built with the MERN stack (MongoDB, Express, React, Node.js) similar to the Site Karo website.

## Features

- Responsive design with modern UI
- RESTful API with Express and Node.js
- MongoDB database integration
- React frontend with React Router
- Proxy setup for seamless development experience

## Project Structure

```
.
├── client/              # React frontend
│   ├── public/          # Static assets
│   └── src/             # React components and pages
│       ├── components/  # Reusable components
│       ├── pages/       # Page components
│       ├── App.jsx      # Main App component
│       └── main.jsx     # Entry point
├── server.js            # Express server
├── package.json         # Backend dependencies
└── client/package.json  # Frontend dependencies
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd mern-website
   ```

2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd client
   npm install
   cd ..
   ```

## Configuration

1. Create a `.env` file in the root directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/sitekaro
   ```

2. Update the MongoDB URI if you're using a different database.

## Running the Application

### Development Mode

To run both frontend and backend in development mode:

```bash
npm run dev
```

This will start:
- Backend server on http://localhost:5000
- Frontend development server on http://localhost:3000

### Backend Only

```bash
npm run server
```

### Frontend Only

```bash
npm run client
```

## Building for Production

To create a production build of the frontend:

```bash
npm run build
```

## API Endpoints

- `GET /api/services` - Get list of services
- `GET /api/projects` - Get list of projects

## Deployment

1. Build the frontend:
   ```bash
   npm run build
   ```

2. Start the server:
   ```bash
   npm start
   ```

The application will be available on http://localhost:5000

## Technologies Used

- **Frontend**: React, React Router, CSS3
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Development**: Vite, Nodemon, Concurrently

## Folder Structure Details

### Frontend (client/)
- `src/components/` - Reusable UI components (Navbar, Footer)
- `src/pages/` - Page components (Home, About, Services, Projects, Contact)
- `src/App.jsx` - Main application component with routing
- `src/main.jsx` - Entry point

### Backend
- `server.js` - Main server file with API routes
- `package.json` - Backend dependencies and scripts

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

## License

This project is licensed under the MIT License.