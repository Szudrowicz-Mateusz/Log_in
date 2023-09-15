// Get references to form elements
const usernameInput = document.querySelector('#username-input');
const passwordInput = document.querySelector('#password-input');
const loginButton = document.querySelector('#login-button');
const errorModal = document.querySelector('#error-modal');
const closeModalButton = document.querySelector('.close');
const wrongCombinationMessage = document.querySelector('#wrong-combination-message'); // New error message element

// Test account credentials
const testAccount = {
  username: 'test@luxpmsoft.com',
  password: 'test1234!',
};

// Add more test credentials if needed
const testCredentials = [testAccount];

// Function to check if credentials are valid
function isValidCredentials(username, password) {
  return testCredentials.some((credentials) => {
    return credentials.username === username && credentials.password === password;
  });
}

// Function to validate the password format
function isPasswordValid(password) {
  // Use a regular expression to check if the password contains letters, numbers, and special characters
  const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
  return passwordPattern.test(password);
}

loginButton.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the values entered by the user
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Check if the entered password is valid
  if (!isPasswordValid(password)) {
    wrongCombinationMessage.style.display = 'block';
    wrongCombinationMessage.style.color = 'red';
    return; // Exit the function and prevent login
  }

  // Check if the entered credentials are valid
  if (isValidCredentials(username, password)) {
    // Clear the input fields
    usernameInput.value = '';
    passwordInput.value = '';
  } else {
    // Display the error modal for incorrect credentials
    errorModal.classList.add('show');
  }
});

// Add a click event listener to close the error modal
closeModalButton.addEventListener('click', function () {
  errorModal.classList.remove('show');
});

// Close the modal if the user clicks outside of it
window.addEventListener('click', function (event) {
  if (event.target === errorModal) {
    errorModal.classList.remove('show');
  }
});