import React from "react";
import lonneyCards from "./looney.json"

// TO DO:
// CREATE A TIMER
// SCORING SYSTEM
// CREATE TWO RANDOMISE ARRAYS
// ADD STYLING FOR EACH CARD
// Future developement:
// PvP (take turns and time)
// Single player
// AI chatgpt or another ai that can be implemented in React


function Card(){
   const clickedCard =(event)=>{
        
        console.log(event.target)
    }

    return (
        <>
        <h1>Single Card</h1>
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