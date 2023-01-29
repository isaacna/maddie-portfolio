document.addEventListener("DOMContentLoaded", function (){
      // Function to generate a random number between a range
      function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
      }

      // Function to check if two divs are overlapping
      function isOverlapping(div1, div2) {
        // Get the positions and sizes of the two divs
        var r1 = div1.getBoundingClientRect();
        var r2 = div2.getBoundingClientRect();

        // Check if the two divs are overlapping
        return !(r2.left > r1.right || 
                r2.right < r1.left || 
                r2.top > r1.bottom ||
                r2.bottom < r1.top);
      }

      function isElementInViewport(e) {
        const rect = e.getBoundingClientRect();
        // TODO: Figure out why images still go past the viewport
        
        ///rect.right < (window.innerWidth - 20 || document.documentElement.clientWidth)
        return rect.left >= 0 && rect.right < container.offsetWidth;
      }

      // Function to scatter the divs randomly without overlapping
      function scatterDivs() {
        // Get the container element
        var container = document.getElementById("container");

        // Get all the divs within the container
        var divs = container.getElementsByTagName("div");

        // Loop through all the divs
        for (var i = 0; i < divs.length; i++) {
          // Only execute if not the top left div 
          if (divs[i].id != "menu") {
            
            widthRange = container.offsetWidth;
            heightRange = container.offsetHeight;

            // If we are dealing with a skinny window (mobile), favor vertical expansion
            if (container.offsetWidth < container.offsetHeight / 2) {
              // TODO: Make the vertical expansion proportional to image size 
              // Increase vertical range proportionally to number of images 
              // Dividing by 5 because images have a max height of 20%
              heightRange = divs.length * (container.offsetHeight / 5) * 2 
            }
            var yDist = heightRange  / 100
            var xDist = widthRange  / 100


            // Generate random positions for the div within the container
            var x = getRandomNumber(0, widthRange  - xDist);
            var y = getRandomNumber(0, heightRange  - yDist);
            console.log("HEIGHT RANGE");
            console.log(heightRange );


            // Set the positions of the div
            divs[i].style.visibility = "visible";
            divs[i].style.left = x + "px";
            divs[i].style.top = y + "px";

            if (!isElementInViewport(divs[i])) {
              console.log("NOT IN VIEWPORT");
              i--;
              continue;
            }

            // Check if the div is overlapping any other divs
            for (var j = 0; j < divs.length; j++) {
              if (i != j && isOverlapping(divs[i], divs[j])) {
                console.log("OVERLAPPING");
                // If the div is overlapping, generate new positions and try again
                i--;
                break;
              }
            }
          }
        }
      }

      // Scatter the divs when the page loads
      window.onload = scatterDivs;

})

$(document).ready(function () {
  $("#image1").click(function () {
    $('#exampleModal').modal('show');
  });
  $("#image2").click(function () {
    $('#exampleModal').modal('show');
  });
});
