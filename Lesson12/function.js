let myPromise = new Promise((resolve, reject) => {
    const promise = false;
    if (promise) {
        resolve("Success!");
    } else {
        reject("Failed!");
    }
})

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Promise is done.");
    }); 