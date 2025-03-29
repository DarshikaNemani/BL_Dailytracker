a="5 10 6 8 2 12";
b=a.split(" ").map(Number);
sum=0;
for (var i = 0;i < b.length;i++){
    sum += b[i];
}
console.log(sum);