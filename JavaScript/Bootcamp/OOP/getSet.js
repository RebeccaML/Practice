const data = {
    locations: [],
    get location() {
        return this._location;
    },
    set location(loc) {
        this._location = loc.trim();
        this.locations.push(this._location);
    } 
}

data.location = "Irvine";
data.location = "Helsinki";
console.log(data);
console.log(data.location);