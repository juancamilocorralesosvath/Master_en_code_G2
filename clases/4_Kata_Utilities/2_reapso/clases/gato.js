const Mascota = require('./mascota');

class Gato extends Mascota{

    constructor(nombre, patas, colorOjos){ 
        super(nombre, patas);
        this.colorOjos = colorOjos;
        this.vidas = 7;
    }
    ronronear(){ 
        return "prrrrr";
    }
}
module.exports = Gato;