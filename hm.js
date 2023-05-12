const no1 = [
  [1, 4, 8],
  [8, 3, 9],
  [9, 4, 5],
];
const no2 = [
  [3, 6, 9],
  [4, 7, 9],
  [5, 2, 8],
];

function matrixsum(x, y) {
  const finalsum = [];
  for (a = 0; a < x.length; a++) {
    const row = [];
    for (i = 0; i < x[a].length; i++) {
      row.push(x[a][i] + y[a][i]);
    }
    finalsum.push(row);
  }
  return finalsum;
}
const final = matrixsum(no1, no2);
// console.log(final);
const students = [
  { id: 5, name: "jamil" },
  { id: 6, name: "ahosan" },
  { id: 9, name: "jueal" },
  { id: 7, name: "machut" },
];
const id = 6;
const name = "asraful";

function updatename(allstdnt, findid, updtnm) {
  const newarr = [];
  for (i = 0; i < allstdnt.length; i++) {
    if (allstdnt[i].id === findid) {
      allstdnt[i].name = updtnm;
    }
  }
  return allstdnt;
}
const finalupdt = updatename(students, id, name);
// console.log(finalupdt);
let m;
let arry = [1, 2, 3, 4, 5, 6, 7, 2, 4, 7, 7, 9, 0];
for (a = 0; a < arry.length; a + 2) {
  m = arry[a];
}
console.log(m);

// <--slice methode -->

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const sliced = arr.slice(0, arr.length / 2);
// console.log(sliced);
const sliced2 = arr.slice(arr.length / 2, arr.length);
// console.log(sliced2);

// <-- clone slice-->
const clones = arr.slice();
// console.log(arr === clones);

// <--arry like object to arry-->
function argum() {
  return Array.prototype.slice.call(arguments);
}
const finalarr = argum(1, 2, 3, 4, 5, "fgfyg");
// console.log(finalarr);
console.log(finalarr.__proto__.constructor);
