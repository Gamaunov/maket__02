function pageLoaded() {
  //slider
  const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-left",
      prevEl: ".swiper-button-right",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      590: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });

  //menu
  const hamb = document.querySelector("#hamb");
  const popup = document.querySelector(".popup");
  const menu = document.querySelector("#menu").cloneNode(1);
  const body = document.body;

  hamb.addEventListener("click", hambHandler);

  function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
  }

  function renderPopup() {
    popup.appendChild(menu);
  }
}
window.addEventListener("DOMContentLoaded", pageLoaded);
