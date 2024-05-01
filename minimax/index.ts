function findMinArr(arr: number[]): number {
  let index = 0;
  for (let i in arr) {
    arr[index] > arr[i] && (index = parseInt(i));
  }
  return index;
}

function findMaxArr(arr: number[]): number {
  let index = 0;
  for (let i in arr) {
    arr[index] < arr[i] && (index = parseInt(i));
  }
  return index;
}

function createDash(num: number): string {
  let dash = "";
  for (let i = 0; i < num; i++) {
    dash += "-";
  }
  return dash;
}

function createSpace(num: number): string {
  let dash = "";
  for (let i = 0; i < num; i++) {
    dash += " ";
  }
  return dash;
}

const arr = [
  [3, 1, 8],
  [14, 12, 16],
  [14, 5, 32],
];

const minArr: number[] = [];
const term1 = arr.shift() as number[];
const term2 = arr.shift() as number[];
const term3 = arr.shift() as number[];
minArr.push(term1[findMinArr(term1)]);
minArr.push(term2[findMinArr(term2)]);
minArr.push(term3[findMinArr(term3)]);
const topArr = minArr[findMaxArr(minArr)];

const lenTopArr = String(topArr).length;
const lenMinArr = String(minArr).length + 8;
const lenAllArr =
  String(term1).length + String(term2).length + String(term3).length + 22;
console.log("minimax algorithm:\n");
console.log(`${createSpace((lenAllArr - lenTopArr - 3) / 2)}|`, topArr, "|");
console.log(
  `${createSpace((lenAllArr - lenMinArr-1) / 2)}|${createDash(lenMinArr)}|`
);
console.log(`${createSpace((lenAllArr - lenMinArr-1) / 2)}|`, minArr, "|");
console.log(`|${createDash(lenAllArr)}|`);
console.log("|", term1, term2, term3, "|");
