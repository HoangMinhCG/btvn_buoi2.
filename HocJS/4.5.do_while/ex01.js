// let n = 500;
// let count = 0;
// while (n % 2 === 0) {
//   n = n / 2;
//   count++;
// }
// console.log(count);

// let n = 23519;
// let hieu;
// let total = 0;
// while (n > 0) {
//   hieu = n % 10;
//   n = (n - hieu) / 10;
//   total = total * 10 + hieu;
// }
// console.log(total);

let fullname = "HOANG MiNH";
let nameUpperCase = fullname.toUpperCase();
// let n = fullname.length;
// console.log(n);
// for (let i = 0; i <= n; i++) {
//   console.log(fullname.charAt(i));
//   if (fullname.charAt(i) === nameUpperCase.charAt(i)) {
//     console.log("đúng");
//   } else {
//     console.log("sai");
//   }
// }

// if(fullname === nameUpperCase){
//   console.log("Hợp lệ");
// } else {
//   console.log("Không hợp lệ");

// }

let myArr = ["a", "b", "c"];
for (let index in myArr) {
  console.log(myArr[index]);
}

for (let element of myArr) {
  console.log(element);
}
