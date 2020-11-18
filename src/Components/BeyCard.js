import React from "react";

class BeyCard extends React.Component {

  clickHandler = () => {
    
    this.props.clickHandler(this.props.bey.id)
   
  }

  render(){
    return (
      <div className="card">
        <h2>{this.props.bey.name}</h2>
        <img alt="" onClick={this.clickHandler}src={this.props.bey.img}></img>
      </div>
    );
  }
  
};

export default BeyCard;
