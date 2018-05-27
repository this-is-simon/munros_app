const PubSub = require('../helpers/pub_sub');
const RequestHelper = require('../helpers/request_helper')

const Munros = function() {
  this.munrosData = [];
}

Munros.prototype.getData = function() {
  const requestHelper = new RequestHelper('https://munroapi.herokuapp.com/api/munros');
  requestHelper.get((data) => {
    PubSub.publish('Munros:munro-data-ready', data)
  });
}

module.exports = Munros;
