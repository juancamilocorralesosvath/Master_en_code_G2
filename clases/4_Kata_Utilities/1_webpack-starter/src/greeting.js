const greeting = (name) => `Hola ${name}, bienvenido al ecma6`;
// forma en la que Babel/ecma2015/ecma6 lo lee
export default greeting;
//forma en que node/CommonJS lo lee 
// module.exports = greeting;
/*
// repaso destructuracion
const objeto = {a: "hola, soy el valor de a", b:"hola, soy el valor de b" };
const {a} = objeto;
// lo que sucede aqui es que me traigo directamente el valor de la key a.
// podemos hacer provecho de la destructuracion para optimizar este proceso:
const infoDelArchivo = require('ruta/del/archivo');
//para acceder
infoDelArchivo.algo 
infoDelArchivo.otraCosa

//asi que, en lugar de hacer esto, podemos hacer:
const {loQueQuieroTraer, otraCosa, otraOtraXD} = require('ruta/archivo');
//asi ya las tenemos directamente:
loQueQuieroTraer
otraCosa
otraOtraXD
*/
