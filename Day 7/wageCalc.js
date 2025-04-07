let wagePerHour = 20
let hour = Math.floor(Math.random() * 10) + 1
let employee = Math.random()
if (employee < 0.5){
    console.log("Employee is absent!")
}
else{
    console.log("Employee is present!")
    console.log(`Total hours : ${hour}, Total Wage: ` , hour * wagePerHour)
}