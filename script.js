const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const top = window.scrollY;
    if (top >= section.offsetTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

const gradient = document.querySelector(".mouse-gradient");

document.addEventListener("mousemove", (e) => {
  gradient.style.left = `${e.clientX}px`;
  gradient.style.top = `${e.clientY}px`;
});
 