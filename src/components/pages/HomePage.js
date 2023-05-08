import React from "react";
import { Link } from "react-router-dom";

function HomePage(){
    const renderNewPage = ()=>{
        setInterval(() => {
            window.location.replace('/LonneyTunes-Game/Single')
      
          }, 2000)
        
        document.querySelector('.center-menu').innerHTML = ``
        document.getElementById('mainMenu').classList.add('main-bg')
    }
    // TO DO:
    // ADD ICONS
    // ADD MULTIPLE BUTTONS FOR THESE SPECIFIC OPTIONS:
    // - PvP (Make different Page for with different functionality)
    // - AI (Bring an AI to run different kind of fucntion to cheat and maybe use the tic tac to game)

    return(
        <div className="text-center inline-flex items-center" id="mainMenu">
        {/* add background here */}
            <div className="center-menu">
            <h4 className="text-4xl font-bold text-gray-900 dark:text-white">Welcome to a looney toons memory clicky game, here are several game option's to play and some that are soon to come</h4>
            <h1 class="text-4xl font-bold text-gray-50 dark:text-white hide message"> LETS PLAY </h1>
            {/* <Link to="/SingleGame"> */}
            <br></br>
            <button type="button" onClick={()=> renderNewPage()}className="text-white bg-[#24292F]  font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center hover:bg-gray-500 focus:ring-4 focus:ring-gray-300">
            <i class="fa-solid fa-gamepad m-2"></i>
                Play Solo!
            </button>
            {/* </Link> */}
            </div>
        </div>
    )
}

export default HomePage;