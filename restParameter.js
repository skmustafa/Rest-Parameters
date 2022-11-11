
// //JavaScript functions don't give a func about extra parameters, they simply ignore them.

// // function add(num1,num2) {
// //   return num1 + num2
// // }
// // console.log(add(20,30,40)) // here value 40 is simply ignored without raising any error,but this would be an error in c# and java


// // Arguement Keyword
// // function add(num1,num2){
// //   return num1 + num2 + arguments[2]
// // }
// // console.log(add(23,43,50))
// // But argument keyword doesnt jam with arrow function,there are several other issues also


// // Rest Parameter

// function add(...value){
//   let sum=0;
//   for(const num of value){
//     sum+=num
//   }
//   return sum
// }
// console.log(add(12,1,2,44,55,4,66,88))




// // if you log the numbers parameter you'll come to know its an array
// function add(...numbers) {
//   console.log(numbers)
// }
// add(100, 200, 500)
// // [ 100, 200, 500 ]


// // Another tiny rule to use rest parameter is that it must be the last parameter in a function's parameter list.
// const info = (name, age, ...skills, gender) => `${name} ${age} - ${skills.join(', ')}`

// console.log(info('John', 21, 'Python', 'Bootstrap', 'Sass'))

// // Uncaught SyntaxError: Rest parameter must be last formal parameter


// const [hobby, ...otherHobbies] = ['Football', 'Swimming', 'Boxing']

// console.log(hobby)
// console.log(otherHobbies)

// const { department, ...otherDetails } = {
//     id: 1,
//     name: 'John Doe',
//     salary: 1200,
//     department: 'Accounts'
// }

// console.log(department)
// console.log(otherDetails)

// // Football
// // [ 'Swimming', 'Boxing' ]
// // Accounts
// // { id: 1, name: 'John Doe', salary: 1200 }
