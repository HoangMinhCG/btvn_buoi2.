// Dom Nagivation
const btnList = document.querySelectorAll("button")
btnList.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn);
    
  })
})