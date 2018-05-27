const MunroDetailView = function () {
}

MunroDetailView.prototype.createMunroInfo = function (munro) {
  const munroInfo = document.createElement('div');
  munroInfo.classList.add('munro-detail');

  const munroName = document.createElement('h2');
  munroName.textContent = munro.name;
  munroInfo.appendChild(munroName);

  const munroDetails = document.createElement('ul');
  const munroHeight = this.createListItem('Height', munro.height);
  munroDetails.appendChild(munroHeight);

  munroInfo.appendChild(munroDetails);
  return munroInfo;
};

MunroDetailView.prototype.createListItem = function(label, property) {
  const element = document.createElement('li');
  element.textContent = `${label}: ${property}`;
  return element;
}

module.exports = MunroDetailView;
