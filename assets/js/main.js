const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

function scrollHeader() {
  const header = document.getElementById("header");
  if (window.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}

window.addEventListener("scroll", scrollHeader);
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (window.scrollY >= 200) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll", scrollUp);

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

const sr = ScrollReveal({
  distance: "60px",
  duration: 2000,
  delay: 400,
});

sr.reveal(`.home__header, .section__title,  .accordion__container`, {
  delay: 600,
});
sr.reveal(`.home__footer`, { delay: 700 });
sr.reveal(`.home__img, .feature__container`, {
  delay: 900,
  origin: "top",
});

sr.reveal(`.pricing__animation-two`, {
  delay: 700,
  origin: "top",
});

sr.reveal(`.feature__img, .footer__content, .footer__copy`, {
  origin: "top",
  interval: 100,
});
sr.reveal(`.specs__data, .goto__animate`, { origin: "left", interval: 100 });

sr.reveal(`.specs__img, .goto__img, .pricing__animation-one`, {
  origin: "right",
});

sr.reveal(`.pricing__animation-three`, { origin: "left" });
sr.reveal(`.about__img`, { origin: "top" });

sr.reveal(`.about__data, .goto__container`);
