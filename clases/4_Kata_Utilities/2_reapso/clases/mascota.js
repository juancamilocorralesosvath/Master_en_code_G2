class Mascota{ 
    constructor(nombre, patas){ 
      
        this.nombre = nombre;
        this.patas = patas;
    }

    comer(){ 
        return `a ${this.nombre} le gusta comer monda`;
    }
}
//commonJS
module.exports = Mascota;