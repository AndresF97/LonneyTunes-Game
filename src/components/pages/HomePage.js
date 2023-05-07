import React from "react";
import { Link } from "react-router-dom";

function HomePage(){
    // TO DO:
    // ADD ICONS
    // ADD MULTIPLE BUTTONS FOR THESE SPECIFIC OPTIONS:
    // - PvP (Make different Page for with different functionality)
    // - AI (Bring an AI to run different kind of fucntion to cheat and maybe use the tic tac to game)

    return(
        <>
            <h1>Home Page!</h1>
            <Link to="/SingleGame">
            <h4>Welcome to a looney toons memory clicky game, here are several game option's to play and some that are soon to come</h4>
            <button type="button"className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            <i class="fa-solid fa-gamepad m-2"></i>
                Play Solo!
            </button>
            </Link>
        </>
    )
}

export default HomePage;