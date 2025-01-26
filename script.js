const secOne = document.querySelector('.sec-1');
const thumbnails = document.querySelectorAll('.thumbnail');
const thumbCont = document.querySelector('.thumbnails-container');
const thumbContRectTop = thumbCont.getBoundingClientRect().top
const cards = document.querySelectorAll('.card');

thumbnails.forEach((thumbnail, index) => {
    thumbnail.style.zIndex = thumbnails.length - index;
})

cards.forEach((card, index) => {
    card.style.zIndex = cards.length - index;
})

window.addEventListener('scroll', () => {
    let distance = window.innerHeight / 2.5;
    let topVal = secOne.getBoundingClientRect().top;
    let index = -1 * (topVal / distance + 1);
    
    index = Math.floor(index);
    for ( let i=0; i < thumbnails.length - 1; i++) {
        let newY = -800;

        if (i <= index) {
            thumbnails[i].style.transform = `translateY(${newY}px)`;
            cards[i].style.transform = `translateY(${newY}px)`;
        } else {
            thumbnails[i].style.transform = `translateY(0%)`;
            cards[i].style.transform = `translateY(0%)`;
        }
    } 
})