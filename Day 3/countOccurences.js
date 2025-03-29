str = "aaacdcdd"
a = str.split("")
b = []
c = []
k = 0
let op={}
for (let i = 0; i < a.length; i++) {
    let count = 1
    for (let j = i + 1; j < a.length; j++) {
        if (a[i] == a[j]) {
            count += 1;
            a[j] = '';
        }
    }
    if (a[i] != '') {
        op[a[i]] = count;
    }
    while (a[i] == a[i + 1]) {
        i++;
    }
}
console.log(op)