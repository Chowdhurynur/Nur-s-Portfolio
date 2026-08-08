// Smooth scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  document.getElementById('formResponse').innerText =
    `Thank you, ${name}! Your message has been received.`;
  this.reset();
});
.expertise-box {
  background: #d0f0e3; /* muted teal */
  padding: 30px;
  margin: 20px auto;
  border-radius: 8px;
  font-family: 'Merriweather', serif;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  max-width: 600px;
}

