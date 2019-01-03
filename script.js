const data = [
  "img/candy-cane.svg",
  "img/christmas-tree.svg",
  "img/gift.svg",
  "img/santa-claus.svg",
  "img/candies.svg",
  "img/snowman.svg"
];

let cards = [];
let grid = document.querySelector(".grid");

function shufleCards() {
  data.forEach(item => {
    cards.push(item);
    cards.push(item);
  });
  cards.sort(() => 0.5 - Math.random());
}

function createCards() {
  cards.forEach(item => {
    let div = document.createElement("div");
    div.className = "memory-card";

    let frontImg = document.createElement("img");
    frontImg.setAttribute("src", item);
    frontImg.className = "front-side";

    let backImg = document.createElement("img");
    backImg.setAttribute("src", "img/snowflake.svg");
    backImg.className = "back-side";

    grid.appendChild(div);
    div.append(frontImg, backImg);
  });
}

function flipCards() {
  grid.addEventListener("click", event => {
    let target = event.target;
    let parent = target.parentElement;
    parent.classList.toggle("flip");
  });
}

function playGame(){
  shufleCards();
  createCards();
  flipCards();

}
playGame();
