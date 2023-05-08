import React, { useEffect, useState } from "react";
import lonneyCards from "./looney.json"

// TO DO:
// STYLING!!!!!!!
// Future developement:
// PvP (take turns and time)
// Single player
// AI chatgpt or another ai that can be implemented in React
// FUTURE STYLING IMPLEMENTATIONS:
// - Look at the other website for reference
// - on hover of card its grows card
// - Gameover function its own react page


function Card() {
  let [score, setScore] = useState(10)
  let [randomArrOne, setArrOne] = useState([])
  let [randomArrTwo, setArrTwo] = useState([])
  let [currentClicked, setCurrentClick] = useState('')
  let [timer, setTimer] = useState(60); // 25 minutes

const clickedCard = (event) => {
  // issue from having same id attributes must find a way to seperate from one and other
      setInterval(() => {
        event.target.classList.add("hide")
        event.target.parentElement.classList.add("bg-image")
  
      }, 1000)
      event.target.classList.remove("hide")
      event.target.parentElement.classList.remove("bg-image")
      console.log(event.target)
      setCurrentClick(event.target)
      // change if statement to reconize the different one and two option such as when clicked it 
      // or check if i change curent clicked save to save the element
      if (currentClicked !== '') {
        if (currentClicked.getAttribute('data-card-id') === event.target.getAttribute('data-card-id')) {
          console.log("Match found")
          // setScore(score = score + 1)
          event.target.parentElement.classList.add("destroy")
          currentClicked.parentElement.classList.add("destroy");
          setCurrentClick('')
        }
  
      }
    }
  let clonedLoneyCards = lonneyCards
  Array.prototype.random = function () {
    let that = this.slice();
    let result = []
    this.forEach(() => {
      result.push(that.splice(Math.floor(Math.random() * that.length), 1)[0])
    })
    return result
  }
  const startTimer = () => {
    let countDown = setInterval(() => {
      if (timer < 0) {
        clearInterval(countDown)
        gameOver()
        return
      } else {
        setTimer(timer--);
        console.log(timer)
      }
    }, 1000);
  }

  const PlayAgain = () => {
    window.location.reload()
  }
  const returnHomePage = () => {
    window.location.replace('/')
  }
  const image = require('./images/looney-tunes-thats-all-folks.gif')
  const gameOver = () => {
    document.getElementById('gameContainer').innerHTML = ""
    document.getElementById('gameContainer').classList.remove('grid', 'grid-cols-2', 'md:grid-cols-7', 'gap-4', 'dark:bg-gray-900')
    document.getElementById('gameContainer').innerHTML = `
    <div className="text-center mr-5 ml-5">
    
      <h1>Game over!</h1>
      <img src=${image}/>
      <br></br>
      <button id="gameOverBtn" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" >Play Again</button>
      <button id="returnBtn" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Go back home</button>
    </div>
    `
    document.getElementById('gameOverBtn').onclick = function () {
      PlayAgain()
    }
    document.getElementById('returnBtn').onclick = function () {
      returnHomePage()
    }
  }

  useEffect(() => {
    startTimer()
    setArrOne(clonedLoneyCards.random())
    setArrTwo(clonedLoneyCards.random())
  }, []);

  return (
    < >
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Quick find the matches</h1>
      <div id="timer" className="text-1xl font-bold text-gray-900 dark:text-white">Timer:{timer}</div>
      <div className="text-1xl font-bold text-gray-900 dark:text-white">Score:{score}</div>
      <div className="grid grid-cols-2 md:grid-cols-7 gap-4  m-5" id="gameContainer">
        {randomArrOne?.map((item, i) => {


          return (
            <>
              <div className="bg-red-700 rounded p-5 custom-border card bg-image">
                {/* <img  src={require('./images/looney-logo.png')}/> */}
                <section className="h-auto max-w-full text-center  hide" key={randomArrOne[i]?.i + "One"} onClick={(event) => { clickedCard(event) }} data-card-name={randomArrOne[i]?.name} data-card-id={randomArrOne[i]?.id}>
                  <h1 className="text-white">{randomArrOne[i]?.name}</h1>

                  <img className="m-0" src={require(`${randomArrOne[i]?.image}`)} />
                </section>
              </div>
              <div className="bg-red-700 rounded p-5 custom-border card bg-image">
                {/* <img src={require('./images/looney-logo.png')}/> */}
                <section className="h-auto max-w-full text-center hide" key={randomArrTwo[i]?.id + "Two"} onClick={(event) => { clickedCard(event) }} data-card-name={randomArrTwo[i]?.name} data-card-id={randomArrTwo[i]?.id}>
                  <h1 className="text-white">{randomArrTwo[i]?.name}</h1>
                  <img src={require(`${randomArrTwo[i]?.image}`)} />
                </section>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default Card;