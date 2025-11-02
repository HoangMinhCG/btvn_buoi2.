// const allItems = document.querySelectorAll("ul li");
// console.log(allItems);

// // allItems.forEach((item) => {
// //   item.addEventListener("click", () =>{
// //     console.log(item);
    
// //   })
// // })

// allItems.forEach((item) => {
//   const btn = item.querySelector("button");
//   const span = item.querySelector("span");
//   btn.addEventListener('click', () => {
//     //xác định item nào đang active
//     const itemActive = document.querySelector("ul li.active");
//     item.classList.toggle("active");
//     if(itemActive){
//       itemActive.classList.remove("active");
//       const btnActive = itemActive.querySelector("button");
//       btnActive.innerText = "show";
//     }
//     if(item.classList.contains("active")){
//       //đang mở
//       btn.innerText = "hide";

//     }else {
//       //đang đóng
//       btn.innerText = "show";
//     }
//   })
// })



