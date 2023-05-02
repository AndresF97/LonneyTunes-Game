import React, { Component } from "react"
import Wrapper from "./components/Wrapper";
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import looney from  "./looney.json"


class App extends Component{
    state={
        looney,
        looneyPieces: [],
        highscore:0,
        score:0,
        answer:[]
    }
    componentDidMount(){
      let newPieces = []
      looney.forEach((loon) => {
        let newLoon = loon
        newLoon.id = `${newLoon.id}a`
        newPieces.push(newLoon)
        newLoon.id[1] = 'b'
        newPieces.push(newLoon)
      })
      console.log(newPieces);
    }
    clicked(id){

    }
    render(){
        return(
    <div>
        <Navbar
        score={this.state.score}
        highscore={this.state.highscore}
        />
        <Wrapper>
            {this.state.looney.map(character=>{
                return(
                <Card
                {...character}

                id={character.id}
                image={character.image}


                key={character.id}
                clicked={this.clicked}
                />
                )
            })}

        </Wrapper>
    </div>
        )
    }
}

export default App;
