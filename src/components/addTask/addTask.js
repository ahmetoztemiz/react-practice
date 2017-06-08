import React from "react";
import { Input } from 'antd';
import "./addTask.css";

export class AddNewTask extends React.Component{
    constructor() {
        super();
        this.pressedSubmit = this.pressedSubmit.bind(this)
    }

    pressedSubmit(event) {
        event.preventDefault();
        let input = event.target.querySelector("input");
        let text = input.value;
        input.value = "";
        this.props.updateList(text);
    }

    render() {
        return (
            <form onSubmit={this.pressedSubmit}  className="input">
                <Input size="large" placeholder="Enter your to-do here..." />
            </form>
        );
    }

}
