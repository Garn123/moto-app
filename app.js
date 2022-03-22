// Fetch de los elemenos
let bikes = []

window.onload = () => {
    init();
    const input = document.querySelector('#searchbar');
    input.addEventListener('input', () => {
      search();
    });

}

const init = async () => {
    bikes = await fetchBikes();
    console.log(bikes);
    printModels(bikes);
    
}

const fetchBikes = async () => {
    const brand = await fetch('http://localhost:8080/api/brands');
    const brandJson = await brand.json();
    return brandJson
}

//Dibujado de los elementos


let printModels = (bikes) => {
  const cardContainer = document.querySelector('.card-container') ? document.querySelector('.card-container') : document.createElement('div');
  cardContainer.innerHTML = "";

  bikes.forEach(bike => {
    bike.models.forEach(model => {

    const scene = document.createElement('div');
    scene.classList.add('scene');
    const card = document.createElement('div');
    card.classList.add('card');
      card.innerHTML += `
            <div class="cards card-front">
            <div class="cards__img">
              <img
              src="${model.image}"
              alt="${bike.name} ${model.name}"
            />
            </div>
            <div class="text-box">
              <h3>${bike.name.toUpperCase()} ${model.name.toUpperCase()}</h3>
            </div>
            </div>
            <div class="cards card-back">
              <div class="card-back__">
                <p class="card-back__text"><span>Marca: </span>${bike.name.toUpperCase()}</p>
                <p class="card-back__text"><span>Modelo: </span>${model.name.toUpperCase()}</p>
                <p class="card-back__text"><span>Cilindrada: </span>${model.cc}cc</p>
              </div>
              <div class="card-back__img"><img src="${bike.logo}" alt="${bike.name}"></div>
              
            </div>
          `
          
          card.addEventListener("click", () => {card.classList.toggle('card-active')});
          scene.appendChild(card);
          cardContainer.appendChild(scene)
  });
    })
    
    document.body.appendChild(cardContainer)
};

const search = () => {
  const inputBike = document.querySelector('#searchbar');
  /* const filterBike = bikes.filter(bike => (bike.name.toLowerCase().includes(inputBike.value.toLowerCase()))); */
  printSearch(bikes, inputBike.value);
  
}

const printSearch = (bikes, value) => {
  const cardContainer = document.querySelector('.card-container') ? document.querySelector('.card-container') : document.createElement('div');
  cardContainer.innerHTML = "";

  bikes.forEach(bike => {
    bike.models.forEach(model => {
    if(bike.name.toLowerCase().includes(value.toLowerCase()) || model.name.toLowerCase().includes(value.toLowerCase())){
    const scene = document.createElement('div');
    scene.classList.add('scene');
    const card = document.createElement('div');
    card.classList.add('card');
      card.innerHTML += `
            <div class="cards card-front">
            <div class="cards__img">
              <img
              src="${model.image}"
              alt="${bike.name} ${model.name}"
            />
            </div>
            <div class="text-box">
              <h3>${bike.name.toUpperCase()} ${model.name.toUpperCase()}</h3>
            </div>
            </div>
            <div class="cards card-back">
              <div class="card-back__">
                <p class="card-back__text"><span>Marca: </span>${bike.name.toUpperCase()}</p>
                <p class="card-back__text"><span>Modelo: </span>${model.name.toUpperCase()}</p>
                <p class="card-back__text"><span>Cilindrada: </span>${model.cc}cc</p>
              </div>
              <div class="card-back__img"><img src="${bike.logo}" alt="${bike.name}"></div>
              
            </div>
          `
          
          card.addEventListener("click", () => {card.classList.toggle('card-active')});
          scene.appendChild(card);
          cardContainer.appendChild(scene)
        }
  });
    })
    
    document.body.appendChild(cardContainer)

}