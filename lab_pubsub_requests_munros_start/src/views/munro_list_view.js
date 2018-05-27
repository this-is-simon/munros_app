const PubSub = require('../helpers/pub_sub');
const MunroDetailView = require('./munro_detail_view')

const munroListView = function(container){
  this.container = container;
}

munroListView.prototype.bindEvents = function() {
  PubSub.subscribe('Munros:munro-data-ready', (event) => {
    this.renderMunroViews(event.detail);
  });
}

munroListView.prototype.renderMunroViews = function(allMunroData) {
  allMunroData.forEach((munro) => {
    console.log('Munro:', munro);
    const munroListItem = this.createMunroListItem(munro);
    this.container.appendChild(munroListItem);
  })
}

munroListView.prototype.createMunroListItem = function(munro) {
  const munroDetailView = new MunroDetailView();
  const munroDetail = munroDetailView.createMunroHeader(munro);
  return munroDetail;
}




module.exports = munroListView;
