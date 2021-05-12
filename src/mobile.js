// import _ from 'lodash';
import { routes } from "./routes.js";

let route = routes.find(
  (item) => window.location.pathname == item.path
);

console.log(route)

route = route ? route : routes.find(
      (item) => window.location.pathname == `/${item.name}.html`
    );

console.log(route)
// console.log('route', route)
// require("./partials/generalPage.js").page();
if (route) {
  require("./components/" + route.component + ".js");
}
