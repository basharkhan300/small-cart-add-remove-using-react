import React, { Component } from "react";
import Counter from "./components/counter";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const incrementCounters = [...this.state.counters];
    const index = incrementCounters.indexOf(counter);
    incrementCounters[index] = { ...counter };
    incrementCounters[index].value++;

    this.setState({ counters: incrementCounters });
  };

  handleDecrement = (counter) => {
    const decrementCounters = [...this.state.counters];
    const index = decrementCounters.indexOf(counter);
    decrementCounters[index] = { ...counter };
    if (decrementCounters[index].value > 0) {
      decrementCounters[index].value--;
    }

    this.setState({ counters: decrementCounters });
  };

  handleDelete = (counterid) => {
    const newCounters = this.state.counters.filter(
      (element) => element.id !== counterid
    );
    this.setState({ counters: newCounters });
  };

  handleReset = () => {
    const newCounters = this.state.counters.map((element) => {
      element.value = 0;
      return element;
    });

    this.setState({ counters: newCounters });
  };

  render() {
    return (
      <div>
      <NavBar totalCounters={ this.state.counters.filter((element) => { return element.value > 0 }).length } />
        <Counters
          counters={this.state.counters}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
        />
      </div>
    );
  }
}

export default App;
