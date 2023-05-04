import React from "react";
import lonneyCards from "./looney.json"



function Card(){
   const clickedCard =()=>{
        console.log("Clicked")
    }

    console.log(lonneyCards)
    return (
        <>
        <h1>Single Card</h1>
        {lonneyCards.map(item=>{
            return(
            <section onClick={()=>{clickedCard()}}>
                <h1>{item.name}</h1>
                <img src={`${item.image}`}/>
            </section>
            )
        })}
        </>
    )
}

export default Card;