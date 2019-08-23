let name = " Rebecca Lowe  ";

console.log(name.length);

console.log(name.toUpperCase());

let password = "abc123password";
console.log(password.includes("password"));

console.log(name.trim())

let isValidPassword = function(pass) {
    if (pass.length > 8 && !pass.includes("password")) {
        return true;
    }
    return false;
}

console.log(isValidPassword("vdf4"));
console.log(isValidPassword("34fpassword"));
console.log(isValidPassword("fgd83jfsdad"));