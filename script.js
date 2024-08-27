// const sections = document.querySelectorAll("section");
// const navLi = document.querySelectorAll("nav .container ul li");
// window.onscroll = () => {
//   var current = "";

//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     if (pageYOffset >= sectionTop - 60) {
//       current = section.getAttribute("id"); }
//   });

//   navLi.forEach((li) => {
//     li.classList.remove("active");
//     if (li.classList.contains(current)) {
//       li.classList.add("active");
//     }
//   });
// };
document.addEventListener('DOMContentLoaded', function () {
  const scrollLinks = document.querySelectorAll('.navbar-nav a');

  scrollLinks.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);

          window.scrollTo({
              top: targetSection.offsetTop - 70,
              behavior: 'smooth'
          });
      });
  });
});
window.addEventListener('DOMContentLoaded', function() {
  var portfolio = document.getElementById('portfolio');
  
  portfolio.addEventListener('wheel', function(event) {
    event.preventDefault();
    
    var delta = event.deltaY || event.detail || event.wheelDelta;
    
    portfolio.scrollTop += delta;
  });
});

(function() {
  'use strict';

  // Définir les variables
  var timelines = document.querySelectorAll('.timeline2');

  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  function callbackFunc() {
    timelines.forEach(function(timeline) {
      var parentRect = timeline.getBoundingClientRect();
      var items = timeline.querySelectorAll("li");

      items.forEach(function(li) {
        var rect = li.getBoundingClientRect();
        if (rect.bottom <= (parentRect.top + (rect.height / 2)) || rect.top >= (parentRect.bottom - (rect.height / 2))) {
          li.classList.remove("in-view");
        } else {
          li.classList.add("in-view");
        }
      });
    });
  }

  var updateLayout = debounce(function() {
    callbackFunc();
  }, 500);

  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", updateLayout);
  window.addEventListener("scroll", callbackFunc);

  timelines.forEach(function(timeline) {
    timeline.addEventListener("scroll", callbackFunc);
  });
})();





