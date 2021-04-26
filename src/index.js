// import _ from 'lodash';
import {aprendiendo} from './app.js';
import './style.css';
import './style.scss';
import './message-one.js';
import './message-three.js';

 function component() {
   const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  //  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

   return element;
 }

 document.body.appendChild(component());

 console.log("dentro del script de webpack en Bogota");

 aprendiendo();

 