console.log("Bài 1:")
let age = 24;
console.log("Tôi năm nay", age, "tuổi.");

console.log("Bài 2:")
let PI = 3.14159;
let r = 5;
let acreage = PI * r ** 2;
console.log("Diện tích hình tròn với bán kính r = 5 là: ", acreage);

console.log("Bài 3:")
let a = 7;
let b = 3;
let total = a + b;
let difference = a - b;
let multiply = a * b;
let divide = a / b;
let remainder = a % b;
console.log("Tổng của a và b là: ", total);
console.log("Hiệu của a và b là: ", difference);
console.log("Tích của a và b là: ", multiply);
console.log("Thương của a và b là: ", divide);
console.log("Số dư của phép chia a và b là: ", remainder);

console.log("Bài 4:")
let name = "";
let defaultName = "Khách";
let displayName;
if (name != "") {
  displayName = name;
  console.log(displayName);
} else {
  displayName = defaultName;
  console.log(displayName);
}

console.log("Bài 5:")
let ageB5 = 20;
let hasLicense = true;
if (ageB5 >= 18 && hasLicense === true) {
  console.log("Đủ điều kiện");
} else {
  console.log("Không đủ điều kiện");
}

console.log("Bài 6:")
let username;
let password;
console.log(username !== "");
console.log(displayName !== "");

console.log("Bài 7:")
let salePrice = 70000;
let discountRate = 30;
let price = salePrice * (100 / (100 - discountRate));
console.log(
  "Giá sau khi đã khuyến mãi là 70000, tỷ lệ giảm giá là 30%. Vậy giá gốc của sản phẩm là :",
  price
);


console.log("Bài 8:")
let a1 = 2;
let b1 = 3;
console.log('a có giá trị: ', a1);
console.log('b có giá trị: ', b1);
a1 = a1 + b1;
b1 = a1 - b1;
a1 = a1 - b1;
console.log("Sau khi hoán vị a b có giá trị lần lượt là: ", a1, b1);

