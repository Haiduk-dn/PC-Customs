function updateClock () {
    const clock = document.querySelector('.clock');
    clock.innerText = new Date().toLocaleTimeString();
    clock.style.color = 'crimson';
    clock.style.fontSize = '25px';
}
setInterval(updateClock, 1000);