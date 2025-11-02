// // Lưu sản phẩm vào mảng giỏ hàng
// let cart = [];

// const productRows = document.querySelectorAll(".table tr"); // các dòng sản phẩm

// productRows.forEach((row, index) => {
//   const button = row.querySelector("button");
//   const input = row.querySelector("input[type='number']");
//   if (button && input) {
//     button.addEventListener("click", () => {
//       const name = row.children[1].innerText;
//       const price = parseFloat(row.children[2].innerText);
//       const quantity = parseInt(input.value);

//       addToCart(name, price, quantity);
//     });
//   }
// });

// // Hàm thêm sản phẩm vào giỏ
// function addToCart(name, price, quantity) {
//   const existing = cart.find((item) => item.name === name);

//   if (existing) {
//     existing.quantity += quantity;
//   } else {
//     cart.push({ name, price, quantity });
//   }
//   renderCart();
// }

// // Hiển thị giỏ hàng
// function renderCart() {
//   const cartTable = document.querySelector("h2 + table");
//   const emptyMsg = document.querySelector("p");
//   const tbody = cartTable.getElementsByTagName("tbody")[0] || document.createElement("tbody");

//   // Nếu chưa có tbody thì thêm vào
//   if (!cartTable.contains(tbody)) {
//     cartTable.appendChild(tbody);
//   }

//   // Xóa nội dung cũ
//   tbody.innerHTML = "";

//   if (cart.length === 0) {
//     emptyMsg.textContent = "Giỏ hàng không có sản phẩm";
//   } else {
//     emptyMsg.textContent = "";
//   }

//   let totalQty = 0;
//   let totalPrice = 0;

//   cart.forEach((item, index) => {
//     const tr = document.createElement("tr");
//     tr.innerHTML = `
//       <td>${index + 1}</td>
//       <td>${item.name}</td>
//       <td>${item.price}</td>
//       <td><input type="number" value="${item.quantity}" min="1" onchange="changeQty(${index}, this.value)"></td>
//       <td>${item.price * item.quantity}</td>
//       <td><button onclick="removeItem(${index})">Xoá</button></td>
//     `;
//     tbody.appendChild(tr);
//     totalQty += item.quantity;
//     totalPrice += item.price * item.quantity;
//   });

//   // Hàng tổng cộng
//   const totalRow = document.createElement("tr");
//   totalRow.innerHTML = `
//     <td colspan="3">Tổng</td>
//     <td>${totalQty}</td>
//     <td colspan="2">${totalPrice}</td>
//   `;
//   tbody.appendChild(totalRow);
// }

// // Cập nhật số lượng
// function changeQty(index, newQty) {
//   cart[index].quantity = parseInt(newQty);
//   renderCart();
// }

// // Xóa 1 sản phẩm
// function removeItem(index) {
//   const confirmDel = confirm("Bạn có chắc chắn muốn xóa sản phẩm này?");
//   if (confirmDel) {
//     cart.splice(index, 1);
//     renderCart();
//   }
// }

// // Nút “Cập nhật giỏ hàng”
// document.querySelector(".btn button:first-child").addEventListener("click", () => {
//   alert("Giỏ hàng đã được cập nhật!");
//   renderCart();
// });

// // Nút “Xóa giỏ hàng”
// document.querySelector(".btn button:last-child").addEventListener("click", () => {
//   const confirmClear = confirm("Bạn có chắc chắn muốn xóa toàn bộ giỏ hàng không?");
//   if (confirmClear) {
//     cart = [];
//     renderCart();
//   }
// });

const table = document.querySelector(".js-table");
const tableCart = document.querySelector(".js-cart");
const tbodyCart = tableCart.querySelector("tbody:last-of-type");

table.addEventListener("click", (e) => {
  if (e.target.className.includes("js-btn")) {
    const rowTr = e.target.parentElement.parentElement;
    const qnt = e.target.parentElement.children[0].value; // số lượng
    const nameProduct = rowTr.children[1].innerText; // tên sản phẩm
    const price = rowTr.children[2].innerText; // giá sp

    const html = `
        <tr class="border">
            <td class="border p-[5px]">${tbodyCart.children.length + 1}</td>
            <td class="border p-[5px]">${nameProduct}</td>
            <td class="border p-[5px]">${price}</td>
            <td class="border p-[5px]"><input type="number" value="1" value="${qnt}" min="0" /></td>
            <td class="border p-[5px]">${+price * +qnt}</td>
            <td class="border p-[5px]"><button
                          class="js-btn-remove border border-[#ccc] px-[12px] py-[8px] inline-block rounded-[8px] hover:bg-[#ccc] cursor-pointer transition-all duration-[2000]"

            >Xoá</button></td>
        </tr>
    `;

    tbodyCart.innerHTML += html;
  }
});

tbodyCart.addEventListener("click", (e) => {
  if (e.target.className.includes("js-btn-remove")) {
    const rowTr = e.target.parentElement.parentElement;

    tbodyCart.removeChild(rowTr);
  }
});

const updateCart = document.querySelector(".js-btn-update");
const removeAllCart = document.querySelector(".js-btn-removeAll");

removeAllCart.addEventListener("click", () => {
  tbodyCart.innerHTML = "";
});

updateCart.addEventListener("click", () => {
  Array.from(tbodyCart.children).forEach((item) => {
    const price = item.children[2].innerHTML;
    const qnt = item.children[3].children[0].value;

    const total = +price * +qnt;

    item.children[4].innerHTML = total;
  });
});
