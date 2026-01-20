
// Templating [1] for one element example

import { h } from "snabbdom"

const div = (strings, ...args) => {
    strings.reduce((acc, currentString, index) => {
        return acc + currentString + (args[index] || "")
    }, "")
    // console.log(strings, args)
}

const firstname = "Pushok"
const lastname = "Stanishkin"

div`Hello ${firstname} ${lastname} !`

// Templating [2] for any html elements
// const createElement = tagName => {
//     return (strings, ...args) => ({
//         type: tagName,
//         template: strings.reduce((acc, currentString, index) => acc + currentString + (args[index] || ""), "")
//     })
// }

// export const p = createElement("p")
// const { template } = p`Hello ${firstname} ${lastname} !`
// console.log(template)


// Templating [4] with snabbdom
// const createElement = tagName => {
//     return (strings, ...args) => ({
//         type: "element",
//         template: h(
//             tagName,
//             {},
//             strings.reduce((acc, currentString, index) => acc + currentString + (args[index] || ""), "")
//         )
//     })
// }


// export const p = createElement("p");

// [6] Create reducer
const initialState = {
    template: "",
    on: {}
}

export const createReducer = args => {
    return (acc, currentString, index) => {
        const currentArg = args[index];

        if (currentArg && currentArg.type === "event") {
            return { ...acc, on: { click: currentArg.click } };
          }
        
        return ({
            ...acc,
            template: acc + currentString + (args[index] || "")
        })
    }
}

export const createElement = tagName => {
    return (strings, ...args) => {
        const { template, on } = strings.reduce(createReducer(args), initialState)
    
        return {
            type: "element",
            template: h(tagName, { on }, template)
        }
    }
}

export const p = createElement("p");
