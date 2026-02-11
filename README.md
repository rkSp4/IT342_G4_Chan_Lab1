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
- **Spring Boot** 2.7.18 - Java-based framework for building web applications
- **Spring Data JPA** - Data persistence layer
- **Spring Security** - Authentication and authorization
- **Maven** - Dependency management and build tool
- **H2 Database** - In-memory database for development
- **MySQL** - Production database support
- **Java** 11 - Backend server implementation
- RESTful API architecture

### Mobile
- Mobile application (in development)

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Java Development Kit (JDK 11 or higher)
- Maven (or use included Maven wrapper)
- Git

## Steps to Run Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Build the project using Maven:
   ```bash
   ./mvnw clean compile
   # On Windows use: .\mvnw.cmd clean compile
   ```

3. Run the Spring Boot application:
   ```bash
   ./mvnw spring-boot:run
   # On Windows use: .\mvnw.cmd spring-boot:run
   ```

Alternatively, you can package and run the JAR file:
   ```bash
   ./mvnw clean package -DskipTests
   java -jar target/chan-0.0.1-SNAPSHOT.jar
   ```

The backend server will start on `http://localhost:8080`

### Database Configuration

The application is configured to use H2 in-memory database for development. You can access the H2 console at `http://localhost:8080/h2-console` when the application is running.

For production, update `application.properties` with your MySQL database configuration.

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

Base URL: `http://localhost:8080/api`

### User Management Endpoints

#### 1. Create User
- **Endpoint:** `POST /api`
- **Description:** Create a new user account
- **Request Body:**
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string",
    "profile": "string"
  }
  ```
- **Response:** Created user object with generated ID

#### 2. Get All Users
- **Endpoint:** `GET /api`
- **Description:** Retrieve all users
- **Response:** List of all users

#### 3. Get User by ID
- **Endpoint:** `GET /api/{id}`
- **Description:** Retrieve a specific user by their ID
- **Path Parameters:** `id` - User ID
- **Response:** User object

#### 4. Get User by Username
- **Endpoint:** `GET /api/username/{username}`
- **Description:** Retrieve a user by their username
- **Path Parameters:** `username` - Username to search for
- **Response:** User object

#### 5. Update User
- **Endpoint:** `PUT /api/{id}`
- **Description:** Update an existing user's information
- **Path Parameters:** `id` - User ID
- **Request Body:**
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string",
    "profile": "string"
  }
  ```
- **Response:** Updated user object

#### 6. Delete User
- **Endpoint:** `DELETE /api/{id}`
- **Description:** Delete a user account
- **Path Parameters:** `id` - User ID
- **Response:** Deletion confirmation message

#### 7. Health Check
- **Endpoint:** `GET /api/health`
- **Description:** Check if the API is running
- **Response:** Server status and timestamp

## Features

### Backend Features
- User registration and management
- User profile management with custom profiles
- RESTful API with full CRUD operations
- Data validation and error handling
- Database integration with JPA/Hibernate
- Health check endpoint
- Cross-origin resource sharing (CORS) support

### Frontend Features
- React-based user interface
- User registration with validation
- Responsive design
- API integration with Axios
- Component-based architecture
- Context-based state management

## Known Issues

### Backend Issues
- **Database Connection Stability**: The database connection may experience intermittent issues and is not fully stabilized. This may cause occasional connection timeouts or data persistence problems.

### Authentication System
- **Login/Logout Functionality**: The user login and logout features are not yet finalized. The authentication flow is still under development and may not work as expected.
- **Session Management**: User session handling and token management are incomplete.

### General
- These issues are currently being addressed and will be resolved in future updates.

## Project Structure

```
IT342_G4_Chan_Lab1/
├── backend/                    # Spring Boot backend application
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/it342g4/chan/
│   │   │   │   ├── ChanApplication.java      # Main Spring Boot application
│   │   │   │   ├── config/                   # Configuration classes
│   │   │   │   ├── controller/               # REST controllers
│   │   │   │   ├── dto/                      # Data Transfer Objects
│   │   │   │   ├── entity/                   # JPA entities
│   │   │   │   ├── repository/               # Data repositories
│   │   │   │   └── service/                  # Business logic services
│   │   │   └── resources/
│   │   │       └── application.properties    # Application configuration
│   │   └── test/                             # Unit tests
│   ├── target/                 # Compiled classes and build artifacts
│   ├── pom.xml                # Maven configuration
│   └── mvnw, mvnw.cmd         # Maven wrapper scripts
├── web/                       # React frontend application
│   ├── public/
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── context/          # React context providers
│   │   ├── services/         # API service layer
│   │   └── utils/            # Utility functions
│   └── package.json
├── mobile/                    # Mobile application (in development)
├── docs/                      # Documentation files
└── README.md                  # This file
```

## Contributors

- Lance Chan

## License

This project is developed for educational purposes as part of IT342 coursework.