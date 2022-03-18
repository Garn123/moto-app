//Eventos
const cardClick = document.querySelector('.card');
cardClick.addEventListener("click", function () {cardClick.classList.toggle('card-active')});

// Fetch de los elemenos
let bikes = []

window.onload = () => {
    init();
}

const init = async () => {
    bikes = await fetchBikes();
    console.log(bikes)
}

const fetchBikes = async () => {
    let data = {
      models: [],
      brands: []
    }
    const brand = await fetch('http://localhost:8080/api/brands');
    const models = await fetch('http://localhost:8080/api/models');
    const brandJson = await brand.json();
    const modelsJson = await models.json();
    data.brands.push(brandJson);
    data.models.push(modelsJson);

    return data;
}

function mapBikes(dataBrands) {
    const data = dataBrands.map()
}

//Dibujado de los elementos
const cardContainer = document.querySelector('.card-container');

let printModels = () => {
  cardContainer.innerHTML += `
      <div class="scene">
          <div class="card">
            <div class="cards card-front">
              <img
              src="https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/21MY_Z900_BK4_STU.png"
              alt="model image"
              />
            <div class="text-box">
              <h3>Kawasaki Z900</h3>
            </div>
            </div>
            <div class="cards card-back">
              <div class="card-back__">
                <p class="card-back__text"><span>Marca: </span>Bemeube</p>
                <p class="card-back__text"><span>Modelo: </span>seisientos</p>
                <p class="card-back__text"><span>Cilindrada: </span>1000</p>
              </div>
              <div class="card-back__img"><img src="./assets/BMW-Logo.png" alt="bmw"></div>
              
            </div>
          </div>
      </div>`;

};