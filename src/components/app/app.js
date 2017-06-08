import React from "react";
import {AddNewTask} from "../addTask/addTask";
import {ToDoAppList} from "../appList/appList";
import { message } from 'antd';
import "./app.css";

export class Todo extends React.Component{
    constructor(props) {
        super();
        this.state = {tasks: props.tasks};
        this.updateList = this.updateList.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    updateList(text) {
        let updatedTask = this.state.tasks;
        updatedTask.unshift(text);
        this.setState({tasks: updatedTask});
        this.updateLocalStorage(updatedTask);
        message.success('1 task assigned!', 3);
    }

    removeTask(text) {
        let updatedTask = this.state.tasks;
        updatedTask.splice(updatedTask.indexOf(text), 1);
        this.setState({tasks: updatedTask});
        this.updateLocalStorage(updatedTask);
    }

    updateLocalStorage(updatedTask) {
        localStorage.setItem("storedTasks", JSON.stringify(updatedTask));
    }

    render() {
        return (
            <div>
                <h1 className="head">TO-DO LIST</h1>
                <AddNewTask updateList = {this.updateList} />
                <ToDoAppList tasks = {this.props.tasks} remove = {this.removeTask}/>
            </div>
        );
    }
}
