// // // Get the button element
// var scrollToTopBtn = document.getElementById("scroll-to-top-btn");

// // When the user scrolls down 20px from the top of the document, show the button
// document.body.addEventListener("click", () => {
//   console.log("object", document.body.scrollTop);
// });
// window.onscroll = function () {
//   console.log("scroll to ", document.body.scrollTop);
//   if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
//     scrollToTopBtn.style.display = "block";
//   } else {
//     scrollToTopBtn.style.display = "none";
//   }
// };

// // When the user clicks on the button, scroll to the top of the document
// scrollToTopBtn.addEventListener("click", function () {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// });

var hero = document.querySelector(".hero");
var scrollToTopBtn = document.querySelector("#scroll-to-top-btn");
var isHeroScrolled = false;
console.log('fuck')
hero.addEventListener('click', console.log("Scrolled"))

window.addEventListener("scroll", function () {
  console.log("ddd");
  if (window.scrollY >= hero.offsetHeight) {
    console.log(hero.offsetHeight);
    console.log("win")
    // If the user has scrolled past the hero section
    isHeroScrolled = true;
    // scrollToTopBtn.style.display = "block";
    scrollToTopBtn.classList.remove("axy", 'container');
    scrollToTopBtn.classList.add("sticky", 'w-screen', 'bg-white');
    console.log("sticky removed")

  } else {
    isHeroScrolled = false;
    // scrollToTopBtn.style.display = "none";
    scrollToTopBtn.classList.add("axy", 'container');
    scrollToTopBtn.classList.remove("sticky", 'w-screen','bg-white');
    console.log("sticky removed")
  }
});

scrollToTopBtn.addEventListener("click", function () {
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: "smooth" });
});
