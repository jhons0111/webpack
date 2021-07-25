console.log("Dentro del archivo js solo para mobile")

import {aprendiendo} from '../app.js';
import '../style.css';
import '../style.scss';
import '../message-three.js';
import '../message-two.js'

 function component() {
   const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  //  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

   return element;
 }

 document.body.appendChild(component());

 console.log("dentro del script mobile de webpack en Bogota");

 aprendiendo();