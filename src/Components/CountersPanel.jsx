import React, { Component } from 'react';
import Counters from "./Counters"
import Navbar from "./CounterNavbar"

class CountersPanel extends Component {
    state = {
        counters: [
          { id: 1, value: 1 },
          { id: 2, value: 2 },
          { id: 3, value: 3 },
          { id: 4, value: 4 }
        ]
      };
  
    handleAdd = () => {
      const counters = this.state.counters.concat( 
          {id: this.state.counters.length + 1, value : 0});
          
      this.setState({counters});
    };
  
    handleDelete = counter => {
      const counters = this.state.counters.filter(c => c.id !== counter.id);
      this.setState({ counters });
    };
  
    handleReset = () => {
      const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
      });
      this.setState({ counters });
    };
  
    handleIncrement = counter => {
      
      //use the spread operator to copy the counter ,
      // **** HOWEVER, the counters_ object that we copied points to the same memory location as the state object 
      // if we change the new counters_ object, we also directly change the state 
      const counters = [...this.state.counters]
      // if do _counters[0].value++ , the state will be updated directly 
  
      // find the index of the counter that's passed in the parameter & changed 
      const index  = counters.indexOf(counter);
  
      // **** to solve the problem of the cloned array points to the same location, 
      // we need to clone the counter array at a given location 
      counters[index] = {...counter}; //clone the counter object in the parameter 
  
      counters[index].value++;
      this.setState({counters})
    };
  
    handleDecrement = counter => {
      //console.log(e);
      const counters = this.state.counters.map(c => {
        if (c.id === counter.id) {
          c.value--;
        }
        return c;
      });
      this.setState({ counters });
    };

    

    render() { 
        const {counters} = this.state;

        return (  
            <React.Fragment>
                <Navbar 
                    totalActiveCounter={counters.filter(c => c.value > 0).length}
                    totalCounter={counters.length}
                    onReset={this.handleReset}
                    onAdd={this.handleAdd}
                    />
                <Counters 
                    counters={counters}
                    onRemove={this.handleDelete}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                />

            </React.Fragment>
        );
    }
}
 
export default CountersPanel;