console.log("Bài 1:");
const arr1 = [1, 2, 3, 4, 5, 6];
const binhphuong = arr1.map(function (value) {
  return value * value;
});
console.log("Bình phương các số là: ", binhphuong);
const sochan = arr1.filter(function (value) {
  return value % 2 === 0;
});
console.log("Số chẵn trong mảng là: ", sochan);
const sole = arr1.filter(function (value) {
  return value % 2 !== 0;
});
// console.log(sole);
const binhphuongSoLe = sole.map(function (value) {
  return value * value;
});
console.log(binhphuongSoLe);

console.log("Bài 2: ");
const names = ["   hoang ", "AN", "  f8   ", "Education"];
const newNames = names.map(function (value) {
  return value.toString().trim().toLowerCase();
});
console.log(newNames);

const UpperCaseName = newNames.map(function (value) {
  return value.toString().charAt(0).toUpperCase() + value.trim().slice(1);
});
console.log(UpperCaseName);

console.log("Bài 3: ");
const nums = [3, 7, 2, 9, 12, 15, 18];
const newNums = nums.filter(function (value) {
  if (value <= 10 && value % 3 === 0) {
    return value;
  }
});
console.log(newNums);

const newNumsSoLe = nums.filter(function (value) {
  return value % 2 !== 0;
});
console.log(newNumsSoLe);

const nhandoiSoLe = newNumsSoLe.map(function (value) {
  return value * 2;
});
console.log(nhandoiSoLe);

console.log("Bài 4: ");
const words = ["javascript", "php", "css", "html", "python", "java"];
const locTu = words.filter(function (value) {
  if (value.length >= 5) {
    return value;
  }
});
console.log(locTu);
const chuHoa = words.map(function (value) {
  return value.trim().toUpperCase();
});
console.log(chuHoa);
const vietNguoc = words.map(function (value) {
  return value.toString().split("").reverse().join("");
});
console.log(vietNguoc);

console.log("Bài 5: ");
const myArr5 = [
  [1, 2, 3],

  [4, 5, 6],

  [7, 8, 9],
];

// let sum = 0;
const newArr5 = myArr5.map(function (value) {
  // console.log(value);
  let sum = 0;
  value.forEach(function (num) {
    sum = sum + num;
  });
  return sum;
});
console.log(newArr5);

const newArrr5 = myArr5.map(function (value, index) {
  // console.log(index);

  let sum = 0;
  myArr5.forEach(function (num) {
    // console.log(num[index]);

    sum = sum + num[index];
  });
  return sum;
});
console.log(newArrr5);

const tongLonHonMuoi = newArr5.filter(function (value, index) {
  if (value > 10) {
    return value;
  }
});
console.log(tongLonHonMuoi);

console.log("Bài 6: ");
const myArr6 = [
  ["hello", "world"],

  ["javascript", "php"],

  ["css", "html"],
];
const vietHoa = myArr6.map(function (value) {
  return value.toString().toUpperCase().split(",");
});
console.log(vietHoa);

const doDaiTuLonHonBon = myArr6.map(function (value, index) {
  // console.log(value);
  const loc = value.filter(function (value2) {
    // console.log(value2.length);
    return value2.length > 4;
  });
  // console.log(loc);
  return loc;
});
console.log(doDaiTuLonHonBon);

let newArr6 = [];
const mangMotChieu = myArr6.forEach(function (value) {
  value.forEach(function (value3) {
    newArr6.push(value3);
  });
});
console.log(newArr6);

console.log("Bài 7: ");
const myArr7 = [
  [2, 4, 6],

  [8, 10, 12],

  [14, 16, 18],
];
let cauMot = [];
let tongDuongCheoChinh = 0;
let tongDuongCheoPhu = 0;

const duongCheoChinh = myArr7.forEach(function (value, index) {
  value.forEach(function (value2, index2) {
    if (index === index2) {
      tongDuongCheoChinh += value2;
      cauMot.push(value2);
    }
  });
});
console.log(cauMot);

let cauHai = [];
console.log(myArr7.length - 1);

const duongCheoPhu = myArr7.forEach(function (value, index) {
  value.forEach(function (value2, index2) {
    if (index + index2 === myArr7.length - 1) {
      tongDuongCheoPhu += value2;
      cauHai.push(value2);
    }
  });
});
console.log(cauHai);

console.log("Tổng đường chéo chính là: ", tongDuongCheoChinh);
console.log("Tổng đường chéo phụ là: ", tongDuongCheoPhu);

console.log("Bài 8: ");
const scores = [
  [8, 9, 7], // học sinh 1

  [6, 5, 7], // học sinh 2

  [10, 9, 8], // học sinh 3
];

const score = scores.map(function (value) {
  let total = 0;
  let trungBinhCong;

  value.forEach(function (value2) {
    // console.log(value);
    console.log(value.length);
    total += value2;
    trungBinhCong = total / value.length;
  });
  return trungBinhCong;
});
console.log(score);

const diemTrungBinhTrenTam = score.filter(function (value) {
  return value >= 8;
});
console.log(diemTrungBinhTrenTam);

let newArr8 = scores.map(function (value) {
  const diemTangMot = value.map(function (value2) {
    if (value2 < 10) {
      return value2 + 1;
    } else return value2;
  });
  return diemTangMot;
});
console.log(newArr8);
