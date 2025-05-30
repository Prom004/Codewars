// Task: Create a chain of promises that resolves the following values:

// 1. "Step 1"
// 2. "Step 2"
// 3. "Step 3"
// Each step should be delayed by 1 second.

const step1 = (() => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve ("Step 1 completed");
        }, 1000);
    });
});
const step2 = (() => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve("Step 2 completed");
        }, 1000);
    });
});
const step3 = (()=> {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve ("Step 3 completed");
        }, 1000)
    })
});
console.log("I am starting my execution");
// step1()
//     .then((message) => {
//         console.log(message)
//         return step2(message)
//     })
//     .then ((message) => {
//         console.log(message);
//         return step3(message);
//     })
//     .then((message) => console.log(message))
//     .catch((error) => console.log("Not happening now!"));

    // use promises to right a function that returns if the number is even or odd
    // Task: Create a function that takes a number and returns a Promise that resolves with "Even" or "Odd".


    function getEven(value, delay) {
        return new Promise ((resolve, reject) => {
            setTimeout(()=> {
                if (value % 2 == 0){
                    resolve("This number is even");
                } else {
                    reject("This number is odd");
                }
            }, delay)
        })
    }

    getEven(4, 1000)
        .then((message) => {
            console.log(message);
            return getEven(5, 1000);
        })
        .then ((message) => console.log (message))
        .catch((error) => {
            console.error(error);
        })
        .finally(() => {
            console.log("All done!");
        }
        );
