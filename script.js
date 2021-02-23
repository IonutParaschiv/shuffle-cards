const items = [
  {
    number: 1,
  },
  {
    number: 2,
  },
  {
    number: 3,
  },
  {
    number: 4,
  },
  {
    number: 5,
  },
  {
    number: 6,
  },
  {
    number: 7,
  },
  {
    number: 8,
  },
  {
    number: 9,
  },
];


const shuffleCards = () => {
  items.sort(() => Math.random() - 0.5);
  renderElements();
};

const sortCards = () => {
  items.sort((a, b) => a.number - b.number );
  renderElements();
};

const renderElements = () => {
  const elements = items.map((item, i) => {
    return `<div class="flex-item card card-${item.number}"><span>${item.number}</span></div>`;
  });

  document.getElementById("cardsContainer").innerHTML = elements.join(" ");
};

document
  .getElementById("shuffleButton")
  .addEventListener("click", shuffleCards);

document.getElementById("sortButton").addEventListener("click", sortCards);

renderElements();

