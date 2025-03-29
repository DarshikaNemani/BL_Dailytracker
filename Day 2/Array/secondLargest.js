a="5 10 6 8 2 12";
b=a.split(" ").map(Number);
var temp=0;
for (var i = 0;i<b.length;i++){
    for (var j = i + 1; j<b.length;j++){
        if(b[i]>b[j]){
            temp = b[i];
            b[i]=b[j];
            b[j]=temp;
        }
    }
}
console.log(b[b.length-2]);