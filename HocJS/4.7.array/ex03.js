// const numbers = [2, 4, 6, 8];
// const check = numbers.every(function (value, index) {
//   if (value % 2 === 0) {
//     return false;
//   }
// });
// console.log(check);

// const a = [5,2,9,-1,8,3];
// const max = a.reduce(function(acc,cur){
//   console.log(acc,cur);
  
// })

class User{
  email = "a@gmail.com";
  static getEmail(){
    return this;
  }
}
console.log(User.getEmail());
