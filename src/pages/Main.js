import React, { useState } from 'react'
import { Overview } from '../components/Overview'
import { Nav } from '../components/Nav'
import { Forms } from '../components/Forms'


export const Main = () => {


  const [accName,setAccName]=useState("")

  return<>
  <div className="bg-gradient-to-r from-blue-300 to-cyan-300 w-full  p-10 flex flex-col gap-8  items-center justify-center ">
    {/* <Nav/> */}
    <Overview 
      accname={"Roniwilliams"}
      total={10000}
      spend={3000}
      remain={7000}
    />
    <Forms/>
    
   
  </div>
  </>
}
