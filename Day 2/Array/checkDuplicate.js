var a = "5 10 6 8 5 2 12";
var b = a.split(" ").map(Number);
for (var i = 0; i < b.length; i++){
    for (var j = i+1; j < b.length; j++){
        if (b[i] == b[j]){
            console.log("Contains Duplicate");
            return;
        }
    }
}
console.log("No duplicates")