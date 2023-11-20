/*
const d= new Date(2020, 9, 17)

console.log(d.getFullYear());


const number = Math.ceil(-9.12)
console.log(number)

const number = Math.floor(-9.12)
console.log(number)

const number = Math.round (9.52)
console.log(number)

const numbers = [4, 2, -9, 9, 7]
const num = Math.min(...numbers)
console.log(num);

const str = '1.45'
const floatNumber = parseFloat(str)
console.log(floatNumber + 1);


const str = '9090'
const intNumber = parseInt(str)
console.log(intNumber + 1);

const number = Math.trunc(4.16)
console.log(number)

const number = 3
const isInt = Number.isInteger (number)
console.log (isInt);

function square(number) {
    if(isNaN(number))
    return 'Invalid input'
    return number * number
    }
    console.log(square('a'))

const number = Math.pow(2, 3)
console.log(number)

const number = 16
const sqrtNumber = Math.sqrt (number)
console.log(sqrtNumber);

// const number = 0
console.log(Math.sign('a'));

const result = -3 / 0
console.log(result);

const randomNumber = Math.random()
console.log(randomNumber)

const number = 357_643_912
console.log(number)

// let age = 14
let age = 0b1110

// let age = 14
let age = 0016

const number = 12
console.log(number.toString(2));

function sum(firstNumber, secondNumber) {
    return [${firstNumber + secondNumber}]\\\
    }
    function sub (firstNumber, secondNumber) {
    return `[${firstNumber secondNumber}]`
    }
    console.log(sub(1, 2))

    function sum(firstNumber, secondNumber) {
        return firstNumber + secondNumber
        }
        function sub (firstNumber, secondNumber) {
        return firstNumber - secondNumber
        }
        function mul(firstNumber, secondNumber) {
            return firstNumber * secondNumber
            }
            function operation (firstNumber, secondNumber, opCallback){
            return `(${opCallback(firstNumber, secondNumber) })`
            }
            console.log(operation (5, 2, sum))
            console.log(operation(5, 2, sub))
            console.log (operation (5, 2, mul))
            console.log(operation(5, 2, function (firstNumber, secondNumber) {
                return firstNumber + secondNumber
                }))
                console.log (operation (9, 7, function (firstNumber, secondNumber) {
                return firstNumber + secondNumber
                }))_
                console.log (operation (5, 2, sub))
               
                    console.log(operation (5, 2, (firstNumber, secondNumber)
                    => firstNumber + secondNumber))


                    const sum = (firstNumber, secondNumber) => firstNumber + secondNumber
                    console.log(operation (5, 2, sum))
                    console.log(operation (15, 12, sum))


                    function format (message, formatCallback){
                        return formatCallback(message)
                        }
                        function htmlFormat (message) {
                        return `<div>${message}</div>`
                        }
                        function jsonFormat(message) {
                        return `{"message": "${message}"}`
                        }
                        console.log (format('Welcome to JavaScript', jsonFormat))
                     */
                     

                        /*
                        const colors = ['black', 'red', 'green', 'blue', 'white']
                     const rgbColors = colors.slice(1, 4)
                     console.log(rgbColors);

const colors = ['red', 'green', 'blue']
colors.forEach(function(currentValue, index, array){
console.log(index, currentValue);
})

const ages = [11, 13, 15, 12]
const hasAdult = ages.some (function(element) {
return element >= 18
})
console.log(hasAdult);

const ages = [21, 23, 27, 25, 22, 17]
const areAdults = ages.every(function (element) {
return element >= 18
 })
console.log (areAdults);

const colors = ['red', 'green', 'blue']
const isContainRed = colors.includes('red', 1)
console.log(isContainRed);

const colors = ['red', 'green', 'blue', 'green']
const index = colors.indexOf('green', -2)
console.log (index);


const colors = ['red', 'green', 'blue', 'green']
const index = colors.lastIndexOf('green',
console.log (index); 

const ages = [12, 14, 19, 21]
const index = ages.findIndex (function (element) {
return element >= 25
})
console.log (index);

const numbers = [11, 7, 9, 15]
const el = numbers.find(function(element) {
return element % 4 === 0
})
console.log (el);

const numbers = [11, 7, 9, 15]
const el = numbers.find(function(element) {
return element % 4 === 0
})
console.log (el);

const numbers = [2, 3, 7, 4, 9]
const evenNumbers = numbers.filter(function(currentValue) {
return currentValue % 2 === 0
})
console.log(evenNumbers);

const primaryColors = ['red', 'yellow', 'blue']
const secondaryColors = ['green', 'orange', 'violet']
const colors = primaryColors.concat()
console.log(colors);

const colors = ['black', 'red', 'green', 'blue', 'white']

const rgbColors = colors.slice(-4,-1)
console.log (rgbColors);

const colors = ['red', 'green', 'blue', 'black', 'white']
Į
colors.splice(2, 0, 'gray', 'yellow')
console.log(colors);

const arrColors = ['red', 'green', 'blue']
const strColors = arrColors.join('-')
console.log (strColors);

const colors = ['red', 'black', 'green', 'white', 'blue']
const numbers = [921, 735, 840]
colors.sort()
// console.log(colors);
numbers.sort()
console.log (numbers);

const colors = ['red', 'green', 'blue']
colors.reverse()
console.log(colors);

const numbers = [3, 7, 9]
const squaredNumbers = numbers.map(function(currentValue) {
return currentValue * currentValue
})
console.log(squaredNumbers);

const strColors = 'red; green; blue; black'
const arrColors = strColors.split()
console.log(arrColors);

олашин const numbers = [2, 4, 1, 3, 5]
const total = numbers.reduce (function (accumulator, currentValue, index, array) {
return accumulator + currentValue
}, 100)
console.log(total);

*/


