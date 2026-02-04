// Email validation
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Password strength validation
export const validatePassword = (password) => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const errors = [];

  if (password.length < minLength) {
    errors.push(`Password must be at least ${minLength} characters long`);
  }
  if (!hasUpperCase) {
    errors.push('Password must contain at least one uppercase letter');
  }
  if (!hasLowerCase) {
    errors.push('Password must contain at least one lowercase letter');
  }
  if (!hasNumbers) {
    errors.push('Password must contain at least one number');
  }
  if (!hasSpecialChar) {
    errors.push('Password must contain at least one special character');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

// Username validation
export const validateUsername = (username) => {
  const minLength = 3;
  const maxLength = 20;
  const usernameRegex = /^[a-zA-Z0-9_]+$/;

  const errors = [];

  if (username.length < minLength) {
    errors.push(`Username must be at least ${minLength} characters long`);
  }
  if (username.length > maxLength) {
    errors.push(`Username must be no more than ${maxLength} characters long`);
  }
  if (!usernameRegex.test(username)) {
    errors.push('Username can only contain letters, numbers, and underscores');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

// Form validation
export const validateForm = (formData, type) => {
  const errors = {};

  if (type === 'register') {
    // Validate username
    const usernameValidation = validateUsername(formData.username || '');
    if (!usernameValidation.isValid) {
      errors.username = usernameValidation.errors[0];
    }
  }

  // Validate email
  if (!formData.email) {
    errors.email = 'Email is required';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Validate password
  if (!formData.password) {
    errors.password = 'Password is required';
  } else if (type === 'register') {
    const passwordValidation = validatePassword(formData.password);
    if (!passwordValidation.isValid) {
      errors.password = passwordValidation.errors[0];
    }
  }

  // Validate confirm password for registration
  if (type === 'register' && formData.confirmPassword !== formData.password) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};