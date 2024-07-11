import React from 'react'
import { Usercard } from './Usercard'

export const Nav = () => {
  return <>
  <div className="w-[400px] bg-slate-900 h-screen fixed top-0 left-0 z-10 p-5 text-white ">
    <Usercard/>
  </div>
  </>
}
