# User Authentication System - Frontend

A modern React.js frontend application for user authentication with registration, login, profile viewing, and logout functionalities.

## Features

- **User Registration**: Secure user registration with comprehensive form validation
- **User Login**: Secure authentication with JWT token management
- **Protected Routes**: Route protection for authenticated users only
- **User Dashboard**: Profile viewing and system information for authenticated users
- **Responsive Design**: Modern, mobile-friendly UI
- **Form Validation**: Client-side validation for email, password strength, and username requirements
- **Error Handling**: Comprehensive error handling and user feedback
- **Session Management**: Automatic token management with localStorage
- **Security**: Secure HTTP-only communication with backend API

## Project Structure

```
src/
├── components/          # React components
│   ├── Dashboard.js     # User dashboard/profile page
│   ├── Login.js         # Login form component
│   ├── Navbar.js        # Navigation component
│   ├── PrivateRoute.js  # Route protection component
│   └── Register.js      # Registration form component
├── context/             # React context providers
│   └── AuthContext.js   # Authentication state management
├── services/            # API service layer
│   └── authService.js   # Authentication API calls
├── utils/               # Utility functions
│   └── validation.js    # Form validation helpers
├── App.js              # Main application component
├── index.js            # Application entry point
└── index.css           # Global styles
```

## Technology Stack

- **React 18.2.0**: Modern React with hooks
- **React Router DOM 6.3.0**: Client-side routing
- **Axios 0.27.2**: HTTP client for API communication
- **Modern CSS**: Responsive design with Flexbox and CSS Grid
- **JWT**: JSON Web Token for authentication
- **Local Storage**: Token persistence

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend API server running on port 8080

## Installation

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

## Environment Variables

Create a `.env` file in the web directory with the following variables:

```env
REACT_APP_API_URL=http://localhost:8080/api/auth
REACT_APP_APP_NAME=User Authentication System
```

## API Endpoints Expected

The frontend expects the following API endpoints from the backend:

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile
- `POST /api/auth/logout` - User logout
- `GET /api/auth/verify` - Token verification

## Form Validation Rules

### Username
- Minimum 3 characters
- Maximum 20 characters
- Only letters, numbers, and underscores allowed

### Email
- Valid email format required
- Required field

### Password
- Minimum 8 characters
- Must contain at least one uppercase letter
- Must contain at least one lowercase letter
- Must contain at least one number
- Must contain at least one special character

## Available Scripts

- `npm start`: Start development server
- `npm build`: Build for production
- `npm test`: Run tests
- `npm eject`: Eject from Create React App

## Security Features

- JWT token management
- Automatic token expiration handling
- Protected routes with authentication checks
- Input validation and sanitization
- HTTPS communication (in production)
- Password strength requirements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Follow the existing code structure
2. Add proper error handling
3. Include form validation for new inputs
4. Update tests for new components
5. Follow React best practices and hooks patterns

## License

This project is part of IT342 coursework.