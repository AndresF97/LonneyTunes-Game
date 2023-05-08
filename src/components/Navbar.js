import React from "react"


function Navbar() {
    return (
        <>

            <nav className="bg-white border-gray-200 dark:bg-gray-900 flex items-center text-center h-12 m-2">
                <div className="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto p-4">
                        <img src={require('./images/looney-logo.png')} className="h-19" alt="Looney Logo" />
                    
                </div>
            </nav>

        </>
    )
}

export default  Navbar;