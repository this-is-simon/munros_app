const MunroDetailView = function () {
}

MunroDetailView.prototype.createMunroHeader = function (munro) {
  const munroHeader = document.createElement('h2');
  munroHeader.textContent = munro.name;
  return munroHeader;
};

module.exports = MunroDetailView;
