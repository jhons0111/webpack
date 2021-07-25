// import _ from 'lodash';
import { learning } from './app.js';
// let learn = require('./app').aprendiendo;
import './style.css';
import './style.scss';
import './message-three.js';
import './message-two.js'
import { routes } from "./routes.js";

let route = routes.find(
  (item) => window.location.pathname == item.path
);

console.log(route)

route = route ? route : routes.find(
      (item) => window.location.pathname == `/${item.name}.html`
    );

document.body.appendChild(component());

console.log("I'm at mobil.js file");

// To execute imported functions 
learning();
// learn();
console.log(route)
// console.log('route', route)
// require("./partials/generalPage.js").page();
if (route) {
  require("./components/" + route.component + ".js");
}
