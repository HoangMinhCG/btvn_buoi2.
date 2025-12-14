import React, { useEffect } from "react";
import { useState } from "react";

// export default function content(slug, img, title, author) {
//   return (
//     <div>
//       <div data-slug="${slug}" id="balal" class="flex border  shrink-0 relative group w-[300px]">
//             {/* <img className="h-[100px] mr-[10px]" src=${img}/> */}
//             <div  className=" absolute hover:cursor-pointer group-hover:block hidden bg-[linear-gradient(rgba(0,0,0,0.502),rgba(0,0,0,0),rgba(0,0,0,0))]  w-[100%] top-0 right-[66%] bottom-0">
//                 <div className="flex items-center justify-center w-12 h-12 absolute bottom-[25%] right-[8%] text-[16px]  bg-[#270f03] rounded-full">
//                     <i className="fa-solid fa-play text-white"></i>
//                 </div>
//             </div>
//             <div>
//                 <p className="dark:text-white font-bold hover:cursor-pointer hover:underline mb-[10px]">${title}</p>
//                 <p className="dark:text-white hover:cursor-pointer hover:underline">${author}</p>
//             </div>
//         </div>
//     </div>
//   )
// }

export default function Content() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // console.log("effect");
    const resolve = async () => {
      const response = await fetch("https://dummyjson.com/posts");
      const api = await response.json();
      console.log(api.posts);
      setPosts(api.posts);
      console.log(posts);
    };
    resolve();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div className="border border-[#000] px-[24px] py-[12px] mt-[16px] rounded-[5px]">
          <h3 className="text-[24px] font-bold" key={post.id}>
            {post.title}
          </h3>
          <p className="text-[16px]" key={post.id}>{post.body}</p>

          <div className="flex justify-between mt-[4px]">
            <button className="border border-[#ccc] px-[12px] py-[8px] rounded-[50px] hover:cursor-pointer hover:bg-green-500 hover:text-white">Xem chi tiết</button>
            <div className="flex gap-[5px]">
                <button className="hover:cursor-pointer hover:text-red-500">Sửa</button>
                <button className="hover:cursor-pointer hover:text-red-500">Xoá</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
