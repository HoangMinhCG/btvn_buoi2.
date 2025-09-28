// let salary = 6000;
// let salaryReceived;
// if (salary < 0) {
//   console.log("Điều kiện sai");
// } else if (salary <= 5000) {
//   salaryReceived = 5000;
//   console.log(salaryReceived);
// } else if (salary > 5000 && salary <= 10000) {
//   salaryReceived = salary * 0.97;
//   console.log(salaryReceived);
// } else if (salary > 10000 && salary <= 15000) {
//   salaryReceived = salary * 0.95;
//   console.log(salaryReceived);
// } else {
//   salaryReceived = salary * 0.93;
//   console.log(salaryReceived);
// }

let salary = 6000;
let income;
let tax;
if (salary < 0) {
  console.log("Không hợp lệ");
} else {
  if (salary <= 5000) {
    tax = 0;
  } else if (salary <= 10000) {
    tax = 3;
  } else if (salary <= 15000) {
    tax = 5;
  } else {
    tax = 7;
  }
  income = salary - (salary * tax) / 100;
  console.log("Lương thực nhận: ", income);
}

const PRICE1 = 15000;
const PRICE2 = 13500;
const PRICE3 = 11000;
const DISCOUNT = 10;
const DISTANCE1 = 1;
const DISTANCE2 = 5;
const DISTANCE3 = 120;
let km = 0.1;
let total;
if (km < 0) {
  console.log("Điều kiện sai");
} else {
  if (km <= DISTANCE1) {
    total = km * PRICE1;
  } else if (km <= DISTANCE2) {
    total = DISTANCE1 * PRICE1 + (km - DISTANCE1) * PRICE2;
  } else {
    total =
      DISTANCE1 * PRICE1 +
      (DISTANCE2 - DISTANCE1) * PRICE2 +
      (km - DISTANCE2) * PRICE3;
    if (km > DISTANCE3) {
      total = total - (total * DISCOUNT) / 100;
    }
  }
}

if (total) {
  console.log(total);
}


let n = 5;
let giaithua = 1;
let tong = 0;
for(let i = 1; i<=n ; i++){
    giaithua = giaithua * i;
    // console.log(giaithua);
    tong = tong + giaithua;
    console.log(tong);
}