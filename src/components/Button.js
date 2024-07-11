import React from 'react'
import { MdDelete } from "react-icons/md";

export const Button = ({text,func,style,icon,deleteBtn}) => {
  return (
    <>
        <div className={``}>
            <button onClick={()=>func} className={`${style} w-[150px] bg-black text-white text-xl rounded-lg p-3 text-center  uppercase tracking-wider shadow-lg shadow-black/40  hover:scale-[1.1] ease-in-out duration-200 flex items-center justify-center gap-8 font-bold  `}>{text} {icon} {deleteBtn?<MdDelete className='text-4xl'/>:null}</button>
        </div>
    </>
  )
}
