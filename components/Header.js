import Link from "next/link"
import { useState } from "react"

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className=" w-full max-w-7xl">
            <div x-data={open && false} className="flex flex-col max-w-screen-xl p-5 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                <div className="flex flex-row items-center justify-between lg:justify-start">
                    <Link href="/">
                        <a className="text-lg font-bold tracking-tighter text-blue-600 transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8"> mladifest </a>
                    </Link>
                    <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline" onClick={() => setOpen(!open)}>
                        <svg fill="currentColor" viewBox="0 0 20 20" className="w-8 h-8">
                            <path x-show={!open} fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                            <path x-show={open} fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" style={{display: "none"}}></path>
                        </svg>
                    </button>
                </div>
                <nav className={`flex-col flex-grow md:flex md:justify-start md:flex-row ${open ? 'flex' : 'hidden'}`}>
                    <ul className="space-y-2 list-none lg:space-y-0 lg:items-center lg:inline-flex">
                        <li>
                            <Link href="#raspored">
                                <a className="px-2 lg:px-6 py-6 text-sm border-b-2 border-transparent hover:border-blue-600 leading-[22px] md:px-3 text-gray-500 hover:text-blue-500"> Raspored </a>
                            </Link>
                        </li>
                        {/* <li>
                            <Link href="#">
                                <a className="px-2 lg:px-6 py-6 text-sm border-b-2 border-transparent leading-[22px] md:px-3 text-gray-500 hover:text-blue-500 hover:border-blue-600"> FAQ </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a className="px-2 lg:px-6 py-6 text-sm border-b-2 border-transparent hover:border-blue-600 leading-[22px] md:px-3 text-gray-500 hover:text-blue-500"> Free Templates</a>
                            </Link>
                        </li> */}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header