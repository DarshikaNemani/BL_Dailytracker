a = "5 6 10 2 4 3 9";
b = a.split(" ").map(Number).sort((a, b) => a - b);
ele = 4;
s = 0;
e = b.length - 1;

while (s <= e) {
    mid = Math.floor((s + e) / 2);
    
    if (ele < b[mid]) {
        e = mid - 1;
    } 
    else if (ele > b[mid]) {
        s = mid + 1;
    } 
    else {
        console.log(ele, "found!");
        return;
    }
}

console.log(ele, "not found");