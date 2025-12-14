import React from 'react'

export default function Body() {
  return (
    <div>
      <button className='hover:cursor-pointer hover:bg-yellow-500 px-[2px] py-[4px] border border-[#000] rounded-[5px] mt-[12px] text-[20px]'>Thêm mới</button><br></br>
      <>
        <button className='hover:cursor-pointer hover:bg-yellow-500 px-[2px] py-[4px] border border-[#000] rounded-[5px] mt-[12px] mr-[12px] text-[20px]'>Mới nhất</button>
        <button className='hover:cursor-pointer hover:bg-yellow-500 px-[2px] py-[4px] border border-[#000] rounded-[5px] mt-[12px] text-[20px]'>Cũ nhất</button>
      </>

      {/* <div id="listMusic" data-slug="" class="listMusic flex ml-[240px] gap-2 w-[1290px] overflow-auto">
        ${albums
          .map((el) => {
            return musicList(
              el.slug,
              el.thumbnails[0],
              el.title,
              el.artists[0]
            );
          })
          .join("")}

         
      </div> */}

    </div>
  )
}
