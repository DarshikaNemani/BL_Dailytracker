a="5 6 3 2 4 5";
k="2";
b=a.split(" ");
for (var i = 0; i < b.length; i++){
    if(k==b[i]){
        b.splice(i,1);
        i--;
    }
}
console.log(b);