// import _ from 'lodash';
import { learning } from './app.js';
// let learn = require('./app').aprendiendo;
import './style.css';
import './style.scss';
import './message-three.js';
import './message-two.js'

 function component() {
   const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  //  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

   return element;
 }

document.body.appendChild(component());

console.log("I'm at mobil.js file");

// To execute imported functions 
learning();
// learn();
