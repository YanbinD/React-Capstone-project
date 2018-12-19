
import React, { Component } from "react";

// Controlled components: completly controlled by its parent
class counter extends Component {
  // ===== With constructor =====
  //if there is props, it needs to be included in the constructor as a parameter
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   count: props.counter.value // NOT A single source of truth, only changed when mounted, if props changes, the state will not
  //   //   // count : 0
  //   // };
  //   //this.handleIncrement = this.handleIncrement.bind(this);
  // };
  // =============================
  // ===== without constructor =====
  // state = {
  //   count: value
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
    const {
      counter,
      children,
      onIncrement,
      onDecrement,
      onRemove
    } = this.props;

    return (
      <div className="counter-container">
        <div className="row">
          <div className="col col-lg-1">
            <span class="badge badge-info">{counter.id} </span>
          </div>
          <div className="col col-lg-1">
            <span className={this.getBadgeClass()}> {this.formatCount()}</span>
          </div>

          <div className="col">
            <button
              onClick={() => onIncrement(counter)}
              type="button"
              className="btn btn-secondary btm-sm m-2"
            >
            

              Increment
            </button>

            <button
              onClick={() => onDecrement(counter)}
              type="button"
              className="btn btn-secondary btm-sm m-2"
              disabled={counter.value === 0 ? "disable" : ""}
            >
              Decrement
            </button>

            <button
              onClick={() => onRemove(counter)}
              className="btn btn-danger btn-sm m-2"
            >
              remove
            </button>
          </div>
        </div>
      </div>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClass() {
    let classes = "badge badge-";
    classes +=
      this.props.counter.value === 0
        ? "warning"
        : this.props.counter.value > 0
        ? "primary"
        : "danger";
    return classes;
  }
}

export default counter;
