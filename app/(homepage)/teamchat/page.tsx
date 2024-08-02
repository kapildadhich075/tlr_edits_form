import React from 'react'
import Sidebar from '../sidebar'
import TeamChat from './TeamChat'

const page = () => {
  return (
    <>
    <div className="flex h-screen bg-slate-50 text-black ">
        <Sidebar />
        <div className="flex-1 flex flex-col">
            <TeamChat />
        </div>
      </div>
    </>
  )
}

export default page