import React from "react";
import Counter from "./Counter";

const Counters = (props) => {

    // Destructuring, take the properties that's needed and no need to call this.props on them
    const { onRemove, onDecrement, onIncrement, counters } = props;

    return (
      <div>
        {counters.map(c => (
          <Counter
            key={c.id}
            onRemove={onRemove}
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
 

export default Counters;