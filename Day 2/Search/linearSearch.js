a= "5 6 5 2 4 3 9"
b=a.split(" ").map(Number)
c= 4;
for( var i = 0; i < b.length; i++){
    if(b[i]===c){
        console.log(c, "found!")
    }
}