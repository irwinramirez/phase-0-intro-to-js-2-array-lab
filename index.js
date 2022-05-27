// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(){
    cats.push("Ralph")
}
function destructivelyPrependCat(){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(){
    let moreCats = [...cats, "Broom"]
    return moreCats
}
function prependCat(){
    let evenMoreCats = ["Arnold", ...cats]
    return evenMoreCats
}
function removeLastCat(){
    let lessCats = [...cats.slice(0, -1)]
    return lessCats
}

function removeFirstCat(){
    let evenLessCats = [...cats.slice(1,3)]
    return evenLessCats
}