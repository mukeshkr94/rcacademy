document.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".animate");
    const windowHeight = window.innerHeight;
  
    elements.forEach(element => {
      const position = element.getBoundingClientRect().top;
  
      // Check if the element is within the viewport
      if (position < windowHeight - 100) {
        if (!element.classList.contains("active")) {
          element.classList.add("active");
  
          // Remove the active class after the animation ends
          setTimeout(() => {
            element.classList.remove("active");
          }, 1000); // Duration of the animation
        }
      }
    });
  });
  