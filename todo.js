// function genarateid(arr) {
//   if (arr.length === 0) return 1;
//   return arr[arr.length - 1].id + 1;
// }
// // console.log(genarateid([]));

// const list = [1, 2, 3, 4, 5, 6];

// let finalarry = [];
// const cutarry = list.slice(0, list.length / 2);
// finalarry.push(cutarry);
// const sndhalf = list.slice(-list.length / 2);
// console.log(sndhalf);
// console.log(cutarry);

// <--foreach method-->

// function reuse(onearr, allogic) {
//   for (i = 0; i < onearr.length; i++) {
//     allogic(onearr[i], i, onearr);
//   }
// }
// // function logic(value, index, arry) {
//   console.log(value, index, arry);
// }
// function logic2(value) {
//   console.log(value);
// }

// reuse([1, 3, 76], logic2);
// reuse(["one", "two", "three"], logic);

// function myforeach(onearr, allogic) {
//   for (i = 0; i < onearr.length; i++) {
//     allogic(onearr[i], i, onearr);
//   }
// }
// sum = 0;

// myforeach([1, 2, 3, 4], function sumarr(m) {
//   sum = m + sum;
// });
// console.log(sum);

// <--implement a basic stack-->

// const maxsize = 20;
// class stack {
//   constructor() {
//     list = new Array(maxsize);
//     top = -1;
//   }
//   push(value) {
//     if(top>=maxsize){
//         console.log(" stack is overflow")
//         return false
//     }
//     return list[++top]=value

//   }
//   pop() {

//   }
//   peek() {
//     if (isEmpty()) {
//       console.log("stack underflow");
//       return false;
//     }
//     return list[top];
//   }
//   isEmpty() {
//     return top < 0;
//   }
// }

let arry = [1, 2, 3, 4, 5, 6, 7, 2, 4, 7, 7, 9, 0];
for (a = 0; a < arry.length; a++) {
  m = arry[a];
  console.log(m);
}
