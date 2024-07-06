// document.addEventListener('DOMContentLoaded', function() {
//   const navbar = document.getElementById('navbar');
//   const navLinks = navbar.querySelectorAll('a');

  
//   window.addEventListener('scroll', function() {
//       if (window.scrollY > 50) {
//           navbar.style.backgroundColor = '#555';
//       } else {
//           navbar.style.backgroundColor = '#333';
//       }
//   });

  
//   navLinks.forEach(link => {
//       link.addEventListener('mouseenter', function() {
//           link.style.color = 'yellow';
//       });

//       link.addEventListener('mouseleave', function() {
//           link.style.color = 'white';
//       });
//   });
// });

document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('navbar');
  const navLinks = navbar.querySelectorAll('a');

  // Change background color when scrolling
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
          navbar.style.backgroundColor = '#555';
      } else {
          navbar.style.backgroundColor = '#333';
      }
  });

  // Change style when hovering over a menu item
  navLinks.forEach(link => {
      link.addEventListener('mouseenter', function() {
          link.style.color = 'yellow';
      });

      link.addEventListener('mouseleave', function() {
          link.style.color = 'white';
      });
  });
});
