//Callback
const getDataCallback = (callback) => {
    setTimeout(() => {
        callback("This is my callback error", undefined);
}, 2000)
};

getDataCallback((error, data) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log(data);
    }
});

//Promise
// const getDataPromise = (data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve("This is the promise data.");
//             reject("This is my promise error.");
//         }, 2000)
//     });
// }

const getDataPromise = (data) => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`This is my success data: ${data}`);
            // reject("This is my promise error.");
        }, 2000)
    });

const myPromise = getDataPromise(3534545);

myPromise.then((data) => {
    console.log(data);
}, (error) => {
    console.log(error);
});