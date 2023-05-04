import React from "react"


function Navbar() {
    return (
        <>

            <nav className="bg-white border-gray-200 dark:bg-gray-900 flex items-center text-center">
                <div className="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" class="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                    
                </div>
            </nav>

        </>
    )
}

export default  Navbar;