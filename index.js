class nav_link {
  constructor() {
    this.menu = document.getElementById("menu");
    this.close = document.getElementById("close");
    this.navbar = document.getElementById("navbar");
    this.navLinks = document.querySelectorAll(".nav_link");

    this.menu_open();
    this.menu_close();
    this.link_open();
  }

  menu_open() {
    this.menu.addEventListener("click", () => {
      this.navbar.classList.remove("hidden");
      this.close.classList.remove("hidden");
      this.menu.classList.add("hidden");
    });
  }
  menu_close() {
    this.close.addEventListener("click", () => {
      this.navbar.classList.add("hidden");
      this.close.classList.add("hidden");
      this.menu.classList.remove("hidden");
    });
  }
  link_open() {
    this.navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        this.navbar.classList.add("hidden");
        this.menu.classList.remove("hidden");
        this.close.classList.add("hidden");
      });
    });
  }
}

const nav = new nav_link();


document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');
console.log(navLinks);
  function setActiveLink() {
    const scrollPosition = window.scrollY;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100; // Adjust for any fixed header height
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        const sectionId = section.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  // Add event listener for scroll event
  window.addEventListener('scroll', setActiveLink);

  // Call setActiveLink initially to set active link on page load
  setActiveLink();
});

