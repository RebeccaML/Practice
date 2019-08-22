let temp = 70;

if (temp >= 60 & temp <= 90) {
    console.log("It is pretty nice outside");
}
else if (temp <= 0 || temp >= 120) {
    console.log("Do not go outside");
}
else {
    console.log("Do what you want");
}

let isGuestOneVegan = false;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log("Offer only vegan dishes.")
}
else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log("Offer a mix of vegan and normal options.")
}
else {
    console.log("Offer up anything on the menu.")
}