var a="5 10 6 8 2 12";
var b=a.split(" ");
var c=[];
var d = b.length;

for (var i = 0; i < d; i++){
    c[d - i] = b[i];
}
console.log(c);