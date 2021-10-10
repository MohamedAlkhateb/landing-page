/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const ul = document.querySelector("ul");
const sections = document.querySelectorAll("section");
const mybutton = document.getElementById("myBtn");
let timer = null;

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function buildNavigationMenu() {
  sections.forEach((element, i) => {
    const a = document.createElement("a");
    const li = document.createElement("li");

    a.href = `#section${i + 1}`;
    a.className = "menu__link";
    a.innerText = `Section ${i + 1}`;
    li.appendChild(a);
    ul.appendChild(li);
  });
}

// Add class 'active' to section when near top of viewport
function setActtiveSection() {
  document.addEventListener("scroll", function () {
    for (const section of sections) {
      if (isInViewport(section) && section.className !== "your-active-class") {
        section.className = "your-active-class";
      } else if (section.className === "your-active-class") {
        section.className = "";
      }
    }
  });
}

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
buildNavigationMenu();

// Scroll to section on link click

// Set sections as active
setActtiveSection();

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

// Hide navigation menu while not scrolling

document.addEventListener("scroll", function () {
  if (timer !== null) {
    ul.style.display = "block";
    clearTimeout(timer);
  }
  timer = setTimeout(function () {
    ul.style.display = "none";
  }, 1000);
});
