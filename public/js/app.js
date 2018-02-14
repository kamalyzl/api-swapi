// $('#myModal').modal(options);

const container = document.getElementById('container');
const modal = document.getElementById('body');


(function images() {
  let count = 0;
  for (let i = 1; i < 88; i++) {
    const urlImages = `https://starwars-visualguide.com/assets/img/characters/${i}.jpg`;
    console.log(urlImages);
    showImage(urlImages);
  }
})();

getFetch();
function getFetch() {
  // const url = `https://swapi.co/api/people/?search=${searchValue}`;
  let count = 0;
  for (let i = 1; i < 88; i++) {
    const url = `https://swapi.co/api/people/${i}/`;
    fetch(url)
      .then((resp) => resp.json())
      .then(function(data) {
        console.log(data);
        console.log(data.name);       
        getModal(data);
      })
      .catch(function(error) {
        console.log(JSON.stringify(`Error ${error}`));
      });
  }
};


function showImage(data) {
  let img = document.createElement('img');
  img.src = (data);
  img.className = 'image';
  img.setAttribute('data-target', '#exampleModal');
  img.setAttribute('data-toggle', 'modal');
  container.appendChild(img);
};

function getModal(data) { 
  let title = document.createElement('h2'); 
  title.innerHTML = data.name;
  modal.appendChild(title);
};
 
