import React from "react";
import BeyCard from '../Components/BeyCard'

class BeyContainer extends React.Component {

  
  renderBeys = () => {

    return this.props.beyArray.map( beyObj => <BeyCard key={beyObj.id} bey={beyObj} clickHandler={this.props.clickHandler}/>)
  }


  render() {
    return (
      <div className="index">
        <h1>Index</h1>
        {this.renderBeys()}
      </div>
    );
  }
}

export default BeyContainer;
