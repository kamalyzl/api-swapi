// $('#myModal').modal(options);

const container = document.getElementById('container');
const modal = document.getElementById('body');


getFetch();
function getFetch() {
  // const url = `https://swapi.co/api/people/?search=${searchValue}`;
  let count = 0;
  for (let i = 1; i < 88; i++) {
    const url = `https://swapi.co/api/people/${i}/`;
    fetch(url)
      .then((resp) => resp.json())
      .then(function (data) {
        // console.log(data);
        // console.log(data.name);
        const characters = ` <figure class="images" id="containerImages" data-name="${data.name}">
        <img class="image" data-target="#exampleModal" data-toggle="modal" src="https://starwars-visualguide.com/assets/img/characters/${i}.jpg" alt="${data.name}">
        <figcaption >${data.name}</figcaption>
      </figure>`;
        container.innerHTML += characters;
      })
      .catch(function(error) {
        console.log(JSON.stringify(`Error ${error}`));
      });
  }
};

$(document).on('click', 'figure', function() {
  let el = $(this);
  console.log(event.target);
  let name = document.getElementById('modal-title');
  let modal = document.getElementById('body');
  name.innerHTML = el.data('name');
  let text = 
});

