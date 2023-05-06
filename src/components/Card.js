import React, { useEffect, useState } from "react";
import lonneyCards from "./looney.json"

// TO DO:
// SCORING SYSTEM
// ADD STYLING TO HIDE CARD AND THEN UPADTE ONCE CLICKED
// ADD STYLING FOR EACH CARD
// Future developement:
// PvP (take turns and time)
// Single player
// AI chatgpt or another ai that can be implemented in React


function Card() {
  const [gameLogic, setGameLogic] = useState({
    score: 0,
    // randomArrOne: [],
    randomArrTwo: [],
  })
  let [randomArrOne, setArrOne] = useState([])
  let [randomArrTwo, setArrTwo] = useState([])
  let [timer, setTimer] = useState(10); // 25 minutes

  const clickedCard = (event) => {
    console.log(event.target)

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
    let countDown = setInterval(() => { // <-- set tick ref current value
      if (timer < 0) {
        clearInterval(countDown)
        return
      } else {
        setTimer(timer--);
        console.log(timer)
      }
    }, 1000);
  }

  useEffect(() => {
    // startTimer()
    // arrRandomazier();
    // let newArrOne = randomArrOne.push(...clonedLoneyCards.random())
    
    setArrOne(clonedLoneyCards.random())
    setArrTwo(clonedLoneyCards.random())
  }, []);

  return (
    <>
      <h1>Single Card</h1>
      <div id="timer">{timer}</div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {lonneyCards.map((item, i) => {
        return (
          <>
            <section className="h-auto max-w-full text-center" key={randomArrOne[i]?.i +"One"} onClick={(event) => { clickedCard(event) }} data-card-name={randomArrOne[i]?.name} data-card-id={randomArrOne[i]?.id}>
              <h1>{randomArrOne[i]?.name}</h1>
              <img className="m-0" src={`${randomArrOne[i]?.image}`} />
            </section>
            <section className="h-auto max-w-full text-center" key={randomArrTwo[i]?.id+ "Two"} onClick={(event) => { clickedCard(event) }} data-card-name={randomArrTwo[i]?.name} data-card-id={randomArrTwo[i]?.id}>
              <h1>{randomArrTwo[i]?.name}</h1>
              <img className="d-none"src={`${randomArrTwo[i]?.image}`} />
            </section>
          </>
        )
      })}
      </div>
    </>
  )
}

export default Card;