/*
let name = 'camry'
let color = 'white'
let currentSpeed = 0
function move (speed) {
carCurrentSpeed = speed
return `The ${name} is moving at speed of $
{carCurrentSpeed}km per hour`
}
function stop() {
carCurrentSpeed = 0
return `The ${name} stopped`
}
console.log (move(100))

const car = {
    name: 'camry',
    color: 'white',
    currentSpeed: 0,
    move: function (speed) {
    this.currentSpeed = speed
    return `The ${this.name} is moving at speed of ${this.currentSpeed}km per hour`
},
stop: function () {
this.currentSpeed = 0
return `The ${this.name} stopped`
}
}
console.log (car.move(100));

const car2 = {
    name: 'Corolla',
    color: 'black',
    currentSpeed: 0,
    move: function (speed) {
    this.currentSpeed = speed
    return 'The ${this.name} is moving at speed
    of ${this.currentSpeed}km per hour'
    },
    stop: function() {
    this.currentSpeed = 0
    return The ${this.name} stopped
    }
    }



    2 class Car {
        constructor (name, color, currentSpeed) {
        this.name = name
        this.color = color
        this.currentSpeed = current Speed
        }
        }
    
        const car1 = new Car('camry', 'white', 0) 
        const car2 = new Car('corella', 'black', 0)
        console.log(car1);
        console.log(car2);

        class Car {
            constructor (name, color, currentSpeed) {
                this.name = name
                this.color = color
                this.currentSpeed = current Speed
                }
                move(speed) {
                this.currentSpeed = speed
                return `The ${this.name} is moving at speed of ${this.currentSpeed}km per
                hour`
                }
                stop() {
                this.currentSpeed = 0
                return `The ${this.name} stopped`
                }
                }
                const car1 = new Car('camry', 'white', 0)

                class Car
static numberOfCars = 0
constructor (name, color, currentSpeed) {
this.name = name
this.currentSpeed = current Speed
Car.incrementNumberOfCars ()
}
move (speed) {
    this. #currentSpeed = speed
    return `The ${this.name} is moving at speed of ${this.#currentSpeed}km per hour`
    }
    stop () {
    this. #currentSpeed = 0
    return `The ${this.name} stopped`
    }
    static incrementNumberOfCars() {
    Car.numberOfCars++
    }
    const car = new Car('Cam move (speed: any): string
    console.log(car.move(100));
    console.log (car)


    class Animal {
        constructor (name, color) {
        }
        run (speed) {
        }
        makeSound () {
        console.log('sound...');
        }
        }
        class Cat extends Animal {
        makeSound () {
        console.log('mew...' ) ;
        }
        }
        const cat= new Cat('snowy', 'white')
        cat.makeSound ()

        let user1 = {
            firstName: "Fatimah",
            lastName: "Khalid"
            }
            let printFullName = function () {
            console.log("Hello, "+this.firstName+" "+this.lastName);
            }
            printFullName();


             let user2 = {
                firstName: "Asmaa",
                lastName: "Mohammed",
                }
                let printFullName = function (age) {
                console.log("Hello, "+this.firstName+", "+this. lastName+". Your age is: "+age);
                return
                }
                let newFunction = printFullName.bind(user1)
                newFunction("25")

                let add1 = (num1, num2) => {
                    return num1+ num2;
                    }
                    let add2 = (num1, num2) => {return num1+ num2;}
                    let add3= (num1, num2) => num1+ num2
                    let result = (num1, num2) => {let result = num1+num2}

                    let add (num1, num2, num3) => num1+ num2+num3
let result = num1 => {let result = num1}
let print = () => console.log("This arrow function has no parameters")

(function(n){
    console.log(n);
    }) ("Reem");

       let obj = {
        title: "How to write a function in an object",
        functon1 : function() {
        return console.log("First function")
        },
        function2, : () => {
        return console.log("Second function")
        },
        function3() {
        return console.log("Third function")
        }
       }
       obj. functon1()
       obj.function2()
       obj.function3()

       function rectangleArea (w, l){
        console.log(w, l);
        let a = w * l;
        return a;
         let area = rectangleArea (4);
        }
        console.log(area);


        function rectangle0rSquareArea(w, l=10) {
            let area = w * l;
            return area;
            } 
            
            let area = rectangle0rSquareArea(4, 5);
            console.log(area);

            let studentsNames = function (namel, name2, name3, name4) {
                console.log (namel, name2, name3, name4)
                }
                names = ["Nora" "Sara", "Eman ", "Ghadah "]
                1
                studentsNames (... names)

       
            */


                


