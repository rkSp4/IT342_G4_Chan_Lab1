# IT342_G4_Chan_Lab1

## Project Description

This is a full-stack user authentication system developed as a laboratory project. The application provides a complete authentication solution with user registration, login, profile management, and session handling. The project demonstrates modern web development practices with a React-based frontend communicating with a backend API.

## Technologies Used

### Frontend (Web)
- **React** 18.2.0 - JavaScript library for building user interfaces
- **React Router DOM** 6.3.0 - Declarative routing for React applications
- **Axios** 0.27.2 - Promise-based HTTP client for API requests
- **React Scripts** 5.0.1 - Configuration and scripts for Create React App

### Backend
- **Java** - Backend server implementation
- RESTful API architecture

### Mobile
- Mobile application (in development)

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Java Development Kit (JDK 8 or higher)
- Git

## Steps to Run Backend

1. Navigate to the project root directory:
   ```bash
   cd IT342_G4_Chan_Lab1
   ```

2. Compile the Java backend:
   ```bash
   javac src/Main.java
   ```

3. Run the backend server:
   ```bash
   java -cp src Main
   ```

The backend server should start on `http://localhost:8080`

## Steps to Run Web App

1. Navigate to the web directory:
   ```bash
   cd web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

The web app is configured to proxy API requests to `http://localhost:8080`

### Available Scripts in Web App

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Steps to Run Mobile App

The mobile application is currently in development. Check the `mobile/` directory for updates.

## API Endpoints

Base URL: `http://localhost:8080/api/auth`

### Authentication Endpoints

#### 1. Register User
- **Endpoint:** `POST /api/auth/register`
- **Description:** Register a new user account
- **Request Body:**
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **Response:** User registration confirmation

#### 2. Login User
- **Endpoint:** `POST /api/auth/login`
- **Description:** Authenticate user and receive access token
- **Request Body:**
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response:** Authentication token and user data

#### 3. Get User Profile
- **Endpoint:** `GET /api/auth/profile`
- **Description:** Retrieve current user's profile information
- **Headers:** `Authorization: Bearer {token}`
- **Response:** User profile data

#### 4. Logout User
- **Endpoint:** `POST /api/auth/logout`
- **Description:** Logout user and invalidate session
- **Headers:** `Authorization: Bearer {token}`
- **Response:** Logout confirmation

#### 5. Verify Token
- **Endpoint:** `GET /api/auth/verify`
- **Description:** Verify if the current authentication token is valid
- **Headers:** `Authorization: Bearer {token}`
- **Response:** Token validation status

## Features

- User registration with validation
- Secure user login
- JWT-based authentication
- Protected routes requiring authentication
- User profile management
- Automatic token handling and refresh
- Responsive user interface
- Session management

## Project Structure

```
IT342_G4_Chan_Lab1/
├── src/                    # Backend Java source files
│   └── Main.java
├── web/                    # React frontend application
│   ├── public/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── context/       # React context providers
│   │   ├── services/      # API service layer
│   │   └── utils/         # Utility functions
│   └── package.json
├── mobile/                 # Mobile application (in development)
└── docs/                   # Documentation files
```

## Contributors

- Group 4
- Lance Chan

## License

This project is developed for educational purposes as part of IT342 coursework.