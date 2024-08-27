document.addEventListener("DOMContentLoaded", function () {
  // Section One
  document
    .querySelector("#section-one")
    .addEventListener("click", function (event) {
      event.preventDefault();
      document
        .querySelector("#top-of-page")
        .scrollIntoView({ behavior: "smooth" });
    });

  // Section Two
  document
    .querySelector("#section-two")
    .addEventListener("click", function (event) {
      event.preventDefault();
      document
        .querySelector("#scroll-to-second-section")
        .scrollIntoView({ behavior: "smooth" });
    });

  // Section Three
  document
    .querySelector("#section-three")
    .addEventListener("click", function (event) {
      event.preventDefault();
      document
        .querySelector("#scroll-to-third")
        .scrollIntoView({ behavior: "smooth" });
    });

  // Section Four
  document
    .querySelector("#section-four")
    .addEventListener("click", function (event) {
      event.preventDefault();
      document
        .querySelector("#scroll-to-fourth-section")
        .scrollIntoView({ behavior: "smooth" });
    });

  // Section Five
  document
    .querySelector("#section-five")
    .addEventListener("click", function (event) {
      event.preventDefault();
      document.querySelector("#select").scrollIntoView({ behavior: "smooth" });
    });

  // Section Six
  document
    .querySelector("#section-six")
    .addEventListener("click", function (event) {
      event.preventDefault();
      document
        .querySelector("#scroll-to-sixth")
        .scrollIntoView({ behavior: "smooth" });
    });
});

//x button
document.addEventListener("DOMContentLoaded", function () {
  const closeMenuButton = document.querySelector(".close-menu-button");
  const dropdownContent = document.querySelector(".dropdown-content");

  closeMenuButton.addEventListener("click", function () {
    dropdownContent.style.display = "none";
  });
});

//bar button
function openMenu(event) {
  let dropdownContent = document.querySelector(".dropdown-content");
  dropdownContent.classList.toggle("show");
}

let barButton = document.querySelector(".dropdownbtn");
barButton.addEventListener("click", openMenu);
