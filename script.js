const navToggle = document.querySelector(".nav-toggle");
const navigation = document.querySelector(".nav-links");

if (navToggle && navigation) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.classList.toggle("open");
    navigation.classList.toggle("active");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("open");
      navigation.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}
