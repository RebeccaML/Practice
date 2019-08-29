const myAge = 31;
const message = myAge >= 18 ? "You can vote" : "You cannot vote";

console.log(message);

const showPage = () => {
    console.log("Showing the page");
};

const showError = () => {
    console.log("Showing the error");
};

const check = myAge >= 21 ? showPage() : showError();

const team = ["Ajantis", "Dorn", "Khalid", "Jaheira"];

const teamCheck = team.length <= 4 ? `Team size: ${team.length}` : "Too many people on your team";

console.log(teamCheck);