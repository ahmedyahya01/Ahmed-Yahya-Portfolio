// * ===============Dark Light Theme===================== //
const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("mode") == "dark") {
  darkMode();
} else {
  lightMode();
}

themeBtn.addEventListener("click", (e) => {
  if (localStorage.getItem("mode") == "light") {
    darkMode();
  } else {
    lightMode();
  }
});
// !===============Toggle Button===================== //

const bars = document.getElementById("bars");
const closeIcon = document.getElementById("nav-close");
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");

bars.addEventListener("click", () => {
  navMenu.classList.remove("hidden");
});
closeIcon.addEventListener("click", () => {
  navMenu.classList.add("hidden");
});
navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.add("hidden");
  });
});

window.addEventListener("scroll", () => {
  navMenu.classList.add("hidden");
});

function darkMode() {
  html.classList.add("dark");
  themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
  localStorage.setItem("mode", "dark");
}
function lightMode() {
  html.classList.remove("dark");
  themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
  localStorage.setItem("mode", "light");
}
// ! ===============Tabs===================== //

let tabs = document.querySelectorAll(".tab");
let indicator = document.querySelector(".indicator");

const all = document.querySelectorAll(".work-card");
const designs = document.querySelectorAll(".designs");
const jsProjects = document.querySelectorAll(".js-projects");
const reactProjects = document.querySelectorAll(".react-projects");

indicator.style.width = tabs[0].getBoundingClientRect().width + "px";
indicator.style.left =
  tabs[0].getBoundingClientRect().left -
  tabs[0].parentElement.getBoundingClientRect().left +
  "px";

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    indicator.style.width = tab.getBoundingClientRect().width + "px";
    indicator.style.left =
      tab.getBoundingClientRect().left -
      tab.parentElement.getBoundingClientRect().left +
      "px";

    tabs.forEach((t) => t.classList.remove("text-whiteColor"));
    tab.classList.add("text-whiteColor");

    // * =============Change Content===============//
    const tabVal = tab.getAttribute("data-tabs");
    all.forEach((item) => {
      item.style.display = "none";
    });
    if (tabVal == "designs") {
      designs.forEach((item) => {
        item.style.display = "block";
      });
    } else if (tabVal == "js-projects") {
      jsProjects.forEach((item) => {
        item.style.display = "block";
      });
    } else if (tabVal == "react-projects") {
      reactProjects.forEach((item) => {
        item.style.display = "block";
      });
    } else {
      all.forEach((item) => {
        item.style.display = "block";
      });
    }
  });
});

// *===============Scroll Up===================== //
const aboutSection = document.getElementById("about");
const scrollBtn = document.getElementById("scrollUp-btn");

function scrollTop() {
  if (window.scrollY >= aboutSection.offsetTop) {
    scrollBtn.classList.replace("-bottom-1/2", "bottom-5");
  } else {
    scrollBtn.classList.replace("bottom-5", "-bottom-1/2");
  }
}
window.addEventListener("scroll", scrollTop);

scrollBtn.addEventListener("click", () => {
  document.documentElement.scrollTop = "0";
});

// ?===============Change Navbar bg===================== //
const navBar = document.getElementById("navbar");
const headerName = document.querySelector(".headerName");
function changeNavBg() {
  if (this.scrollY >= 50) {
    navBar.classList.add("bg-primaryColor");
    navLink.forEach((anchor) => {
      anchor.classList.add("text-whiteColor");
    });
    headerName.classList.add("text-whiteColor");
    themeBtn.classList.add("text-whiteColor");
    bars.classList.add("text-whiteColor");
  } else {
    navBar.classList.remove("bg-primaryColor");
    navLink.forEach((anchor) => {
      anchor.classList.remove("text-whiteColor");
    });
    headerName.classList.remove("text-whiteColor");
    themeBtn.classList.remove("text-whiteColor");
    bars.classList.remove("text-whiteColor");
  }
}
window.addEventListener("scroll", changeNavBg);

// *=============== Active Link ===================== //
const allSections = document.querySelectorAll("section");
let currentSection = "home";

function activeLink() {
  allSections.forEach((section) => {
    const sectionOffsetTop = section.offsetTop;
    if (this.scrollY >= sectionOffsetTop - 73) {
      currentSection = section.getAttribute("id");
    }
    navLink.forEach((link) => {
      link.classList.remove("active");
      if (link.href.includes(currentSection)) {
        link.classList.add("active");
      }
    });
  });
}
window.addEventListener("scroll", activeLink);

// *=============== Animation ===================== //
const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000,
});

sr.reveal(".person_image");
sr.reveal(".person_content", { origin: "bottom" });
sr.reveal(".head", { origin: "bottom" });
sr.reveal(".content", { origin: "bottom" });
sr.reveal(".about-p", { origin: "bottom" });
sr.reveal(".footer", { origin: "left" });
