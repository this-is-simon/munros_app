const Munros = require('./models/munros')
const MunroListView = require('./views/munro_list_view')

document.addEventListener('DOMContentLoaded', () => {
  const munroListContainer = document.querySelector('#munro-list')
  const munroListView = new MunroListView(munroListContainer);
  munroListView.bindEvents();

  const munros = new Munros();
  munros.getData();
  console.log(munros);


})
