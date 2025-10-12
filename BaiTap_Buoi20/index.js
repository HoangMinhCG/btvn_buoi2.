console.log("Bài 1:");
const users = [
  { name: "An", age: 25 },

  { name: "Bình", age: 30 },

  { name: "Chi", age: 22 },
];
const user = users.forEach(function (value) {
  console.log(value.name);
});

const biggestAge = users.reduce(function (acc, cur) {
  if (acc.age < cur.age) {
    return cur;
  } else {
    return acc;
  }
});
console.log(biggestAge.age);

const ages = users.map(function (value) {
  return value.age;
});

const age = ages.reduce(function (acc, cur) {
  return acc + cur;
});
console.log(age / ages.length);

console.log("Bài 2:");
const products = [
  { name: "Laptop", price: 15000000 },

  { name: "Mouse", price: 250000 },

  { name: "Keyboard", price: 800000 },
];
const nameProduct = products.map(function (value) {
  return value.name;
});
console.log(nameProduct);

const price = products.map(function (value) {
  return value.price;
});

const total = price.reduce(function (acc, cur) {
  return acc + cur;
});
console.log(total);

const productLonHonMotTrieu = products.filter(function (value) {
  if (value.price > 1000000) {
    return value;
  }
});
console.log(productLonHonMotTrieu);

console.log("Bài 3:");
const students = [
  { name: "Lan", scores: [8, 9, 7] },

  { name: "Huy", scores: [6, 5, 7] },

  { name: "Minh", scores: [9, 8, 10] },
];

const trungBinhDiem = students.map(function (value) {
  const tongDiem = value.scores.reduce(function (acc, cur) {
    // console.log(acc);
    return acc + cur;
  });
  value.scores = tongDiem / value.scores.length;
  return value;
});

console.log("Điểm trung bình từng học sinh là:", trungBinhDiem);

const diemTrungBinhLonHon8 = trungBinhDiem.filter(function (value) {
  if (value.scores >= 8) {
    return value;
  }
});
console.log("Học sinh có điểm trung bình >= 8 là: ", diemTrungBinhLonHon8);

const diemGiamDan = trungBinhDiem.sort(function (a, b) {
  return b.scores - a.scores;
});
console.log(diemGiamDan);

console.log("Bài 4:");
const posts = [
  {
    id: 1,

    title: "JavaScript cơ bản",

    tags: ["js", "basic"],

    comments: [
      { user: "An", text: "Hay quá!" },

      { user: "Bình", text: "Rất dễ hiểu" },
    ],
  },

  {
    id: 2,

    title: "Học React không khó",

    tags: ["react", "js"],

    comments: [{ user: "Chi", text: "Cảm ơn chia sẻ" }],
  },
];
// const print = posts.forEach(function(value){
//   console.log(`${value.title}: có ${value.comments.length} bình luận`);

// })

// let mangKhongTrungLap = [];
console.log(posts.tags);

const a = posts.forEach(function (value) {
    value.tags.reduce(function(acc, cur){
      console.log(acc);      
      // console.log(cur);
      if(!acc.includes(cur)){
      acc.push(cur);
    }
    return acc;
  },[])
  // console.log(value.tags);
});
console.log(a);

