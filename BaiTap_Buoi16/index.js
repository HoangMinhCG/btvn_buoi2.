console.log("Bài 1:");
let electronic = 450;
const PRICE1 = 1.678;
const PRICE2 = 1.734;
const PRICE3 = 2.014;
const PRICE4 = 2.536;
const PRICE5 = 2.834;
const PRICE6 = 2.927;
const DISTANCE1 = 50;
const DISTANCE2 = 100;
const DISTANCE3 = 200;
const DISTANCE4 = 300;
const DISTANCE5 = 400;
let total;
if (electronic < 0) {
  console.log("Dữ liệu sai");
} else {
  if (electronic <= DISTANCE1) {
    total = electronic * PRICE1;
  } else if (electronic <= DISTANCE2) {
    total = DISTANCE1 * PRICE1 + (electronic - DISTANCE1) * PRICE2;
  } else if (electronic <= DISTANCE3) {
    total =
      DISTANCE1 * PRICE1 +
      (DISTANCE2 - DISTANCE1) * PRICE2 +
      (electronic - DISTANCE2) * PRICE3;
  } else if (electronic <= DISTANCE4) {
    total =
      DISTANCE1 * PRICE1 +
      (DISTANCE2 - DISTANCE1) * PRICE2 +
      (DISTANCE3 - DISTANCE2) * PRICE3 +
      (electronic - DISTANCE3) * PRICE4;
  } else if (electronic <= DISTANCE5) {
    total =
      DISTANCE1 * PRICE1 +
      (DISTANCE2 - DISTANCE1) * PRICE2 +
      (DISTANCE3 - DISTANCE2) * PRICE3 +
      (DISTANCE4 - DISTANCE3) * PRICE4 +
      (electronic - DISTANCE4) * PRICE5;
  } else {
    total =
      DISTANCE1 * PRICE1 +
      (DISTANCE2 - DISTANCE1) * PRICE2 +
      (DISTANCE3 - DISTANCE2) * PRICE3 +
      (DISTANCE4 - DISTANCE3) * PRICE4 +
      (DISTANCE5 - DISTANCE4) * PRICE5 +
      (electronic - DISTANCE5) * PRICE6;
  }
  console.log(total);
}

console.log("Bài 2:");
let n2 = 98;
if (n2 < 2) {
  console.log("Số đã nhập không phải là số nguyên tố.");
} else {
  if (n2 == 2 || n2 == 3 || n2 == 5) {
    console.log("Số đã nhập là số nguyên tố.");
  } else if (n2 % 2 !== 0 && n2 % 3 !== 0 && n2 % 5 !== 0) {
    console.log("Số đã nhập là số nguyên tố.");
  } else {
    console.log("Số đã nhập không phải là số nguyên tố.");
  }
}

// 10000000000
// const isSNT = (n) => {
//   if (n < 2) return true;

//   //i = 5
//   for (let i = 2; i <= Math.sqrt(n); ++i) {
//     // 5 % 5
//     if (n % i === 0) return false;
//   }

//   return true;
// };

// console.log(Math.sqrt(10000000000));

// let result = false;
// const n = 90;

// if (n < 2) result = true;
// else {
//   let ok = false;
//   for (let i = 2; i <= Math.sqrt(n); ++i) {
//     // 5 % 5
//     if (n % i === 0) {
//       ok = true;
//     }
//   }

//   if (!ok) result = true;
// }
//i = 5

// console.log(result);

console.log("Bài 3:");
let n3 = 10;
let sochan = "";
let sole = "";
let i = 1;
for (i; i < n3; i++) {
  if (i % 2 == 0) {
    if (i == n3 - 1 || i == n3 - 2) {
      sochan = sochan + i;
    } else {
      sochan = sochan + i + ",";
    }
  } else {
    if (i == n3 - 1 || i == n3 - 2) {
      sole = sole + i;
    } else {
      sole = sole + i + ",";
    }
  }
}
let i1 = i + 1;
let i2 = i + 2;
console.log(sochan);
console.log(sole);

console.log("Bài 4:");
let n4 = 4;
let tich = 1;
let total4 = 0;
for (let i = 1; i <= n4; i++) {
  let j = i + 1;
  tich = i * j;
  total4 = total4 + tich;
}
console.log(total4);

console.log("Bài 5:");
let a5 = 5;
let b5 = 9;
let tongsochan = 0;
let tongsole = 0;

if (a5 < b5) {
  for (a5; a5 <= b5; a5++) {
    if (a5 % 2 == 0) {
      tongsochan = tongsochan + a5;
    } else {
      tongsole = tongsole + a5;
    }
  }
} else {
  for (b5; b5 <= a5; b5++) {
    if (b5 % 2 == 0) {
      tongsochan = tongsochan + b5;
    } else {
      tongsole = tongsole + b5;
    }
  }
}

console.log("Tổng số chẵn là: ", tongsochan);
console.log("Tổng số lẻ là: ", tongsole);

console.log("Bài 6:");
let row = "";
for (let i = 1; i <= 8; i++) {
  if (i % 2 == 0) {
    row = row + "<tr>";
    for (let j = 1; j <= 8; j++) {
      if (j % 2 == 0) {
        row = row + "<td>" + "</td>";
      } else {
        row = row + "<td style='background-color: black'>" + "</td>";
      }
    }
    row = row + "</tr>";
  } else {
    row = row + "<tr>";
    for (let j = 1; j <= 8; j++) {
      if (j % 2 == 0) {
        row = row + "<td style='background-color: black'>" + "</td>";
      } else {
        row = row + "<td>" + "</td>";
      }
    }
    row = row + "</tr>";
  }
}

let html = `
    <table border="1" width="100%" height="900px">
      ${row}
    </table>`;
document.body.innerHTML = html;

// let test = "<div class='parent'>";

// for (let i = 1; i <= 8; ++i) {
//   for (let j = 1; j <= 8; ++j) {
//     if ((i + j) % 2 === 0) test += "<div class='box'></div>";
//     else test += "<div class='box active'></div>";
//   }
// }

// test += "</div>";

// document.body.innerHTML = test;

console.log("Bài 8:");
let triangle = "";
let n8 = 5;
let bien = 0;
for (let i = 1; i <= n8; i++) {
  for (let j = 1; j <= i; j++) {
    bien = bien + 1;
    triangle = triangle + " " + bien;
  }
  triangle = triangle + "\n";
}
console.log(triangle);
