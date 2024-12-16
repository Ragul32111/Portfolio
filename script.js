

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animate the skills heading
gsap.from(".skills-heading", {
  opacity: 1,
  y: -50,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".skills-heading",
    start: "top 85%",
    toggleActions: "play none none reverse"
  }
});

// Animate skill boxes
gsap.from(".skills-box", {
  opacity: 1,
  y: 50,
  duration: 1,
  stagger: 0.2, // Adds delay between each skill box
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".skills-section",
    start: "top 85%",
    toggleActions: "play none none reverse"
  }
});

// Animate progress bars
gsap.fromTo(
  ".progress-fill",
  { width: "0%" }, // Initial state
  {
    width: (index, target) => target.dataset.level + "%", // Dynamically set width based on data-level attribute
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".progress-bar",
      start: "top 100%",
      toggleActions: "play none none reverse"
    }
  }
);

// Animate skill icons and text
gsap.from(".skills-box img", {
  opacity: 1,
  scale: 0.8,
  duration: 0.8,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: ".skills-section",
    start: "top 85%",
    toggleActions: "play none none reverse"
  }
});

gsap.from(".skills-box p", {
  opacity: 1,
  y: 30,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".skills-section",
    start: "top 85%",
    toggleActions: "play none none reverse"
  }
});





// Add hover effect for nav links using GSAP
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("mouseenter", () => {
    gsap.to(link, {
      scale: 1.2, // Slightly larger scaling effect
      duration: 0.4, // Smooth hover animation
      ease: "power1.out",
    });
  });
  link.addEventListener("mouseleave", () => {
    gsap.to(link, {
      scale: 1, // Return to original size
      duration: 0.4,
      ease: "power1.out",
    });
  });
});

gsap.from(".header .logo", {
  opacity: 0,
  y: -50,
  duration: 1,
  ease: "power2.out",
});

gsap.from(".nav-links a", {
  opacity: 0,
  y: -20,
  duration: 0.8,
  delay: 0.2,
  stagger: 0.2, // Animate links one after the other
  ease: "power2.out",
});

// Add hover effect for nav links using GSAP
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("mouseenter", () => {
    gsap.to(link, {
      scale: 1.1,
      duration: 0.3,
      ease: "power1.out",
    });
  });
  link.addEventListener("mouseleave", () => {
    gsap.to(link, {
      scale: 1,
      duration: 0.3,
      ease: "power1.out",
    });
  });
});

gsap.from(".content h1", {
  opacity: 0,
  y: -50,
  duration: 1,
  ease: "power2.out",
});

gsap.from(".content h2", {
  opacity: 0,
  x: -50,
  duration: 1,
  delay: 0.3,
  ease: "power2.out",
});

gsap.from(".content p", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.5,
  ease: "power2.out",
  stagger: 0.2,
});



// Social Icons Animation
gsap.from(".social-icons a", {
  opacity: 0,
  scale: 0,
  duration: 1,
  delay: 1,
  ease: "back.out(1.7)",
  stagger: 0.2,
});

// Profile Image Animation
gsap.from(".profile-outline", {
  opacity: 0,
  scale: 0.5,
  duration: 1.5,
  delay: 0.5,
  ease: "elastic.out(1, 0.5)",
});
var typed3 = new Typed('#highlight', {
    strings: ['I am Frontend Developer.','I am Web Developer.'],
    typeSpeed: 50,
    backSpeed: 50,
    smartBackspace: true, // this is a default
    loop: true,
  });
//-------------------------------------------------------------------
// Ensure GSAP and ScrollTrigger are loaded before this script
gsap.registerPlugin(ScrollTrigger);





// Ensure GSAP and ScrollTrigger are loaded before this script
gsap.registerPlugin(ScrollTrigger);

// Animate the "About Me" section image
gsap.from("#about .about-image img", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%", // When the top of the #about section reaches 80% of the viewport
    toggleActions: "play none none reverse", // Play animation on enter, reverse on leave
  },
  opacity: 0,
  scale: 0.8,
  duration: 1.2,
  ease: "power2.out",
});

// Animate the "About Me" section heading
gsap.from("#about .about-content h2", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 50%", // When the top of the #about section reaches 80% of the viewport
    toggleActions: "play none none reverse", // Play animation on enter, reverse on leave
  },
  opacity: 0,
  scale: 1,
  delay:0.3,
  duration: 0.8,
  ease: "power2.out",
});

// Animate the paragraph with class "ab"
gsap.from("#about .about-content .ab", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 60%",
    toggleActions: "play none none reverse",
  },
  x: -100,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  ease: "power2.out",
});

// Animate the social menu icons
gsap.from("#about .social-menu ul li", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 50%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 20,
  duration: 0.5,
  stagger: 0.2, // Add a stagger effect between social icons
  ease: "power2.out",
});


//-------------------------------------------------------------------------
// GSAP animations for skills section
document.addEventListener('DOMContentLoaded', () => {
  // Animate skill boxes on load
  gsap.from('.skills-box', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
    stagger: 0.2,
      });

  // Fill progress bars dynamically based on data-level attribute
  const progressBars = document.querySelectorAll('.progress-fill');
  progressBars.forEach(bar => {
    const level = bar.getAttribute('data-level');
    gsap.to(bar, {
      width: `${level}%`,
      duration: 1.5,
      ease: 'power3.out',
    });
  });
});
//-----------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Animate project heading
    gsap.from(".project-heading", {
        opacity: 0,
        y: -30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#project-showcase",
            start: "top 75%",
        },
    });

    // Stagger animation for project cards
    gsap.from(".project-card", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".project-card-grid",
            start: "top 85%",
        },
    });
});
 document.addEventListener("DOMContentLoaded", function() {
        var swiper = new Swiper('.swiper-container', {
            direction: 'horizontal',  // Slide direction: 'horizontal' or 'vertical'
            loop: true,               // Enable loop
            autoplay: {
                delay: 3000,           // Autoplay delay in milliseconds
                disableOnInteraction: false,  // Continue autoplay even after user interaction
            },
            slidesPerView: 3,         // Display 3 project boxes at once
            spaceBetween: 30,         // Space between the project boxes
            breakpoints: {
                // Responsive settings
               320:
                {
                    slidesPerView:1,
                    spaceBetween:10,
                },
                480:
                {
                    slidesPerView:1,
                    spaceBetween:10,
                },
                768: {
                    slidesPerView: 2,   // For smaller screens, show 1 slide at a time
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 2,   // For larger screens, show 2 slides at a time
                },
            },
        });
    });
//-------------------------------------

 let mybutton = document.getElementById("backtotop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//.--.-.---..-.--.-.-..-.--..---..-.--..--.------.-.-.-...-....-.-.-.-.-.-.-.-.-.-.-


