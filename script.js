// Function to open the sidenav
function openNav() {
  document.getElementById("mySidenav").classList.add("open");
  document.getElementById("overlay").classList.add("show");
}

// Function to close the sidenav
function closeNav() {
  document.getElementById("mySidenav").classList.remove("open");
  document.getElementById("overlay").classList.remove("show");
}

// Close the sidenav if clicked outside
window.onclick = function(event) {
  if (!event.target.closest('.sidenav') && !event.target.closest('.btnn')) {
      closeNav();
  }
}




document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('dark-mode-toggle');
  const body = document.body;
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');

  // Function to apply the theme based on the local storage or system preference
  function applyTheme() {
      const storedTheme = localStorage.getItem('theme');
      const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

      if (storedTheme === 'dark' || (storedTheme === null && prefersDarkScheme)) {
          body.classList.add('dark-mode');
          moonIcon.style.display = 'inline';
          sunIcon.style.display = 'none';
      } else {
          body.classList.remove('dark-mode');
          moonIcon.style.display = 'none';
          sunIcon.style.display = 'inline';
      }
  }

  // Apply the theme when the page loads
  applyTheme();

  // Toggle theme on button click
  toggleButton.addEventListener('click', () => {
      body.classList.toggle('dark-mode');

      // Toggle icons
      if (body.classList.contains('dark-mode')) {
          moonIcon.style.display = 'inline';
          sunIcon.style.display = 'none';
          localStorage.setItem('theme', 'dark');
      } else {
          moonIcon.style.display = 'none';
          sunIcon.style.display = 'inline';
          localStorage.setItem('theme', 'light');
      }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('dark-mode-togglee');
  const body = document.body;
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');

  // Function to apply the theme based on the local storage or system preference
  function applyTheme() {
      const storedTheme = localStorage.getItem('theme');
      const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

      if (storedTheme === 'dark' || (storedTheme === null && prefersDarkScheme)) {
          body.classList.add('dark-mode');
          moonIcon.style.display = 'inline';
          sunIcon.style.display = 'none';
      } else {
          body.classList.remove('dark-mode');
          moonIcon.style.display = 'none';
          sunIcon.style.display = 'inline';
      }
  }

  // Apply the theme when the page loads
  applyTheme();

  // Toggle theme on button click
  toggleButton.addEventListener('click', () => {
      body.classList.toggle('dark-mode');

      // Toggle icons
      if (body.classList.contains('dark-mode')) {
          moonIcon.style.display = 'inline';
          sunIcon.style.display = 'none';
          localStorage.setItem('theme', 'dark');
      } else {
          moonIcon.style.display = 'none';
          sunIcon.style.display = 'inline';
          localStorage.setItem('theme', 'light');
      }
  });
});




document.addEventListener('DOMContentLoaded', () => {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  const rootElement = document.documentElement; // For scrolling compatibility

  // Function to handle the scroll event
  function handleScroll() {
      // Check if the user is near the bottom of the page
      if (window.innerHeight + window.scrollY >= rootElement.scrollHeight - 100) {
          scrollToTopBtn.classList.add('visible');
      } else {
          scrollToTopBtn.classList.remove('visible');
      }
  }

  // Function to scroll back to the top
  function scrollToTop() {
      rootElement.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  }

  // Add event listener for scroll event
  window.addEventListener('scroll', handleScroll);

  // Add click event to the button
  scrollToTopBtn.addEventListener('click', scrollToTop);
});




// Updated job data array
const jobs = {
  job1: {
      title: "Web Developer Intern",
      details: "Codezeal Technologies | Ranchi, Jharkhand<br>Feb 2023 - Apr 2023",
      links: null,
      //[{ text: "GitHub", url: "https://github.com/your-github-link" }],//
      guide: null,
      description: [
          '<strong>Java Back-End Development:</strong> Contributed to robust server-side logic and database connectivity using Java, ensuring scalable web applications.',
          '<strong>Front-End Expertise:</strong> Designed visually appealing and responsive user interfaces with HTML, CSS, Bootstrap, and JavaScript, prioritizing a modern and mobile-friendly user experience.',
          '<strong>MySQL Database Management:</strong> Designed and implemented efficient and secure database architectures using MySQL'
      ],
      images: null,
  },
  // Add more job profiles here

};
// Get popup elements
const popup = document.getElementById('job-popup');
const popupBtns = document.querySelectorAll('.popup-btn');
const closePopup = document.getElementById('close-popup');
const body = document.body; // Get body element

// Popup content elements
const jobTitle = document.getElementById('job-title');
const jobDetails = document.getElementById('job-details');
const jobLinks = document.getElementById('job-links');
const jobGuide = document.getElementById('job-guide');
const jobDescription = document.getElementById('job-description');
const jobImagesContainer = document.getElementById('job-images');

// Show the popup with dynamic content
popupBtns.forEach(btn => {
  btn.addEventListener('click', () => {
      const jobId = btn.getAttribute('data-job');
      const job = jobs[jobId];

      // Populate the popup with job data
      jobTitle.innerHTML = job.title;
      jobDetails.innerHTML = job.details;

      // Populate links if they exist
      if (job.links && job.links.length > 0) {
          jobLinks.innerHTML = job.links
              .map(link => `<a href="${link.url}" target="_blank">${link.text}</a>`)
              .join(' | ');
      } else {
          jobLinks.innerHTML = ''; // Clear if no links
      }

      // Populate guide if it exists
      jobGuide.innerHTML = job.guide ? `<strong>Guide:</strong> ${job.guide}` : '';

      jobDescription.innerHTML = job.description.map(item => `<li>${item}</li>`).join('');

      // Populate images if they exist
      if (job.images && job.images.length > 0) {
          jobImagesContainer.innerHTML = job.images
              .map(image => `<img src="${image}" alt="Job Image">`)
              .join('');
      } else {
          jobImagesContainer.innerHTML = ''; // Clear if no images
      }

      // Show popup and disable background scroll
      popup.style.display = 'flex';
      body.classList.add('body-no-scroll');
  });
});

// Close the popup and enable background scrolling
closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
  body.classList.remove('body-no-scroll');
});

// Close the popup when clicking outside the content
window.addEventListener('click', (e) => {
  if (e.target === popup) {
      popup.style.display = 'none';
      body.classList.remove('body-no-scroll');
  }
});