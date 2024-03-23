import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (

        <>
            <nav className="bg-blue-100 ">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap ">Exercise Tracker</span >
                    </a >
                    <div className="flex items-center space-x-6 rtl:space-x-reverse" >
                        <Link href="/" className="text-sm  text-blue-600  hover:underline" > Exercises</Link >
                        <Link href="/create" className="text-sm  text-blue-600  hover:underline" > Create Exercise</Link >
                        <Link href="/user" className="text-sm  text-blue-600  hover:underline" > Create User</Link >
                    </div >
                </div >
            </nav >
        </>
    )
}

export default Navbar
