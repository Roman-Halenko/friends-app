const main = document.querySelector('main');

const sortBtn = document.getElementById('sort_btn');

const header = document.querySelector('header');

let searchField = document.getElementById('search');

fetch('https://randomuser.me/api/?results=60&nat=us')
.then(response => response.json())
.then(response => controller(response.results))

function controller(srcArr) {

  let list = [];
  let inputStr = "";

  function searchByName(e) {
    inputStr = searchField.value.toLowerCase();
    list = srcArr.filter(e => e.name.last.includes(inputStr) || e.name.first.includes(inputStr));
    renderHTML(list);
  }
  function sortByAge(e) {
    list = srcArr.sort();
    renderHTML(list);
  }
  searchField.addEventListener('keyup', searchByName);
};

function renderHTML(arrOfObj) {
  main.innerHTML = '';

  arrOfObj.forEach(e => {
    main.insertAdjacentHTML('beforeend',
    `
    <div class="usr_card">
      <img class="user_img" src="${e.picture.large}">
      <p class="usr_name">${e.name.first} ${e.name.last}</p>
      <span class="location">${e.location.state}: ${e.location.city}</span>
      </div>
    `);
  })
};

sortBtn.addEventListener('click', () => header.classList.toggle('open'));
