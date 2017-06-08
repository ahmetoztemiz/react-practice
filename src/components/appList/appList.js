import React from "react";
import { Button, Card, message } from 'antd';
import "./appList.css";


export class ToDoAppList extends React.Component{
    constructor() {
        super();
        this.remove = this.remove.bind(this);
    }

    remove (item) {
        let text = item.target.parentNode.querySelector("span").innerText;
        message.success('Well done... 1 task completed!', 3);
        this.props.remove(text);
    }

    render() {
        let task = this.props.tasks.map((item, i) =>{
        return(
            <div style={{padding: "3px"}}>
                <Card style={{ width: "60%" }}  className="task">
                    <span>
                        {item}
                    </span>
                </Card>
                <Button
                    style={{width: "70px", height: "68px"}}
                    icon="check" onClick={this.remove} className="button">
                    OK!
                </Button>

            </div>)});

        return (
            <ul className="list">
                {task}
            </ul>
        );
    }
}
