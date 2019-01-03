const data = [
  "img/candy-cane.svg",
  "img/christmas-tree.svg",
  "img/gift.svg",
  "img/santa-claus.svg",
  "img/candies.svg",
  "img/snowman.svg"
];
let isFlipped = false;
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
    let attribute = item.split("/")[1];
    let div = document.createElement("div");
    div.className = "memory-card";
    div.setAttribute("pair", attribute);

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
  let firstCard, secondCard;

  grid.addEventListener("click", function(event) {
    console.log(arguments.callee);
    let target = event.target;
    let parent = target.parentElement;
    parent.classList.toggle("flip");
    if (!isFlipped) {
      isFlipped = true;
      firstCard = parent;
      console.log(firstCard.getAttribute("pair"));
    } else {
      isFlipped = false;
      secondCard = parent;
      console.log(secondCard.getAttribute("pair"));
      
      if (firstCard.getAttribute("pair") === secondCard.getAttribute("pair")) {
        firstCard.removeEventListener("click", arguments.callee);
        secondCard.removeEventListener("click", arguments.callee);
      } else {
        setTimeout(() => {
          firstCard.classList.remove("flip");
          secondCard.classList.remove("flip");
        }, 1000);
      }
    }
  });
}

function playGame() {
  shufleCards();
  createCards();
  flipCards();
}
playGame();
