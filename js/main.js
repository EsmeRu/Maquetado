const data = [
  {
    title: "Art Director",
    subTitle: "Hermés International S.A",
    image: "./assets/img/Logo-Hermes.png",
    place: "Harrisburg, Pennsylvania",
    price: "1,240",
  },
  {
    title: "HR Head of Operations",
    subTitle: "The Coca-Cola Company",
    image: "./assets/img/Coca-Cola-Logo.png",
    place: "Atlanta, Georgia",
    price: "1,980",
  },
  {
    title: "Business Strategy Associate",
    subTitle: "Dropbox, Inc.",
    image: "./assets/img/Dropbox.png",
    place: "San Francisco, California",
    price: "3,100",
  },
  {
    title: "Financial Analyst",
    subTitle: "McDonald's Corporation",
    image: "./assets/img/McDonald.png",
    place: "Columbus, Ohio",
    price: "2,600",
  },
];

const templateCard = function ({ title, subTitle, image, place, price }) {
  return `<div class="card">
                <div class="card-head">
                    <img src="${image}" alt="Logo Hermes">
                    <h4>${title}</h4>
                    <p>${subTitle}</p>
                    <p class="place"><i class="fas fa-map-marker-alt"></i>${place}</p>
                </div>

                <div class="card-foot">
                    <div>
                        <p class="price">$${price}</p>
                        <p>of hiring reward</p>
                    </div>
                    <button><i class="fas fa-puzzle-piece"></i></button>
                </div>
                <div class="tooltip">
                  <span class="tooltiptext">Be the first one to recomemend!</span>
                </div>
            </div>`;
};

const loadCards = (data) => {
  let childs = "";
  data.forEach((e) => {
    const cardInformation = {
      title: e.title,
      subTitle: e.subTitle,
      image: e.image,
      place: e.place,
      price: e.price,
    };
    childs += templateCard(cardInformation);
    console.log("entra");
  });
  return childs;
};

function init() {
  document.getElementById("cardTemp").innerHTML = loadCards(data);
}

init();
