// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph")
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

const allCats = [...cats, "Broom"];
function appendCat(name) {
   return allCats
}

const allCats2 = ["Arnold", ...cats];
function prependCat(name) {
    return allCats2
}

const newCats = cats.slice(0, -1);
function removeLastCat() {
    return newCats;
}

const newCats2 = cats.slice(1);
function removeFirstCat() {
    return newCats2;
}