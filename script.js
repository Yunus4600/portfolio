// Configuration object for easy updates
const CONFIG = {
  animations: {
    typing: {
      duration: 3,
      steps: 40,
    },
    scroll: {
      offset: 100,
      delay: 500,
    },
    projectCard: {
      duration: 0.6,
      stagger: 0.2,
    },
    modal: {
      transition: 0.3,
    },
  },
  selectors: {
    typewriter: ".typewriter-text",
    mobileMenu: "#mobileMenu",
    modal: "#contactModal",
    sections: "section[id]",
    projectCards: ".project-card",
    skillProgress: ".skill-progress",
  },
};

// Typewriter Animation Function
function restartTypewriterAnimation() {
  // Scroll to top smoothly
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  // Wait for scroll to complete before starting animation
  setTimeout(() => {
    const typewriterText = document.querySelector(CONFIG.selectors.typewriter);
    if (!typewriterText) return; // Safety check

    // Reset the animation
    typewriterText.style.animation = "none";
    typewriterText.style.width = "0";
    // Force a reflow
    void typewriterText.offsetWidth;
    // Start the animation again
    typewriterText.style.animation = `typing ${CONFIG.animations.typing.duration}s steps(${CONFIG.animations.typing.steps}, end) forwards`;
  }, CONFIG.animations.scroll.delay);
}

// Mobile Menu Functions
function toggleMobileMenu() {
  const menu = document.querySelector(CONFIG.selectors.mobileMenu);
  if (!menu) return; // Safety check

  const isOpen = menu.classList.contains("hidden");
  menu.classList.toggle("hidden");
  document.body.style.overflow = isOpen ? "hidden" : "";
}

// Project Details Toggle Function
function toggleProjectDetails(button) {
  const details = button
    .closest(".project-card")
    .querySelector(".project-card-details");
  const isOpen = details.classList.contains("open");
  details.classList.toggle("open");
  button.innerHTML = isOpen ? "View Details →" : "Hide Details ←";
}

// Scroll Animation Observer
const observeElements = () => {
  // Create a single observer instance
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.target) return; // Safety check

        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");

          // Handle skill progress bars
          if (
            entry.target.classList.contains(
              CONFIG.selectors.skillProgress.slice(1)
            )
          ) {
            const progressBar = entry.target.querySelector(".bg-sky-600");
            if (progressBar && progressBar.dataset.width) {
              progressBar.style.width = `${progressBar.dataset.width}%`;
            }
          }
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observe project cards
  document.querySelectorAll(".project-card").forEach((card) => {
    card.classList.add(
      "opacity-0",
      "translate-y-8",
      "transition-all",
      "duration-700"
    );
    observer.observe(card);
  });

  // Observe skill progress bars
  document.querySelectorAll(".skill-progress").forEach((skill) => {
    observer.observe(skill);
  });

  // Observe sections
  document.querySelectorAll("section").forEach((section) => {
    section.classList.add(
      "opacity-0",
      "translate-y-8",
      "transition-all",
      "duration-700"
    );
    observer.observe(section);
  });
};

// Active Navigation Link Styling on Scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("header nav a");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Contact Form Modal Functions
function openContactModal() {
  const modal = document.querySelector(CONFIG.selectors.modal);
  if (!modal) return; // Safety check

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeContactModal() {
  const modal = document.querySelector(CONFIG.selectors.modal);
  if (!modal) return; // Safety check

  modal.classList.remove("active");
  document.body.style.overflow = "";

  const form = document.getElementById("contactForm");
  if (form) form.reset();
}

// Form submission is handled by Formspree directly

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  try {
    // Initialize observers
    observeElements();

    // Setup scroll event handler
    if (typeof updateActiveNavLink === "function") {
      window.addEventListener("scroll", updateActiveNavLink);
    }

    // Setup modal handlers
    const modal = document.querySelector(CONFIG.selectors.modal);
    if (modal) {
      modal.addEventListener("click", function (e) {
        if (e.target === this) {
          closeContactModal();
        }
      });
    }

    // Setup mobile menu handlers
    const mobileMenu = document.querySelector(CONFIG.selectors.mobileMenu);
    if (mobileMenu) {
      const menuLinks = mobileMenu.querySelectorAll("a");
      menuLinks.forEach((link) => {
        link.addEventListener("click", toggleMobileMenu);
      });
    }

    // Log successful initialization
    console.log("Portfolio successfully initialized");
  } catch (error) {
    console.error("Error during initialization:", error);
  }
});

// Add CSS animations
const style = document.createElement("style");
style.textContent = `
  @keyframes slideDown {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .name-animation {
    position: relative;
  }

  .animate-slide-down {
    animation: slideDown 0.8s ease-out forwards,
               fadeIn 1s ease-out forwards;
  }

  .animate-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }

  .project-card {
    transition: all 0.3s ease-in-out;
  }

  .project-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  .project-card img {
    transition: transform 0.3s ease-in-out;
  }

  .project-card:hover img {
    transform: scale(1.02);
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .project-card {
    animation: fadeInUp 0.6s ease-out forwards;
    opacity: 0;
  }

  .project-card:nth-child(2) {
    animation-delay: 0.2s;
  }

  .project-card-details {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
  }

  .project-card-details.open {
    max-height: 500px;
    transition: max-height 0.5s ease-in;
  }

  #mobileMenu {
    transition: opacity 0.3s ease-in-out;
  }

  #mobileMenu > div {
    transition: transform 0.3s ease-in-out;
    transform: translateX(100%);
  }

  #mobileMenu:not(.hidden) > div {
    transform: translateX(0);
  }
`;
document.head.appendChild(style);
