# LonneyTunes-Game
## Site Picture
![game]()


## Technologies Used
- HTML - used to create elements on the DOM
- CSS - styles html elements on page
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages
- react.js - is used to set the structure of the website.
## Summary 
This website allows you to play a clicking game.

## Code Snippet
``
<script>
    class App extends Component{
    state={
        looney,
        highscore:0,
        score:0,
        answer:[]
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
                id={character.id}
                key={character.id}
                image={character.image}
                />
                )
            })}
        
        </Wrapper>
    </div>
        )
    }
}

    </script>

-This are the stcructure taht the componenets are being set in
## Author Links
[LinkedIn](linkedin.com/in/andres-felipe-jimenez-ferreira-b67a35192)
[GitHub](https://github.com/AndresF97)
