let a= "2 0 3 5 4 10 6"
let b=a.split(" ").map(Number)
max= 0
c = 0
d = 0
for(let i = 0; i<b.length;i++){
    if (max<b[i]){
        max = b[i];
        c = i;
    }
}
let min = 0
for(let j = 0; j < c; j++){
    if(min > b[j]){
        min = b[j];
        d = j
    }
}
console.table([
    `Cost Price : ${min}`,
    `Selling Price : ${max}`,
    `Profit :  ${max-min}`
])