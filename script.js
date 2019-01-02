const data = [
    'img/cat.png',
    'img/laptop.png',
    'img/git.png',
    'img/heart.png',
    'img/linux.png',
    'img/unicorn.png'
];

let cards = [];

function shufleCards() {
    data.forEach(item => {
        cards.push(item);
        cards.push(item)
    });
    cards.sort(() => 0.5 - Math.random());
}



function createCards() {
    let grid = document.querySelector(".grid");
    cards.forEach(item => {
        let div = document.createElement('div');
        div.className = 'memory-card';
        

        let frontImg = document.createElement('img');
        frontImg.setAttribute('src', item);
        frontImg.className = 'front-side';

        let backImg = document.createElement('img');
        backImg.setAttribute('src', 'img/footprint.png');
        backImg.className = 'back-side';

        grid.appendChild(div);
        div.append(frontImg,backImg);
        
    })



}


shufleCards();
createCards();