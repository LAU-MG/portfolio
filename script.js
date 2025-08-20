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
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          filterButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');

          const category = button.getAttribute('data-category');

          galleryItems.forEach(item => {
              const itemCategory = item.getAttribute('data-category');
              if (category === 'all' || itemCategory === category) {
                  item.style.display = 'block';
              } else {
                  item.style.display = 'none';
              }
          });
      });
  });

  document.querySelector('.filter-btn.active').click();
});

document.querySelectorAll('.category-title').forEach(title => {
  title.addEventListener('click', () => {
      const category = title.parentElement;
      if (category.classList.contains('open')) {
          category.classList.remove('open');
      } else {
          document.querySelectorAll('.competence-category').forEach(c => c.classList.remove('open'));
          category.classList.add('open');
      }
  });
});


// Fonction pour taper le texte lettre par lettre
document.addEventListener("DOMContentLoaded", () => {
  const firstName = "Laura Miguel"; 
  const typingSpeed = 100; 

  typeText("typed-name", firstName, typingSpeed);
});

function typeText(elementId, text, speed) {
  let i = 0;
  const element = document.getElementById(elementId);

  function typeWriter() {
      if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
      }
  }
  typeWriter();
}

const toggle = document.getElementById("navbar-toggle");
const menu = document.getElementById("navbar-menu");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  menu.classList.toggle("active");
});







