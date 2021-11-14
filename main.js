let body = document.querySelector('body');

window.onload = () => {
    console.log('se cargo todo');
    body.animate({opacity: 1}, 2000);
    setTimeout(() => {body.style.opacity = 1}, 2000);
}