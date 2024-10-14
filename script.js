// navlink

document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.forEach(function (link) {
        link.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
});



// numbers

document.addEventListener('DOMContentLoaded', function () {
  const dataElements = document.querySelectorAll('.data');

  dataElements.forEach(element => {
      const endValue = parseInt(element.getAttribute('data-end-value'));
      let startValue = 0;
      const duration = 2000; // Animation duration in milliseconds
      const incrementTime = Math.floor(duration / endValue);
      
      const updateValue = () => {
          if (startValue < endValue) {
              startValue++;
              element.textContent = startValue.toLocaleString() + "+";
              setTimeout(updateValue, incrementTime);
          } else {
              element.textContent = endValue.toLocaleString() + "+";
          }
      };

      updateValue();
  });
});



// animate explore
document.querySelector('.explore-btn').addEventListener('click', function() {
  this.classList.add('animate__shakeX');
  this.addEventListener('animationend', () => {
      this.classList.remove('animate__shakeX');
  });
});
