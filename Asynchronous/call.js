function greet(message) {
    console.log(message);
}

function greetUser(callback) {
    const name ="Promise";
    callback(`Hello, ${name}!`);
}
// greetUser(greet);

// callback hell

setTimeout(()=> {
    console.log("First step completed");
    setTimeout(() => {
        console.log("Second step completed");
        setTimeout(() => {
            console.log("Third step completed");
            setTimeout(() => {
                console.log("Fourth step completed");
                setTimeout(() => {
                    console.log("Fifth step completed");
                }, 1000);
            }, 1000);
        }, 1000);
}, 1000)
});