import React, { Component } from "react";

class TODOList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      list: [],
    };
    this.handleTask = this.handleTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  addTask(event) {
    event.preventDefault();
    if (this.state.task !== "") {
      this.setState({
        // list: this.state.list.add(event.target.value)
        list: [...this.state.list, this.state.task],
        task: "",
      });
    } else {
      alert("Please write something in task field");
    }
  }

  handleTask(event) {
    console.log(event.target.value);
    this.setState({
      task: event.target.value,
    });
  }

  deleteTask(index) {
    this.setState(this.state.list.splice(index, 1));
  }

  editTask(index) {
    let editedTask = prompt("Edit task", this.state.list[index]);
    console.log(editedTask);
    this.setState(this.state.list.splice(index, 1, editedTask));
  }

  render() {
    return (
      <div className="container">
        <input
          type="text"
          className="form-control my-1"
          placeholder="Write task here..."
          value={this.state.task}
          onChange={this.handleTask}
        />

        <button onClick={this.addTask} className="btn btn-primary my-1">
          Add Task
        </button>

        {this.state.list.length > 0 ? (
          <ul class="list-group my-2">
            {this.state.list.map((value, i) => (
              <li
                class="list-group-item list-group-item-dark d-flex justify-content-between"
                key={i}
              >
              {i+1}.
                {"  "+value}
                <span>
                  <button
                    className="btn btn-danger mx-1"
                    onClick={(event) => {
                      event.preventDefault();
                      this.editTask(i);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-secondary mx-1"
                    onClick={(event) => {
                      event.preventDefault();
                      this.deleteTask(i);
                    }}
                  >
                    Delete
                  </button>
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="font-weight-light">To Do list is empty.</div>
        )}
      </div>
    );
  }
}

export default TODOList;
