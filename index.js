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


// const icons = document.querySelectorAll('.icon');
// const contents = document.querySelectorAll('.collections');

// icons.forEach(icon => {
//     icon.addEventListener('click', () => {
//         const targetId = icon.getAttribute('data-target');
        
//         // Hide all content divs
//         contents.forEach(content => content.classList.remove('active'));
        
//         // Show the selected content div
//         document.getElementById(targetId).classList.add('active');
//     });
// });

const icons = document.querySelectorAll('.icon');
const contents = document.querySelectorAll('.collections');

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        const targetId = icon.getAttribute('data-target');
        
        // Remove active class from all icons and content divs
        icons.forEach(i => i.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));

        // Add active class to the clicked icon
        icon.classList.add('active');

        // Show the selected content div
        document.getElementById(targetId).classList.add('active');
    });
});
