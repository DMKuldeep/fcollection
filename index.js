document.querySelectorAll('.position-relative').forEach(container => {
    const video = container.querySelector('.video');
    
    container.addEventListener('mouseenter', () => {
      video.play(); // Play the video on hover
    });
  
    container.addEventListener('mouseleave', () => {
      video.pause(); // Pause the video when not hovering
      video.currentTime = 0; // Reset video to start
    });
  });