window.addEventListener('DOMContentLoaded', function() {
    var widthDisplay = document.getElementById('widthDisplay');

    function updateWidth() {
      var pageWidth = window.innerWidth;
      widthDisplay.textContent = 'Page width: ' + pageWidth + 'px';
    }

    updateWidth(); 

    window.addEventListener('resize', updateWidth);
  });

