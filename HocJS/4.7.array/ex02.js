//Tìm giao giữa 2 mảng
// const arr1 = [5, 2, 9, 1, 8];
// const arr2 = [2, 5, 1, 10];
// let newArr = [];
// for (let i = 0; i <= arr1.length - 1; i++) {
//   if (arr2.includes(arr1[i])) {
//     newArr.push(arr1[i]);
//   }
// }
// console.log(newArr);

//Yêu cầu: chunk array theo size
//output: [[1,2],[3,4],[5,6],[7,8],9]
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const size = 2;
// const newArr = [];
// // let chunk;
// // for (let i = 0; i < numbers.length; i = i + size) {
// //   chunk = numbers.slice(i, i + size);
// //   newArr.push(chunk);
// // }
// // console.log(chunk);

// const newArr2 = [[]];
//ý tưởng

// //Dùng filter
// const users = [
//   "Tạ Hoàng An",
//   "Nguyễn Văn Sơn",
//   "Hoàng Anh Tuấn",
//   "Đặng Ngọc Sơn",
// ];
// let keyword = "sơn";
// //output: ['Nguyễn Văn Sơn', 'Đặng Ngọc Sơn']
// const result = users.filter(function (value) {
//   return value.toLowerCase().includes(keyword.toLowerCase());
// });
// console.log(result);

//Lộc phần tử trùng trong mảng
const myArr = ["Item1", "Item2", "Item3", "Item2", "Item4"];
const result = myArr.filter(function (value, index) {
  console.log(myArr.indexOf(value), index);
  return myArr.indexOf(value) === index;
});
console.log(result);
