
// Core [3]

// export const init = (selector, component) => {
//     const app = document.querySelector(selector)
//     const newElement = document.createElement(component.type)
//     const newTextContent = document.createTextNode(component.template)

//     newElement.append(newTextContent)
//     app.append(newElement)
// }


// [5] Core with snabbdom
import * as snabbdom from "snabbdom";
const patch = snabbdom.init([
    
]);

export const init = (selector, component) => {
    const app = document.querySelector(selector)
    patch(app, component.template)
}

