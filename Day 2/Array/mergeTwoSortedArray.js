var a = "1 3 5 7 9";
var b = "2 4 6 8 10";
var c = a.split(" ").map(Number);
var d = b.split(" ").map(Number);
var e = [];

var i = 0, j = 0, k = 0;

while (i < c.length && j < d.length) {
    if (c[i] < d[j]) {
        e[k++] = c[i++];
    } else {
        e[k++] = d[j++];
    }
}

while (i < c.length) {
    e[k++] = c[i++];
}

while (j < d.length) {
    e[k++] = d[j++];
}

console.log(e);