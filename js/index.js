import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper(".special__slider", {
  // Optional parameters
  loop: true,
  spaceBetween: -2,
  speed: 1000,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiperMenu = new Swiper(".slider", {
  // Optional parameters
  slidesPerView: 2,
  grid: {
    rows: 2,
  },
  speed: 500,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const tabs = document.querySelector(".tabs");
const menuSlider = document.querySelectorAll(".menu__slider-container");

tabs.addEventListener("click", (e) => {
  if (e.target.classList.contains("tabs__item")) {
    tabs
      .querySelectorAll(".tabs__item")
      .forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
  }

  menuSlider.forEach((slider) => slider.classList.remove("show"));
  const tabIndex = e.target.dataset.tab;
  const thisSwiper = document.querySelector(tabIndex);
  thisSwiper.classList.add("show");
});

const overflowTabs = () => {
  const innerTabs = document.querySelector(".tabs");
  const outerTabs = document.querySelector(".tabs-container");

  innerTabs.offsetWidth > outerTabs.offsetWidth
    ? innerTabs.classList.add("overflow")
    : innerTabs.classList.remove("overflow");
};

window.addEventListener("load", overflowTabs);
window.addEventListener("resize", overflowTabs);
