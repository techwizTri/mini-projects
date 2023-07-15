"use strict";
const tests = document.querySelectorAll(".test");

tests.forEach((test) => {
  test.addEventListener("click", () => {
    removeActiveClass();
    test.classList.add("active");
  });
});

const removeActiveClass = function (e) {
  tests.forEach((test) => {
    test.classList.remove("active");
  });
};
