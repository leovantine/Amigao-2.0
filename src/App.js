import React, { Component } from "react";
import loui1 from "./img/loui1.jpg";
import phillip2 from "./img/phillip2.jpg";
import gucci3 from "./img/gucci3.jpg";
import katy1 from "./img/katy1.jpg";
import eva2 from "./img/eva2.jpg";
import imunizadoh3 from "./img/imunizadoh3.jpg";
import "./styles.css";
export default class Amigao extends Component {
  state = {
    dogs: [
      {
        name: "Loui",
        age: "3 years old",
        image: <img class="loui" src={loui1} alt="loui" />
      },
      {
        name: "Phillip",
        age: "5 years old",
        image: <img class="phillip" src={phillip2} alt="phillip" />
      },
      {
        name: "Gucci",
        age: "7 years old",
        image: <img class="gucci" src={gucci3} alt="gucci" />
      }
    ],
    cats: [
      {
        name: "Katy",
        age: "2 years old",
        image: <img class="katy" src={katy1} alt="katy" />
      },
      {
        name: "Eva",
        age: "10 years old",
        image: <img class="eva" src={eva2} alt="eva" />
      },
      {
        name: "Imunizadoh",
        age: "13 years old",
        image: <img class="imunizadoh" src={imunizadoh3} alt="imunizadoh" />
      }
    ],
    list: [],
    clear: []
  };

  dogsList = () => {
    this.setState({
      list: this.state.dogs.map((item) => (
        <div>
          <h2>Name: {item.name}</h2>
          <h2>Age: {item.age}</h2>
          <div>{item.image}</div>
        </div>
      ))
    });
  };

  catsList = () => {
    this.setState({
      list: this.state.cats.map((item) => (
        <div>
          <h2>Name: {item.name}</h2>
          <h2>Age: {item.age}</h2>
          <div>{item.image}</div>
        </div>
      ))
    });
  };

  clearEverything = () => {
    this.setState({
      list: this.state.clear.map((item) => <div>{item.list}</div>)
    });
  };

  render() {
    return (
      <div>
        <h1>ADOPT HERE!</h1>
        <div class="click">
          <button onClick={this.dogsList}>DOGS</button>
          <button onClick={this.catsList}>CATS</button>
          <button onClick={this.clearEverything}>CLEAR</button>
        </div>
        <h2>{this.state.list}</h2>
      </div>
    );
  }
}
