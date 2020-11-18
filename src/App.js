import React from "react";
import BeyContainer from './Containers/BeyContainer';
import Favorites from './Containers/Favorites';
import "./App.css";
import BeyArray from './api' 

class App extends React.Component {


  state = {
    api: BeyArray,
  }

  setFav = (id) => {
    let beyArray = [...this.state.api]
    let beyObj = beyArray.find(bey => bey.id === id)
    beyObj.favorite = true
    this.setState({api: beyArray})
  }

  unFav = (id) => {
    let beyArray = [...this.state.api]
    let beyObj = beyArray.find(bey => bey.id === id)
    beyObj.favorite = false 
    this.setState({api: beyArray})
  }

  favoritesArray = () => {
    return this.state.api.filter(beyObj => beyObj.favorite )
  }


  render() {
    return (
      <div className="container" >
        <BeyContainer beyArray={this.state.api} clickHandler={this.setFav}/>
        <Favorites clickHandler={this.unFav} beyArray={this.favoritesArray()} />
      </div>
    );
  }
  
};

export default App;
