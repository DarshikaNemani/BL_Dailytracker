let arr = [1, 2, 3, 4, 5];

const x = (arr) => {
    let newArr = arr.map(i => i * 2);
    return newArr;
};

let result = x(arr);
console.log(result);