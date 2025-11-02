let id = 1; // tạo biến ở đây để mỗi thêm sẽ tăng lên 1 đơn vị id là k được trùng

let arr = [
  {
    id: id,
    complete: false,
    title: "ok",
  },
];

const todos = document.querySelector(".todos");
const form = document.querySelector(".form");
const input = document.querySelector("input");

const render = function (array) {
  let html = "";
  //   ở đoạn render này anh cài vào luôn dataset truyền vào id của nó
  array.forEach((task) => {
    html += `<div class="todo" data-id=${task.id}>
        <p class=${task.complete ? "complete" : ""}>
              ${task.title}
        </p>
        <div class="icon"> 
          <i class="fa-solid fa-pen-to-square edit"></i>
          <i class="fa-solid fa-trash remove"></i>
        </div>
    </div>`;
  });
  todos.innerHTML = html;
};

form.addEventListener("submit", (e) => {
    e.preventDefault()
  if (input.value) {
    input.value.trim();
  }
//   console.log(input.value);
  let obj = {
    id : ++id,
    complete : false,
    title : input.value.trim()
  }
  arr.unshift(obj);
});

todos.addEventListener("click", (e) =>{
    // todos.classList.add("todo")
    e.target.className.includes("edit") || e.target.className.includes("remove");
    // console.log();
    let todoParent = e.target.parentElement;
    todoParent.dataset.id = `${id}`
})
render(arr);

// anh thấy đoạn e bôi đen bên html
// anh lấy ra class box và gán lại innerHTML thì nó mất hết h1 và btn ở trên rồi.
// nên em có thêm class riên để bọc nó thì oke rồi đó anh

// giờ anh lấy ra thằng form kia addEvent là submit cho nó
// lây thằng input rồi khi nhấn add task nó sẽ lọt vào sự kiên submit thì trong sự kiện đấy
// anh lấy ra input.value của nó kiểm tra xem có dữ liệu thì mới cho thêm sử dụng method input.value.trim()
// có dữ liệu từ input.value thì anh thêm vào mảng mới cấu trúc như trên vẫn là 1 object
// anh thêm dữ liệu vào đầu mảng nhé em k nhớ tên method anh lên search là thêm vào đầu mảng js
// cấu trúc thêm như sau arr.tên method({id: ++id,title: input.value, complete: false})
// complete mặc định sẽ là false vì khi thêm chắc chắn nó chưa được hoàn thành

// sau khi thêm xong trong event submit anh gọi lại render(arr)

// anh nhớ cái dataset mà anh An giới thiệu k. k nhớ thì anh lên search nhé

// với thằng todos mà đã lấy ở trên anh add sự kiện click cho nó. thì khi có dữ liệu
// render ra thì các class todo sẽ là con của todos thì khi nhấn vào todo cũng ăn được sự kiên click ở todos
// tiếp theo là khi nhấn vào anh lấy ra e.target. Nhiệm vụ của anh là cần lấy ra được cái data-id kia
// vd khi nhấn vào sửa thì e.target nó sẽ là <i class="fa-solid fa-pen-to-square edit"></i> anh lấy ra className để biết nó là sửa hay xoá đã
// tiếp theo anh dùng đệ quy để lấy ra được thằng class todo bằng parentElement sau khi lấy được class todo đặt tên là todoParent thì sử dụng cú pháp
// todoParent.dataset.id là sẽ lấy ra được id của chính thằng đó
// lấy ra được id thì anh nhắm vào mảng arr kia dùng filter để lọc ra thằng có id khớp rồi chọc vào title để sửa nếu là sửa
// còn nếu là xoá thì cũng dùng filter nhưng sẽ loại bỏ id đã được lấy filter(task => task.id !== id)

// sau khi sửa hoặc xoá thì anh cần gọi lại render() truyền mảng mới cập nhật vào

// anh lên search lại dataset nếu quyên nhé còn đoạn dùng đệ quy mà anh cảm thấy khó quá thì anh có thể dùng ai để tham khảo
// nhưng anh phải hiểu nhé k được chép đâu
