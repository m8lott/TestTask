document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.querySelector(".overlay");
  document.getElementById("burger").addEventListener("click", function () {
    document.getElementById("mobileMenu").classList.add("open");
    overlay.classList.toggle("active");
  });
  document.getElementById("closeMenu").addEventListener("click", function () {
    document.getElementById("mobileMenu").classList.remove("open");
    overlay.classList.remove("active");
  });

  function setOverlayHeight() {
    if (overlay) {
      overlay.style.height = `${document.documentElement.scrollHeight}px`;
    }
  }
  function closeMenu() {
    overlay.classList.remove("active");
    document.getElementById("mobileMenu").classList.remove("open");
  }
  setOverlayHeight();
  window.addEventListener("resize", setOverlayHeight);
  window.addEventListener("scroll", setOverlayHeight);
  overlay.addEventListener("click", closeMenu);
});
