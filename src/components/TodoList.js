import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
    render() {
        return(
            <ul>
                {this.props.todos.map(todo => (
                    <TodoItem key={this.props.id} todo={todo} handleChangeProps={this.props.handleChangeProps} delTodoProps={this.props.delTodoProps} />
                ))}
            </ul>
        )
    }
}
export default TodoList;