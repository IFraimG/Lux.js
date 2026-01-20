
// Templating [1] for one element example

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
const createElement = tagName => {
    return (strings, ...args) => ({
        type: tagName,
        template: strings.reduce((acc, currentString, index) => acc + currentString + (args[index] || ""), "")
    })
}

export const p = createElement("p")
const { template } = p`Hello ${firstname} ${lastname} !`
console.log(template)