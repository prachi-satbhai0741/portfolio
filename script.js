document.addEventListener("DOMContentLoaded", () => {

  const root = document.documentElement;
  const themeButtons = document.querySelectorAll("[data-theme-btn]");

  function setTheme(name) {
    root.setAttribute("data-theme", name);
    themeButtons.forEach(btn => {
      const isActive = btn.dataset.themeBtn === name;
      btn.setAttribute("aria-pressed", String(isActive));
    });
  }

  themeButtons.forEach(btn => {
    btn.addEventListener("click", () => setTheme(btn.dataset.themeBtn));
  });

  const burger = document.getElementById("navBurger");
  const navLinks = document.getElementById("navLinks");

  if (burger && navLinks) {
    burger.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      burger.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  const collabForm = document.getElementById("collabForm");
  if (collabForm) {
    collabForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = collabForm.name.value.trim();
      const interest = collabForm.interest.value;
      const idea = collabForm.idea.value.trim();

      const subject = encodeURIComponent(`Let's collaborate — ${name}`);
      const body = encodeURIComponent(
        `Hi Prachi,\n\nName: ${name}\nInterested in: ${interest}\nProject idea: ${idea}`
      );

      window.location.href = `mailto:prachisatbhai275@gmail.com?subject=${subject}&body=${body}`;
    });
  }

  const toTop = document.getElementById("toTop");
  if (toTop) {
    window.addEventListener("scroll", () => {
      toTop.classList.toggle("visible", window.scrollY > 480);
    });
    toTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

});
