const Gato = require('./clases/gato');
const Camaleon = require('./clases/camaleon');
const camaleon = new Camaleon('Rango', 4);
console.log(camaleon);
camaleon.cambiaColor("rojo");
console.log(camaleon.comer());
camaleon.cambiaColor('rojo');
console.log(camaleon);

const gato = new Gato("petronio", 4);
console.log(gato);
console.log(gato.comer());
console.log(gato.ronronear());