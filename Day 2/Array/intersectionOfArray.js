var a = "1 2 3 4 5";
var b = "5 6 4 9 10";
var c = a.split(" ").map(Number);
var d = b.split(" ").map(Number);
var e = [];

var i = 0, j = 0, k = 0;

for (i=0;i<c.length;i++){
    for(j=0;j<d.length;j++){
        if(c[i]==d[j]){
            e[k] = c[i];
            k++;
        }
    }
}
console.log(e);