// const user = {
//   age: 33,
// };
// const key = "age";
// console.log(user[key]);

//Xoa các key không có giá trị trong object
// const user = {
//   name: "HM",
//   email: "hello@gmail.com",
//   age: null,
//   address: undefined,
//   position: "Teacher",
// };
// Object.keys(user).forEach((key) => {
//   if (!user[key]) {
//     delete user[key];
//   }
// });
// console.log(user);

// for(let key in user){
//   const value = user[key];
//   if (!value && value !== 0){
//     delete user[key];
//   }
// }
// console.log(user);

//bt2: nối 2 obj
// const obj1 = {
//   name: "MH",
// };
// const obj2 = {
//   age: 33,
// };

// obj1.concat(obj2);
// console.log(obj1);

// const queryString = "kw=Học+F8&status=active&category=1&category=2";
// const array = queryString.split("&");
// console.log(array);
// const query = {};
// array.forEach((item) => {
//   const itemArr = item.split("=");
//   const key = itemArr[0];
//   const value = itemArr[1];
//   if (!query[key]) {
//     query[key] = value.replaceAll("+", "");
//   } else {
//     query[key] = [query[key]];
//   }
// });
// console.log(query);

const f8 = {
  start:function(value){
    let result = value;
    return{
      add(value){
        result+=value;
        return this;
      },
      minus(value){
        result -= value;
        return this;
      },
      multi(value){
        result *= value;
        return this;
      },
      divi(value){
        result /= value;
        return this;
      },
      get(){        
        return result;
      },
    }
  }
}
f8.start(2).add(8)