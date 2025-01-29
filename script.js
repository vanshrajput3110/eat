// Select the navigation element
const nav = document.getElementById('nav');

// Function to toggle 'scrolled' class based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
var main = document.querySelector('#main')
var crsr = document.querySelector('#cursor')

main.addEventListener('mousemove',function(dets){
    crsr.style.left= dets.x+'px'
    crsr.style.top=dets.y+'px'
})