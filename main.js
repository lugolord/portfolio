let body = document.querySelector('body');

window.onload = () => {

    body.animate({opacity: 1}, 2000);
    
    setTimeout(() => {body.style.opacity = 1}, 2000);
}