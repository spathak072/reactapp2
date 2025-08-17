import {mount} from "./bootstrap"

console.log(process.env.NODE_ENV);

  const devRoot = document.querySelector('#_marketing-dev-root');
  if (devRoot) {
    mount(devRoot);
  }


console.log('Marketing App is running!');