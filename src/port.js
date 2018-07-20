/* globals window */
(function exportPort() {
  function Port(name) {

    this.name = name;
    this.ships = [];

  }

  Port.prototype.addShip = function (ship) {

    this.ships.push(ship);

  };

  Port.prototype.removeShip = function (ship) {

    const ships = this.ships;
    const remove = ships.indexOf(ship);

    this.ships.splice(remove, 1);

  };

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Port;
}  else {
  window.Port = Port;
}
  
}());
