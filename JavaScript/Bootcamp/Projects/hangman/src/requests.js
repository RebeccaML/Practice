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

export { getPuzzle as default };