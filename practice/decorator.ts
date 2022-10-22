function Logging(message: string) {
  return function (constructor: Function) {
    console.log("Logging");
    console.log(constructor);
  };
}

function Component(template: string, selector: string) {
  return function (constructor: { new (...args: any): { name: string } }) {
    const mountedElement = document.querySelector(selector);
    const instance = new constructor();
    if (mountedElement) {
      mountedElement.innerHTML = template;
      mountedElement.querySelector("h1")!.textContent = instance.name;
    }
  };
}

@Component("<h1>{{name}}</h1>", "#app")
@Logging("Logging Person")
class User {
  name = "Quill";
  constructor() {
    console.log("User was created!");
  }
}
