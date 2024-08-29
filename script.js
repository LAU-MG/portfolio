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
          // Remove 'active' class from all buttons
          filterButtons.forEach(btn => btn.classList.remove('active'));
          // Add 'active' class to the clicked button
          button.classList.add('active');

          // Get the category of the clicked button
          const category = button.getAttribute('data-category');

          // Show/hide gallery items based on the selected category
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

  // Trigger click on the 'Tous' button to show all items by default
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
document.getElementById('theme-toggle').addEventListener('click', function() {
  // Vérifier si l'attribut data-theme est déjà défini sur 'dark'
  if (document.documentElement.getAttribute('data-theme') === 'dark') {
      // Si oui, on le supprime pour revenir au mode clair
      document.documentElement.removeAttribute('data-theme');
      // Modifier le texte du bouton
      this.textContent = 'Mode Sombre';
  } else {
      // Sinon, on le définit sur 'dark' pour passer en mode sombre
      document.documentElement.setAttribute('data-theme', 'dark');
      // Modifier le texte du bouton
      this.textContent = 'Mode Clair';
  }
});














