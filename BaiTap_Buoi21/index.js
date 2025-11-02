console.log("Bài 1:");
const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
  { id: 2, name: "Phone", category: "Electronics", price: 800 },
  { id: 3, name: "Shirt", category: "Clothing", price: 40 },
  { id: 4, name: "Shoes", category: "Clothing", price: 60 },
  { id: 5, name: "Headphones", category: "Electronics", price: 150 },
];
const product = products.filter(function (value) {
  if (value.category === "Electronics") {
    return value;
  }
});
console.log(product);

const tong = product.map(function (value) {
  return value.price;
});
const total = tong.reduce(function (acc, cur) {
  return acc + cur;
});
console.log(total);

console.log("Bài 2:");
const students = [
  { id: 1, name: "An", scores: { math: 8, english: 7, science: 9 } },
  { id: 2, name: "Bình", scores: { math: 6, english: 8, science: 7 } },
  { id: 3, name: "Châu", scores: { math: 9, english: 6, science: 8 } },
];
const tong2 = students.map(function (value) {
  const diemTungHocSinh = Object.values(value.scores);
  const total2 = diemTungHocSinh.reduce(function (acc, cur) {
    return acc + cur;
  });
  value.scores = total2 / diemTungHocSinh.length;
  return value;
});
console.log(tong2);

const trungBinhDiemLonNhat = tong2.reduce(function (acc, cur) {
  // console.log(acc.scores);
  if (acc.scores < cur.scores) {
    return cur;
  } else {
    return acc;
  }
});
console.log(trungBinhDiemLonNhat);

const diemGiamDan = tong2.sort(function (a, b) {
  return b.scores - a.scores;
});
console.log(diemGiamDan);

console.log("Bài 3:");
const orders = [
  {
    orderId: 101,
    customer: "John",
    items: [{ name: "Laptop", price: 1000, quantity: 1 }],
  },
  {
    orderId: 102,
    customer: "Alice",
    items: [
      { name: "Phone", price: 500, quantity: 2 },
      { name: "Charger", price: 50, quantity: 3 },
    ],
  },
  {
    orderId: 103,
    customer: "Bob",
    items: [{ name: "Headphones", price: 200, quantity: 2 }],
  },
];

console.log("Bài 4:");
const employees = [
  { id: 1, name: "Mai", department: "IT", salary: 1200 },
  { id: 2, name: "Nam", department: "HR", salary: 800 },
  { id: 3, name: "Hà", department: "IT", salary: 1500 },
  { id: 4, name: "Linh", department: "Marketing", salary: 900 },
  { id: 5, name: "Phúc", department: "IT", salary: 1100 },
];


const totalSalaryByDept = employees.reduce(function(acc, cur) {
  acc[cur.department] = (acc[cur.department] || 0) + cur.salary;
  return acc;
  // console.log(acc[cur.department]);
}, {});
console.log(totalSalaryByDept);

const highestSalaryByDept = employees.reduce((acc, cur) => {
  // if(acc[cur.department].salary < cur.salary {
    
  // })
  console.log(cur.department);
  
  
}, {});

console.log(highestSalaryByDept);