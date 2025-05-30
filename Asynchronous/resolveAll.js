// Task: Create three promises, each resolving after different times (e.g., 1 second, 2 seconds, and 3 seconds). Use Promise.all() to resolve them in parallel and log all results once all of them are resolved.

function promise1() {
    return new Promise ((resolve) => {
        setTimeout (() => resolve("Promise 1 resolved"))
    }, 2000)
}
function promise2() {
    return new Promise ((resolve) => {
        setTimeout (() => resolve ("Second promise done!"))
    }, 1000)
}

Promise.all ([promise1(), promise2()])
.then ((messages) => {
    console.log ("All promises were resolved: ");
    messages.forEach((message) => console.log(message));
})
.catch ((error) => console.log (" Nothing happened!"))