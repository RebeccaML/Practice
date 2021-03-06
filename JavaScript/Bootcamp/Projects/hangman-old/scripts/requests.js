const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    if (response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error("Unable to get puzzle.");
    }
};

const getCountry = async (countryCode) => {
    const response = await fetch("http://restcountries.eu/rest/v2/all");
    if (response.status === 200) {
        const data = await response.json();
        return data.find((country) => country.alpha2Code === countryCode);
    } else {
        throw new Error("Unable to get country.")
    }
};

const getLocation = async () => {
    const response = await fetch("http://ipinfo.io/json?token=8a457c5f8049fd");
    if (response.status === 200) {
        return response.json();
    } else {
        throw new Error("Unable to get location.")
    }
};

const getCurrentCountry = async () => {
    const location = await getLocation();
    return getCountry(location.country);
};

// const getLocation = () => {
//     return fetch("http://ipinfo.io/json?token=8a457c5f8049fd").then((response) => {
//         if (response.status === 200) {
//             return response.json();
//         }
//         else {
//             throw new Error("Unable to fetch data.");
//         }
//     });
// }


// const getPuzzle = (wordCount) => {
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
//         if (response.status === 200) {
//             return response.json();
//         }
//         else {
//             throw new Error("Unable to fetch puzzle.");
//         }
//     }).then((data) => {
//         return data.puzzle;
//     });
// };


// const getCountry = (countryCode) => {
//     return fetch("http://restcountries.eu/rest/v2/all").then((response) => {
//         if (response.status === 200) {
//             return response.json();
//         }
//         else {
//             throw new Error("Unable to fetch data.");
//         }
//     }).then((data) => {
//         const country = data.find((country) => country.alpha2Code === countryCode);
//         return country.name;
//     });
// };

// const getCountry = (countryCode) => new Promise ((resolve, reject) => {
//     const countryRequest = new XMLHttpRequest();
//     countryRequest.addEventListener("readystatechange", (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText);
//             const country = data.find((country) => country.alpha2Code === countryCode);
//             resolve(country.name);
//         }
//         else if (e.target.readyState === 4) {
//                 reject("An error has occurred.")
//             }
//         });

//     countryRequest.open("GET", "http://restcountries.eu/rest/v2/all");
//     countryRequest.send();
// });


// const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText);
//             resolve(data.puzzle);
//         }
//         else if (e.target.readyState === 4) {
//             reject("An error has occurred.");
//             }
//         });

//     request.open("GET", `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
//     request.send();
// });