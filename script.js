const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const proposalScreen = document.getElementById('proposal-screen');
const successScreen = document.getElementById('success-screen');

// Move the "No" button when hovered
noBtn.addEventListener('mouseover', () => {
    // Calculate random positions within the window
    // Subtracting button dimensions to keep it inside the screen
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    noBtn.style.position = 'fixed'; // Makes it jump anywhere on screen
});

// Show the success screen when "Yes" is clicked
yesBtn.addEventListener('click', () => {
    proposalScreen.classList.add('hidden');
    successScreen.classList.remove('hidden');
    
    // Optional: add a little console secret
    console.log("Mission Accomplished! Love is in the air.");
});