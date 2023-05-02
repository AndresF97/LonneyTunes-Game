import React, {useState} from "react"
import "./style.css"



function Card(props){
  const [showing, setShowing] = useState(false)

  const handleClick = () => {
    setShowing(!showing)
    props.clicked(props.id)
  }

  const cardFront = () => {
    return (
      <div className="row row-cols-1 row-cols-md-3">
          <div className="col m-1">
              <div>
              <div className="card">
                  <img src={props.image} className="card-img-top" alt={props.id} onClick={handleClick}></img>
              </div>
          </div>
      </div>
  </div>
    )
  }

  const cardBack = () => {
    return (
      <div className="row row-cols-1 row-cols-md-3">
          <div className="col m-1">
              <div>
              <div className="card" onClick={handleClick}>
              </div>
          </div>
      </div>
  </div>
    )
  }

    return(
        <div>
          {showing ? cardFront() : cardBack()}
        </div>
    )
}

export default Card
