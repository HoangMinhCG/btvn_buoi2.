// const users = ["User 1", "User 2", "User 3", "User 2", "User 4"];
// let newUsers = [];
// newUsers[newUsers.length] = users[0];

// for (let i = 1; i < users.length - 1; i++) {
//   for (let j = 0; j < newUsers.length - 1; j++) {
//     if (users[i] !== newUsers[j]) {
//       newUsers[newUsers.length] = users[i];
//       console.log(newUsers);
//     }
//   }
// }
// console.log(newUsers);

console.log("Bài 4:");
const numbers4 = [5, 2, 1, 9, 8, 0];
let bien4;
for (let i = 0; i < numbers4.length - 1; i++) {
  for (let j = i + 1; j < numbers4.length; j++) {
    if (numbers4[i] > numbers4[j]) {
      bien4 = numbers4[j];
      numbers4[j] = numbers4[i];
      numbers4[i] = bien4;
    }
  }
}
console.log(numbers4[numbers4.length - 2]);

console.log("Bài 5:");
const numbers = [1, 3, 5, 7, 9, 11];
const newNumber = 4; //Giá trị này có thể thay đổi
let bien;
numbers[numbers.length] = newNumber;
console.log(numbers);
for (let i = 0; i < numbers.length - 1; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    if (numbers[i] > numbers[j]) {
      bien = numbers[j];
      numbers[j] = numbers[i];
      numbers[i] = bien;
    }
  }
}

console.log(numbers);
