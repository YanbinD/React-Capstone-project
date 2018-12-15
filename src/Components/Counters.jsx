import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            counters : [
                {id : 1, value : 1},
                {id : 2, value : 2},
                {id : 3, value : 3},
                {id : 4, value : 4}
            ]
        };
    }
    render() { 
        return (
            <div>
              {this.state.counters.map(counter => (
                // <Counter key={counter.id} value={counter.value} selected={true}/>
                <Counter key={counter.id} value={counter.value} selected={true} id={counter.id}>
                    <h4> Counter # {counter.id} </h4>
                </Counter> 
                ))}
            </div>
            );
    }
}
 
export default Counters;