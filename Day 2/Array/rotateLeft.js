a = "5 10 6 8 2 12";
b = a.split(" ").map(Number);
k = 3;
for (var i = 0; i< k; i++){
    temp = b[0];
    for (var j = 1; j<b.length;j++ ){
        b[j-1] = b[j];
    }
    b[b.length-1]= temp;
}
console.log(b);