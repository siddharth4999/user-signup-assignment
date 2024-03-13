const form = document.getElementById('signup-form');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('input', () => {
  const name = document.getElementById('name').value;
  const mobile = document.getElementById('mobile').value;
  const dob = document.getElementById('dob').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const isValidName = name.trim() !== '';
  const isValidMobile = /^[0-9]{10}$/.test(mobile);
  const isValidDOB = dob !== '';
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPassword = password.length >= 6;

  if (isValidName && isValidMobile && isValidDOB && isValidEmail && isValidPassword) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
});
