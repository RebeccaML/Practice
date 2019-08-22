let temp = 90;

if (temp <= 32) {
    console.log("It's freezing!");
}
else if (temp >= 110) {
    console.log("It's too hot!");
}
else {
    console.log("It's nice outside.")
}

let age = 31;

if (age <= 7) {
    console.log("Child price.");
}
else if (age >= 65) {
    console.log("Senior price.");
}
else {
    console.log("Full price.")
}

let isAccountLocked = false;
let userRole = "admin";

if (isAccountLocked) {
    console.log("Account is locked");
}
else if (userRole === "admin") {
    console.log("Welcome Admin");
}
else {
    console.log("Welcome");
}