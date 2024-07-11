import React from 'react'
import { Button } from './Button'

export const Usercard = () => {
  return (
    <>
    <div className="w-full items-center   rounded-lg ring-2 ring-slate-600  p-4 flex flex-col gap-3  ">
        <header className='w-full '>
            <h1 className='uppercase text-3xl text-center tracking-wide text-slate-200 bg-slate-700 p-2 rounded-lg w-full  '>Roniwilliams</h1>
        </header>
        <main className='flex  justify-between w-full  '>
            <section className='ring-2 ring-slate-600 p-4 rounded-lg  flex flex-col text-center gap-2  '>
                <span className='text-lg text-slate-200/80   font-semibold '> No.of.Accounts</span>
                <span className='text-3xl '>5</span>
            </section>
            <section className='ring-2 ring-slate-600 p-4 rounded-lg  flex flex-col text-center gap-2  '>
                <span className='text-lg text-slate-200/80   font-semibold '> No.of.Budgets</span>
                <span className='text-3xl '>5</span>
            </section>
        </main>
        <footer>
            <Button text={"Delete User"} style={"bg-red-500 w-fit " } deleteBtn={true} />
        </footer>
    </div>
    </>
  )
}
