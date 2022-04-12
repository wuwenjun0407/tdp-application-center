// function fn1(a, b, c) {
//     console.log(a, b, c, '111');
// }

// // Function.prototype.call = function (context) {
// //     if (typeof this !== 'function') {
// //         throw new Error('Error');
// //     }
// //     if (context === null || context === undefined) {
// //         context = window;
// //     } else {
// //         context = Object(context);
// //     }
// //     context.fn = this;
// //     const _args = [...arguments].slice(1);
// //     const result = context.fn(..._args);
// //     delete context.fn;
// //     return result;
// // };

// // fn1.call(0, 1, 2, 3);

// // Function.prototype.apply = function (context) {
// //     if (typeof this !== 'function') {
// //         throw new Error('Error');
// //     }

// //     if (context === null || context === undefined) {
// //         context = window;
// //     } else {
// //         context = Object(context);
// //     }

// //     context.fn = this;
// //     const _args = [].concat(arguments[1] || []);
// //     // const _args = [...(Array.isArray(arguments[1]) ? arguments[1] : [])];
// //     const result = context.fn(..._args);
// //     delete context.fn;
// //     return result;
// // };

// // fn1.apply(1, [4, 5]);

// Function.prototype.bind = function (context) {
//     if (typeof this !== 'function') {
//         throw new Error('Error');
//     }

//     if (context === null || context === undefined) {
//         context = window;
//     } else {
//         context = Object(context);
//     }

//     const _this = this;
//     const _args = [...arguments].slice(1);
//     function Bound() {
//         var params = [...arguments];
//         return _this.apply(this.constructor === Bound ? this : context, _args.concat(params));
//     }
//     return Bound;
// };

// var obj = {
//     z: 1
// };

// function fn(x, y) {
//     console.log(this, '12121');
//     this.name = '听风是风';
//     // console.log(this.z);
//     // console.log(x);
//     // console.log(y);
// }
// fn.prototype.age = 26;

// var bound = fn.bind(obj, 2);
// // bound(3);
// var person = new bound(3);
// person.a = '[][]';
// // console.log(person);

// // console.log(fn1.bind(1)(7, 8, 9));
