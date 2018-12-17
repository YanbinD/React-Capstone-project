import React, { Component } from "react";


// Controlled components: completly controlled by its parent 
class counter extends Component {
  // ===== With constructor =====
  //if there is props, it needs to be included in the constructor as a parameter
  constructor(props) {
    super(props);
    // this.state = {
    //   count: props.counter.value // NOT A single source of truth, only changed when mounted, if props changes, the state will not 
    //   // count : 0
    // };
    //this.handleIncrement = this.handleIncrement.bind(this);
  };
  // =============================
  // ===== without constructor =====
  // state = {
  //   count: this.props.value
  // }
  // ===============================
  //event handler

  //handle the increment in parent not here 
        // handleIncrement = e => {
        //   console.log(e);
        //   this.setState({ count: this.state.count + 1 });
        // };

  // handleIncrement = () => {
  //   this.setState({ count: this.state.count + 1 });
  // };
  // Alternative way to write handle function
  // handleDecrement = () => {
  //   this.setState({ count: this.state.count - 1 });
  // };

  render() {
    // console.log("props: ", this.props);
    return (
      <div className="counter-container">

        {this.props.children}
        <h4> using props: {this.props.counter.id} </h4>
        <span className={this.getBadgeClass()}> {this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          style={this.styles}
          className="btn btn-scondary btm-sm m-1"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          style={this.styles}
          className="btn btn-scondary btm-sm m-1"
        >
          Decrement
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  formatCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : this.props.counter.value  > 0 ? "primary" : "danger";
    return classes;
  }
}

export default counter;
