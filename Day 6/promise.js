const sayHi = new Promise(function (resolve, reject) {
    let name = ""

    if (name === '') {
        reject('No name!')
    } else {
        resolve(`Hello ${ name } ji!`);
    }
})



sayHi.then(
    function (value) {
        console.log(value);
    },
    function (error) {
        console.log(error);
    });