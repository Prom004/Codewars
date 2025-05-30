// Task: Create a Promise that resolves with the string "Hello, world!" after 2 seconds.

const hello =  (function () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello, world!");
        }, 2000);
    });
});
hello()
    .then((message) => {
        console.log(message); // Output: Hello, world!
    })
    .catch((error) => {
        console.error("Error:", error);
    });


    // Task: Create a Promise that rejects with an error message after 3 seconds.
const errPromise = (function () {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Something went wrong!"));
        }, 3000);
    });
}
);
errPromise()
    // .then((message) => {
    //     console.log(message);
    // })
    .catch((error) => {
        console.error("Error:", error.message); 
    });