// Ex. 2
function calculatePerimeter(a, b) {
    let perimeter = 2 * a + 2 * b
    console.log("Perimeter is: ")
    console.log(perimeter)
}


// Ex. 13
function getMax(a, b) {
    if (a > b) {
        return a
    } else {
        return b
    }
}


// Ex. 4
function greet(name) {
    console.log("Hi, " + name + "!")
}


// Run Ex.1
console.log("Ex. 1 Output: ")
calculatePerimeter(7, 8)


// Run Ex.13
console.log("Ex. 13 Output: ")
maxNumber = getMax(8, 49)
console.log(maxNumber)


// Run Ex.4
console.log("Ex. 4 Output: ")
greet("Shigeo")