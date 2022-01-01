import React, { Component } from "react";

class InputTodo extends Component {

state = {
    title: ""
}

render() {
    return (
        <form>
            <input type="text" placeholder="Add Todo..." value={this.state.title}/>
            <button className="btn btn-success">Submit</button>
      </form>
    );
  }
}
export default InputTodo;