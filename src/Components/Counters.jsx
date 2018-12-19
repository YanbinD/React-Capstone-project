import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
    
    // Destructuring, take the properties that's needed and no need to call this.props on them 
    const {onReset, onDelete, onDecrement, onIncrement, onAdd, Counters} = this.props; 

    return (
      <div>
        <button
          onClick={onReset}
          className="btn-primary btn-small m-2"
        >
          {" "}
          Reset{" "}
        </button>

        <button onClick={onAdd} className="btn-warning btn-small m-2">
          {" "}
          Add counter{" "}
        </button>

        {this.props.counters.map(c => (
          // <Counter key={counter.id} value={counter.value} selected={true}/>
          <Counter
            key={c.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={c}
          >
            <p>
              * "This is the children of Counter component" Counter # {c.id}
            </p>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
