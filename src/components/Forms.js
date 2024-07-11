import React, { useState } from 'react'
import { InputField } from './InputField'
import { Button } from './Button';
import { IoIosAddCircle } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export const Forms = ({addFunc,cancelFunc}) => {

    const [accName,setAccName]=useState("")
    const [amount,setAmount]=useState("");

  return (
    <>
    <div className="max-w-[600px]  ring-1 shadow-md shadow-black/50  ring-slate-500 rounded-lg w-full bg-white p-5 ">
        <header className='text-xl text-slate-600  font-semibold '>Add Account</header>
        <main>
            <form action='submit'>           
                <InputField label={"Account name"} action={(e)=>setAccName(e.target.value)} value={accName } /> 
                <InputField label={"Amount"} others={true} type={"number"} action={(e)=>setAmount(e.target.value)} value={amount}  /> 
                <div className="flex justify-center gap-5  mt-5 ">
                    <Button text={"Add "} style={"w-fit  bg-green-600 "} icon={<IoIosAddCircle className='text-3xl ' />}/>
                    <Button text={"Cancel"} style={"w-fit bg-red-600 "} icon={ <IoClose />}/>
                </div>
            </form>
        </main>
    </div>
    </>
  )
}
