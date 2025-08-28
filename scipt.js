// ✅ Toggle the navigation menu with icon change
const toggleBtn = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-right ul');
const toggleIcon = document.querySelector('.nav-toggle-icon');

toggleBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  toggleBtn.classList.toggle('active');
});

// ✅ Handle the contact form submission
const contactForm = document.querySelector('#contact form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    fetch('https://formspree.io/f/mwkgbzzn', {  

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
}

// ✅ Open project links in a new tab
document.querySelectorAll('#projects li a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(link.href, '_blank');
  });
});

// ✅ Typing effect for the about section
if (document.querySelector('#element')) {
  new Typed('#element', {
    strings: ['MERN Stack Developer', 'Freelancer', 'Web Developer'],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 2000,
    loop: true,
  });
}

// ✅ Scrollspy for the navigation menu
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-right ul li a');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 50;
    const sectionHeight = section.offsetHeight;

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      const id = section.getAttribute('id');
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
});

// ✅ Smooth scrolling for navigation links
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 50,
        behavior: 'smooth',
      });
    }
  });
});
const resumeBtn = document.querySelector('.resume-button');
resumeBtn.addEventListener('click', () => {
  showToast("📄 Resume download started!");
});

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerText = message;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3000);
}



