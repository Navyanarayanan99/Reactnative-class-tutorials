
//reducer in js --------------------

// const arrayOne = [1, 2, 3,4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(arrayOne.reduce(reducer));
// console.log(arrayOne.reduce(reducer, 10));



//Array destructuring ------------------

// const a = [1,2,3,4,5,6,7];
// const b = [1,22,31,41,52,66,79];
// // const firstElememnt = a[0];
// // console.log(firstElememnt);
// const [first, second, third, ...restElements] = a;
// console.log(third);
// console.log(restElements);
// //const combine = a.concat(b);
// const combine = [...a, ...b] 
// console.log(combine);
// function getResult (x, y) {
//     return [ x+y, x*y ];
// }

// const result = getResult(12, 5);
// console.log(result);

//Object destructuring --------

// const firstObject = {
//     name: 'ABc',
//     age : 23,
//     address: {
//         city: 'Dummy city',
//         streat: 'Streat name',
//         country: 'IN'
//     },
// };

// // const {name, age} = firstObject;
// // console.log(name);
// // console.log(age);

// function dummyfunction ({name, age, address: {country}}){
//     return{ message: `${name} is ${age} year old`,
//      address: `${name} is a citizen of ${country}`
//  };
    
// }

// const result = dummyfunction(firstObject);
// console.log(result);

var a = 0;
var b = 10
while(a <= b) {
  console.log(a);
  a + 2;
}

//Array destructuring ?
