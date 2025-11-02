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

// Dom Nagivation
// const btnList = document.querySelectorAll("button")
// btnList.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     console.log(btn);

//   })
// })

const ul = document.querySelector("ul");
ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("down")) {
    console.log("down");
    const li = e.target.parentElement;
    const nextElement = li.nextElementSibling;
    if (!nextElement) {
      return;
    }
    ul.insertBefore(nextElement, li);
  }

  if (e.target.classList.contains("up")) {
    console.log("down");
    const li = e.target.parentElement;
    const preElement = li.previousElementSibling;
    if (!preElement) {
      return;
    }
    ul.insertBefore(li, preElement);
  }

  if (e.target.nodeName === "LI") {
    e.stopPropagation();
    removeSelected();
    e.target.classList.add("selected");
    document.addEventListener("keyup", (e) => {
      console.log(e);
    });
  }
});

const removeSelected = () => {
  const itemSelected = document.querySelector("ul li.selected");
  if (itemSelected) {
    itemSelected.classList.remove("selected");
  }
};
document.addEventListener("click", removeSelected);
