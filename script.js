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
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  // Vérifie le thème actuel
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
      document.body.setAttribute('data-theme', 'dark');
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
  } else {
      document.body.setAttribute('data-theme', 'light');
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
  }

  themeToggle.addEventListener('click', () => {
      const isDark = document.body.getAttribute('data-theme') === 'dark';
      if (isDark) {
          // Passer en thème clair
          document.body.setAttribute('data-theme', 'light');
          themeIcon.classList.remove('fa-sun');
          themeIcon.classList.add('fa-moon');
          localStorage.setItem('theme', 'light');
      } else {
          // Passer en thème sombre
          document.body.setAttribute('data-theme', 'dark');
          themeIcon.classList.remove('fa-moon');
          themeIcon.classList.add('fa-sun');
          localStorage.setItem('theme', 'dark');
      }
  });
});

// Fonction pour taper le texte lettre par lettre
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

// Appel de la fonction avec ton nom et prénom
document.addEventListener("DOMContentLoaded", function() {
  typeText("typed-name", "Laura MIGUEL", 150);
});

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");

  // Fonction pour gérer la classe shrink au défilement
  const handleScroll = () => {
      if (window.scrollY > 100) { // Si l'utilisateur a défilé de plus de 100px
          navbar.classList.add("shrink"); // Ajouter la classe shrink
      } else {
          navbar.classList.remove("shrink"); // Retirer la classe shrink
      }
  };

  // Écouter l'événement de défilement
  window.addEventListener("scroll", handleScroll);
});















