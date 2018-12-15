import React, { Component } from "react";

class counter extends Component {
  // ===== With constructor =====
  //if there is props, it needs to be included in the constructor as a parameter 
  constructor(props) {
    super(props);
    this.state = {
     count: props.value
      // count : 0
    };
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  // =============================
  // ===== without constructor =====
  // state = {
  //   count: this.props.value
  // }
  // ===============================
  //event handler
  handleIncrement = e => {
    console.log(e);
    this.setState({ count: this.state.count + 1 });
  };

  // handleIncrement = () => {
  //   this.setState({ count: this.state.count + 1 });
  // };
  // Alternative way to write handle function
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    // console.log("props: ", this.props);
    return (
      
      <div className="counter-container">
        {this.props.children}
        <h4> using props: {this.props.id} </h4>
        <span className={this.getBadgeClass()}> {this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          style={this.styles}
          className="btn btn-scondary btm-sm m-1"
        >
          Increment
        </button>
        <button
          onClick={this.handleDecrement}
          style={this.styles}
          className="btn btn-scondary btm-sm m-1"
        >
          Decrement 
        </button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" :  "primary";
    return classes;
  }
}

export default counter;
