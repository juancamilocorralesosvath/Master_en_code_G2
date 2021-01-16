const Mascota = require('./mascota');
class Camaleon extends Mascota{ 
    constructor(nombre, patas){
        super(nombre, patas); 
        this.color = 'verde';

    }
    cambiaColor(nuevoColor){ 
      this.color = nuevoColor;
    }
}
module.exports = Camaleon;
let camaleonsitoDivino = new Camaleon('rafis', 4);
console.log('mi camaleonsito es:', camaleonsitoDivino);