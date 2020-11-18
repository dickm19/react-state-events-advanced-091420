import React, { Component } from "react";
import BeyCard from '../Components/BeyCard'

 class Favorites extends Component {
  

  renderFavorites = () => {
    
    return this.props.beyArray.map( beyObj => <BeyCard key={beyObj.id} bey={beyObj} clickHandler={this.props.clickHandler}/>)
  }

  render() {
    
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {this.renderFavorites()}
      </div>
    );
  }
}

export default Favorites;