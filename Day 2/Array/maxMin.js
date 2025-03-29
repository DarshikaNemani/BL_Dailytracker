a="5 10 6 8 2 12";
b=a.split(" ").map(Number);
var max = b[0];
var min = b[0];
for (var i = 1; i < b.length; i++) {
    if (b[i] > max) { 
        max = b[i];
    }
    else if (b[i]<min){
        min = b[i];
    }
}
console.log(min,max)