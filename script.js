console.log("100---Escribe una función que reciba un array de números y devuelva true si el array contiene al menos un número par.")
let numArray = [1,2,3,4,5,6,7,8,9,10]
const parArray = (array) => {
    for (const item of array) {
        if (item % 2 == 0) {
            return true
        }
    }
}
console.log(parArray(numArray) ? 'Existe un numero par' : "No existe un numero par")

console.log("101---Escribe una función que determine si un número es par o impar.")

function parImpar(num) {
    if (num % 2 == 0) {
        return `El numero ${num} es par`
    } else {
        return `El numero ${num} es impar`
    }
}
console.log(parImpar(4))

console.log("102---Escribe una función que determine si un año es bisiesto.")

let year = 2028
function yearBisiesto(year) {
    if (year % 2 === 0) {
        if ((year % 100 === 0 && !(year % 400 === 0))) {
            return false
        }
        return true
    }
}
console.log(yearBisiesto(year) ? `El año ${year} es bisiesto` : `El año ${year} no es bisiesto`)

console.log("103--Escribe una función que encuentre el mayor de tres números.")

function greaterNumber(...num) {
    let mayor = 0
    for (const item of num) {
        if (item < 0 && mayor == 0) {
            mayor = item
        }
        if (item > mayor) {
            mayor = item
        }
    }
    return mayor
}
console.log(`El numero ${greaterNumber(1, 3, 4, 9, 10)} es mayor`)


console.log("104---Escribe una función que invierta una cadena de texto.")

function investString(texto) {
    let newTexto = ""
    for (let i = texto.length - 1; i >= 0; i--) {
        newTexto += texto[i]
    }
    return newTexto
}
console.log(investString('live'))

console.log("105---Escribe una función que calcule la suma de los primeros n números naturales.")

function naturales(...numero) {

    return numero.reduce((a, valor, i, arr) => {
        return valor >= 0 && valor % 1 === 0 ? a + valor : a
    }, 0)
}
console.log(naturales(1, 4, 7.2, -1, 10))


console.log("106---Escribe una función que determine si una cadena de texto es un palíndromo.")

const palindromo = (string) => {
    let notSpace = string.replace(/\s/g, '').toLowerCase()
    let boolean = false
    for (let i = 0; i < notSpace.length - 1; i++) {
        if (notSpace[i] == notSpace[(notSpace.length - 1) - i]) {
            boolean = true
        } else {
            boolean = false
        }
    }
    return boolean
}
console.log(palindromo('we life') ? 'Es un texto palindromo' : 'No es un texto palindromo')

console.log("107---Escribe una función que encuentre el factorial de un número.")

function factorial(numero) {
    if (numero == 0 || numero == 1) {
        return 1
    }
    if(numero < 0){
        return 'Imposible'
    }
    return numero * factorial(numero - 1)

}
const facNum = 666
console.log(`El factorial de ${facNum} es: ${factorial(facNum)}`)

console.log("108---Escribe una función que encuentre el valor máximo en un arreglo de números.")

function maxNum(array){
    let mayor = 0
    for (const item of array) {
        if(item > mayor){
            mayor = item
        }
    }
    return mayor
}
let arrayMax = [24,6,25,2,30,1]
console.log(`El mayor numero del array es: ${maxNum(arrayMax)}`)

console.log("109---Escribe una función que encuentre el valor mínimo en un arreglo de números.")

function minNum(array){
    let menor = array[0]
    for (const item of array) {
        if(item < menor){
            menor = item
        }
    }
    return menor
}
let arrayMin = [9,20,3,4,9,4,5]
console.log(`El menor numero del array es: ${minNum(arrayMin)}`)

console.log("110---Escribe una función que calcule la media de un arreglo de números.")

const mediaArray = (array) =>{
    const sumNum =  array.reduce((a, valor) => a + valor,0)
    return sumNum / array.length
}
const arrayNum = [20,66,6,14,25,20]
console.log(`La media del array es: ${mediaArray(arrayNum)}`)