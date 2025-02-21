document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  const authButton = document.querySelector(".auth");
  const popup = document.querySelector(".popup");

  if (authButton && popup) {
    authButton.addEventListener("click", function () {
      gsap.fromTo(
        popup,
        { opacity: 0, scale: 0.8, display: "flex" },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
      );
    });

    popup.addEventListener("click", function (event) {
      if (event.target === popup) {
        gsap.to(popup, {
          opacity: 0,
          scale: 0.8,
          duration: 0.5,
          ease: "power2.in",
          onComplete: () => {
            popup.style.display = "none";
          },
        });
      }
    });
  }
  function closePopup() {
    popup.style.display = "none";
  }
  document.querySelector(".close-btn").addEventListener("click", closePopup);
});
