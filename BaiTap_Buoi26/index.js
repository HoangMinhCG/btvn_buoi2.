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

const menu = document.querySelector(".box");

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

ul.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  const li = e.target.closest("li");
  // console.log(li, "aa");
  if (!li) return;
  // Lưu item được chọn và hiển thị menu tại vị trí chuột
  selectedLi = li;
  menu.style.display = "block";
  menu.style.left = `${e.clientX}px`;
  menu.style.top = `${e.clientY}px`;
  console.log(li.children[0].textContent);
  // li.forEach((input){
  // })
  input.value = li.children[0].textContent;
});

document.addEventListener("click", (e) => {
  menu.style.display = "none";
});

const li = document.querySelector("li");

const remove = document.querySelector(".remove");
const input = document.querySelector("#input");
const modal = document.querySelector(".modal");
const overplay = document.querySelector(".overplay");
const rename = document.querySelector(".rename");
const save = document.querySelector(".save");
rename.addEventListener("click", (e) => {
  overplay.style.display = "flex";
  modal.style.display = "block";
});

save.addEventListener("click", (e) => {
  // console.log(e.target.parentElement.previousElementSibling);
  console.log(selectedLi.children[0].textContent);
  selectedLi.children[0].textContent = input.value;
  overplay.style.display = "none";
  modal.style.display = "none";
});

overplay.addEventListener("click", (e) => {
  overplay.style.display = "none";
  modal.style.display = "none";
});

document.addEventListener("keydown", (e) => {
  // Nhấn Escape để đóng overlay
  if (e.key === "Escape") {
    overplay.style.display = "none";
    modal.style.display = "none";
    menu.style.display = "none";
  }
});

remove.addEventListener("click", (e) => {
  if (selectedLi) {
    selectedLi.remove();
  }
});
