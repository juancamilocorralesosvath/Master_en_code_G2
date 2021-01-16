//CommonJS
// const greeting = require('./greeting');
//Babel- ecma2015- ecma6
import greeting from './greeting';
import './styles/style.scss';
// ojo: './' para acceder a algo que esta dentro de mi current folder,
// './../' para acceder a algo que esta fuera de mi current folder.
console.log(greeting('generacion 2'));
console.log(greeting('a todos los que vinieron hoy! OnO'));
console.log(greeting('a los que instalaron Babel!'));
