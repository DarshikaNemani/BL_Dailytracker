let wagePerHour = 20
let options = [0, 4, 8];
let hour = options[Math.floor(Math.random() * options.length)];

if (hour == 0){
    console.log("Employee is absent!")
}
else if(hour == 4){
    console.log("Employee is present!")
    console.log(`Total hours : ${hour}, Total Wage: ` , hour * wagePerHour, `Shift: Half- Time`)
}
else if(hour == 8){
    console.log("Employee is present!")
    console.log(`Total hours : ${hour}, Total Wage: ` , hour * wagePerHour, `Shift: Full- Time`)
}   