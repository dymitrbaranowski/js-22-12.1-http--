/*
 * - HTTP-запросы в браузере
 *  - Fetch API
 *  - Владка Network
 *  - HTTP-методы
 *  - Заголовки
 *  - MIME-типы
 *  - Параметры запроса
 * - Документация REST API
 * - Обработка 404 с fetch
 * - Аутентификация
 * - Библиотеки-обёртки
 * - https://pokeapi.co/
 */

import '../css/common.css';
// import Handlebars from 'handlebars';
// const template = Handlebars.compile('Name: {{name}}');
// console.log(template({ name: 'Nils' }));
// import pokemonCardTpl from '../templates/pokemon-card.hbs';

const refs = {
  cardContainer: document.querySelector('.js-card-container'),
};
fetch('https://pokeapi.co/api/v2/pokemon')
  .then(response => {
    return response.json();
  })
  .then(pokemon => {
    console.log(pokemon);
    const markup = pokemonCardTpl(pokemon);
    console.log(markup);
  })
  .catch(error => {
    console.log(error);
  });

function pokemonCardTpl() {
  let markup = '';

  markup = `<div class="card">
  <div class="card-img-top">
    <img src="{{sprites.front_default}}" alt="{{name}}">
  </div>
  <div class="card-body">
    <h2 class="card-title">Имя: {{name}}</h2>
    <p class="card-text">Вес: {{weight}}</p>
    <p class="card-text">Рост: {{height}}</p>

    <p class="card-text"><b>Умения</b></p>
    <ul class="list-group"></ul>
    {{#each abilities}}
      <li class="list-group-item">{{ability.name}}</li>
    {{/each}}
    </ul>
  </div>
</div>`;
}
return markup;

// import API from './api-service';
// import getRefs from './get-refs';

// const refs = getRefs();

// refs.searchForm.addEventListener('submit', onSearch);

// function onSearch(e) {
//   e.preventDefault();

//   const form = e.currentTarget;
//   const searchQuery = form.elements.query.value;

//   API.fetchPokemon(searchQuery)
//     .then(renderPokemonCard)
//     .catch(onFetchError)
//     .finally(() => form.reset());
// }

// function renderPokemonCard(pokemon) {
//   const markup = pokemonCardTpl(pokemon);
//   refs.cardContainer.innerHTML = markup;
// }

// function onFetchError(error) {
//   alert('Упс, что-то пошло не так и мы не нашли вашего покемона!');
// }

// // =========================================

// const url = 'https://newsapi.org/v2/everything?q=cars';
// const options = {
//   headers: {
//     Authorization: '4330ebfabc654a6992c2aa792f3173a3',
//   },
// };

// fetch(url, options)
//   .then(r => r.json())
//   .then(console.log);
