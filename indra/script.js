// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Contact form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;
  let errorMessage = document.getElementById('error-message');

  if (!name || !email || !message) {
    errorMessage.textContent = 'All fields are required!';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errorMessage.textContent = 'Please enter a valid email address!';
  } else {
    errorMessage.textContent = '';
    alert('Message sent successfully!');
    document.getElementById('contactForm').reset();
  }
});
