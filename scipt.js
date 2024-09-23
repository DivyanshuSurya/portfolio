// Toggle the navigation menu
document.querySelector('.nav-toggle').addEventListener('click', () => {
  document.querySelector('.nav-right ul').classList.toggle('active');
});

// Handle the contact form submission
document.querySelector('#contact form').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  fetch('https://formspree.io/f/yourformid', {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert('Thank you for your message. We will get back to you shortly.');
    })
    .catch((error) => {
      console.error(error);
      alert('Oops! Something went wrong. Please try again later.');
    });

  e.target.reset();
});

// Open project links in a new tab
document.querySelectorAll('#projects li a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(link.href, '_blank');
  });
});

// Typing effect for the about section
new Typed('#element', {
  strings: ['MERN Stack Developer', 'Freelancer', 'Web Developer'],
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 2000,
  loop: true,
});

// Scrollspy for the navigation menu
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-right ul li a');

window.addEventListener('scroll', () => {
  let currentScrollPosition = window.scrollY;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 50; // Adjust for navbar height
    const sectionHeight = section.offsetHeight;

    if (currentScrollPosition >= sectionTop && currentScrollPosition < sectionTop + sectionHeight) {
      const activeSectionId = section.getAttribute('id');
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${activeSectionId}`);
      });
    }
  });
});

// Smooth scrolling for navigation links
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetSection = document.querySelector(link.getAttribute('href'));
    window.scrollTo({
      top: targetSection.offsetTop - 50, // Adjust for navbar height
      behavior: 'smooth',
    });
  });
});
