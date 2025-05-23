// Animation trigger
const animateBtn = document.getElementById('animateBtn');
const box = document.getElementById('box');
animateBtn.addEventListener('click', () => {
    box.classList.remove('animate');
    void box.offsetWidth; // force reflow
    box.classList.add('animate');
});
box.addEventListener('animationend', () => {
    box.classList.remove('animate');
});

// LocalStorage for user preferences
const colorPref = document.getElementById('colorPref');
const savePref = document.getElementById('savePref');
// Load preference on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedColor = localStorage.getItem('boxColor');
    if (savedColor) {
        box.style.background = savedColor;
        colorPref.value = savedColor;
    }
});
// Save preference
savePref.addEventListener('click', () => {
    const selectedColor = colorPref.value;
    localStorage.setItem('boxColor', selectedColor);
    box.style.background = selectedColor;
    animateBtn.textContent = 'Preference Saved!';
    setTimeout(() => animateBtn.textContent = 'Bounce the Box!', 1200);
});
