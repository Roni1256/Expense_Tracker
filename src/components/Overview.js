import React from 'react'
import { Button } from './Button';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const section="text-xl font-semibold flex flex-col gap-5 items-center rounded-lg  p-3  text-white shadow-lg shadow-black/40";
export const Overview = ({accname,total,spend,remain,editFunc,deleteFunc}) => {
  return (
    <>
        <div className="w-full flex items-center justify-center">
            <div className=" bg-white backdrop-blur-lg   container rounded-lg outline-slate-800/50  outline outline-1 shadow-md shadow-black/50 p-5 flex flex-col gap-5 max-w-[600px] ">
                <header>
                    <h1 className='text-2xl font-bold text-slate-900/80 '>{accname} </h1>
                </header>
                <main className='grid grid-cols-2 gap-4 items-center justify-center place-content-center w-full '>
                    <section className={`${section} w-full  col-span-2 bg-gradient-to-r from-blue-800 to-indigo-900`}>
                       <span className='text-xl text-white/90 '>Total</span>
                       <span className='text-3xl font-bold tracking-wider'>₹{total}</span>
                    </section>
                    <section className={`${section} w-full max-w-[400px] bg-gradient-to-r from-pink-500 to-rose-500`}>
                       <span className='text-xl text-white/90 '>Spend</span>
                       <span className='text-3xl font-bold tracking-wider'>₹{spend} </span>
                    </section>
                    <section className={`${section} w-full max-w-[400px] bg-gradient-to-r from-emerald-400 to-cyan-400`}>
                       <span className='text-xl text-white/90 '>Remaining</span>
                       <span className='text-3xl font-bold tracking-wider'>₹{remain} </span>
                    </section>
                </main>
                <footer className='flex gap-10  items-center justify-center mt-5'>

                    <div className="">
                        <Button text={"Edit"} style={"bg-green-700 "} icon={<FaEdit  className='text-2xl'/>} func={editFunc}/>
                    </div>
                    <div className="">
                        <Button text={"Delete"} style={"bg-red-600 "} icon={<MdDelete className='text-3xl  ' />} func={deleteFunc}/>
                    </div>
                    
                    {/* <section className={`bg-slate-200 p-4 rounded-lg flex gap-10 items-center  `}>
                        <span className='text-slate-900/90 text-lg font-semibold  '>Open Date :</span>
                        <span className='text-slate-900 text-xl font-bold ' >12-05-2024</span>
                    </section>
                    <section className={`bg-slate-200 p-4 rounded-lg flex gap-10 items-center  `}>
                        <span className='text-slate-900/90 text-lg font-semibold  '>Open Time :</span>
                        <span className='text-slate-900 text-xl font-bold ' >12:12:12:A.M
                        </span>
                    </section> */}
                </footer>
            </div>
        </div>
    </>
  )
}
