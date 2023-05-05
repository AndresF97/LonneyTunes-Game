import React, {useEffect, useState, useRef} from "react";
import lonneyCards from "./looney.json"
import userEvent from "@testing-library/user-event";

// TO DO:
// SCORING SYSTEM
// CREATE TWO RANDOMISE ARRAYS [TO DO NEXT]
// ADD STYLING TO HIDE CARD AND THEN UPADTE ONCE CLICKED
// ADD STYLING FOR EACH CARD
// Future developement:
// PvP (take turns and time)
// Single player
// AI chatgpt or another ai that can be implemented in React


function Card(){
    const [gameLogic, setGameLogic] = useState({
        score:0,
        randomArrOne:[],
        randomArrTwo:[],
    })
    let [timer, setTimer] = useState(10); // 25 minutes
    const [start, setStart] = useState(true);
    const tick = useRef(); 
   const clickedCard =(event)=>{
        console.log(event.target)
        
    }
    const arrRandomazier = ()=>{
        gameLogic.randomArrOne.push(lonneyCards)
        gameLogic.randomArrTwo.push(...lonneyCards)
        console.log(gameLogic.randomArrOne)
        console.log(gameLogic.randomArrTwo)
    }
    const startTimer = ()=>{
      let countDown = setInterval(() => { // <-- set tick ref current value
      if(timer < 0){
          clearInterval(countDown)
          return
      }else{
      setTimer(timer--);
      console.log(timer)
      }
    }, 1000);
  }

    useEffect(() => {
        startTimer()
        arrRandomazier();
      }, []);
;
    return (
        <>
        <h1>Single Card</h1>
        <div id="timer">{timer}</div>
        {lonneyCards.map(item=>{
            return(
            <section onClick={(event)=>{clickedCard(event)}} data-cardname={item.name} data-cardid={item.id}>
                <h1>{item.name}</h1>
                <img src={`${item.image}`}/>
            </section>
            )
        })}
        </>
    )
}

export default Card;