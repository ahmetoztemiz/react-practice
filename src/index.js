import React from 'react';
import ReactDOM from 'react-dom';
import {Todo} from './components/app/app.js';


let tasksList = ["task1","task2"];

let storage = localStorage.getItem("storedTasks");

if (storage) {
    tasksList = JSON.parse(storage);
}

ReactDOM.render(
    <Todo tasks = {tasksList} />,
    document.getElementById("root")
);
