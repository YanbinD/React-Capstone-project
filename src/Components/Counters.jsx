import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        { id: 1, value: 1 },
        { id: 2, value: 2 },
        { id: 3, value: 3 },
        { id: 4, value: 4 }
      ]
    };
  }

  handleDelete = e => {
    const counters = this.state.counters.filter(c => c.id !== e.id);
    this.setState({ counters });
  };

  handleReset = () => {
      const counters = this.state.counters.map(c => {
          c.value = 0;
          return c;
      });
      this.setState( {counters} )
  }

    handleIncrement = e => {
        //console.log(e);
        const counters = this.state.counters.map( c => {
            if (c.id === e.id) {
                c.value++;
            }
            return c;
        })
        this.setState({ counters });
    };

    handleDecrement = e => {
        //console.log(e);
        const counters = this.state.counters.map( c => {
            if (c.id === e.id) {
                c.value--;
            }
            return c;
        })
        this.setState({ counters });
    };




  render() {
    return (
      <div>
        <button onClick={this.handleReset} className="btn-primary btn-small m-2"> Reset </button>
        {this.state.counters.map(counter => (
          // <Counter key={counter.id} value={counter.value} selected={true}/>
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            // value={counter.value}
            // selected={true}
            // id={counter.id}
            counter={counter}
          >
            <h4> Counter # {counter.id} </h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
