import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import ToDo from './ToDo';


const TodoList = () => {
    const initalState = []



    const [task, setTask] = useState(initalState);
    const fromTodo = (id, todo) => {

        //console.log(formData);

        setTask(task => [...task, { id, task: todo }])

    }


    const removeTask = (i) => {
        const rmBtn = i.target.id;
        console.log(`this has been clicked : ${rmBtn}`);
        const newTodos = task.filter(task => task.id !== rmBtn);
        setTask(newTodos);
    }

    return (
        <div>
            <h1> Todo List: </h1>
            <div>
                {task.map(task => <ToDo id={task.id} key={task.id} todo={task.task} rm={removeTask} />)}
            </div>
            <NewTodoForm fromTodo={fromTodo} />
        </div>
    )
}

export default TodoList
