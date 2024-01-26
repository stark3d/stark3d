const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

// Function to create particles
function createParticle() {
  const particle = {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 3 + 1,
    speedX: Math.random() * 3 - 1.5,
    speedY: Math.random() * 3 - 1.5,
    color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
  };
  particles.push(particle);
}

// Function to draw particles
function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(particle => {
    ctx.beginPath();
    ctx.fillStyle = particle.color;
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fill();

    // Update particle position
    particle.x += particle.speedX;
    particle.y += particle.speedY;

    // Bounce off walls
    if (particle.x < 0 || particle.x > canvas.width) {
      particle.speedX *= -1;
    }
    if (particle.y < 0 || particle.y > canvas.height) {
      particle.speedY *= -1;
    }
  });

  requestAnimationFrame(drawParticles);
}

// Create initial particles
for (let i = 0; i < 100; i++) {
  createParticle();
}

// Start animation
drawParticle();


 
// the scroll animation between sections------------------------------------------------------
// Get the sections by their IDs
const headerSection = document.getElementById('header');
const aboutSection = document.getElementById('about');

// Attach a scroll event listener to the window
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Get the top and bottom positions of the sections
  const headerTop = headerSection.offsetTop;
  const headerBottom = headerSection.offsetTop + headerSection.offsetHeight;
  const aboutTop = aboutSection.offsetTop;
  const aboutBottom = aboutSection.offsetTop + aboutSection.offsetHeight;

  // Check if the scroll position is within the about section
  if (scrollPosition >= aboutTop && scrollPosition < aboutBottom) {
    // Scroll to the center of the about section
    aboutSection.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  }
});

//from to send message to my email ---------------------------------
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  if (!name.value || !email.value || !message.value) {
    alert('Please fill in all fields.');
    return;
  }

  setTimeout(() => {
    form.submit();
    alert('Message sent successfully!');
  }, 100); // Delay form submission by 100 milliseconds
});

