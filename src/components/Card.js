import React, { useEffect, useState } from "react";
import lonneyCards from "./looney.json"

// TO DO:
// STYLING!!!!!!!
// ADD STYLING FOR EACH CARD
// Future developement:
// PvP (take turns and time)
// Single player
// AI chatgpt or another ai that can be implemented in React
// STYLING NOTES:
// - Look at the other website for reference
// - bring some lonney logos
// - get better images


function Card() {
  let [score, setScore] =useState(0)
  let [randomArrOne, setArrOne] = useState([])
  let [randomArrTwo, setArrTwo] = useState([])
  let [currentClicked,setCurrentClick] = useState('')
  let [timer, setTimer] = useState(5); // 25 minutes

  const clickedCard = (event) => {

    setInterval(()=>{
      event.target.classList.add("hide")
    },1000)
    event.target.classList.remove("hide")
    
    setCurrentClick(event.target.getAttribute('data-card-id'))
    if(currentClicked!==''){
      if(currentClicked === event.target.getAttribute('data-card-id') ){
        setScore(score = score + 1)
        event.target.parentElement.classList.add("destroy")
        document.querySelector(`[data-card-id="${currentClicked}"]`).parentElement.classList.add("destroy");
        setCurrentClick('')
      }
      console.log(event.target.parentElement)
      console.log(document.querySelector(`[data-card-id="${currentClicked}"]`).parentElement)
    }
    console.log('score',score)
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
  const gameOver = ()=>{
    document.getElementById('gameContainer').innerHTML=""
    document.getElementById('gameContainer').innerHTML="<h1>Game over!</h1>"
  }

  useEffect(() => {
    startTimer()
    setArrOne(clonedLoneyCards.random())
    setArrTwo(clonedLoneyCards.random())
  }, []);

  return (
    <>
      <h1>Quick find the matches</h1>
      <div id="timer">Timer:{timer}</div>
      <div>Score:{score}</div>
      <div className="grid grid-cols-2 md:grid-cols-7 gap-4 dark:bg-gray-900" id="gameContainer">
      {lonneyCards.map((item, i) => {
        return (
          <>
            <div className="bg-blue-700">
            <section className="h-auto max-w-full text-center" key={randomArrOne[i]?.i +"One"} onClick={(event) => { clickedCard(event) }} data-card-name={randomArrOne[i]?.name} data-card-id={randomArrOne[i]?.id}>
              <h1>{randomArrOne[i]?.name}</h1>
              <img className="m-0" src={`${randomArrOne[i]?.image}`} />
            </section>
            </div>
            <div className="bg-blue-700">
            <section className="h-auto max-w-full text-center " key={randomArrTwo[i]?.id+ "Two"} onClick={(event) => { clickedCard(event) }} data-card-name={randomArrTwo[i]?.name} data-card-id={randomArrTwo[i]?.id}>
              <h1>{randomArrTwo[i]?.name}</h1>
              <img src={`${randomArrTwo[i]?.image}`} />
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