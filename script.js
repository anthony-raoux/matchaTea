const toggler = document.querySelector(".hamburger");
const navLinksContainer = document.querySelector(".navlinks-container");

const toggleNav = e => {
  // Animation du bouton
  toggler.classList.toggle("open");

  const ariaToggle =
    toggler.getAttribute("aria-expanded") === "true" ? "false" : "true";
  toggler.setAttribute("aria-expanded", ariaToggle);

  // Slide de la navigation
  navLinksContainer.classList.toggle("open");
};

toggler.addEventListener("click", toggleNav);

// Exécuter la fonction au chargement de la page
window.addEventListener("load", () => {
  if (window.innerWidth > 768) {
    navLinksContainer.classList.add("open");
  }
});

// Observateur de redimensionnement
new ResizeObserver(entries => {
  if (window.innerWidth > 768) {
    navLinksContainer.classList.add("open");
  } else {
    navLinksContainer.classList.remove("open");
  }
}).observe(document.body);
