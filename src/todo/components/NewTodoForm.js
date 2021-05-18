import React, { useState } from 'react'

const NewTodoForm = ({ fromTodo }) => {
    const initalState = [{ id: "", todo: '' }]
    const [formData, setFormData] = useState(initalState);

    const handleSubmit = (e) => {
        e.preventDefault();
        fromTodo(formData.id, formData.todo);
        setFormData(initalState);
    }

    //destrucing target element
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value

        }))

    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="id">Task Number</label>
            <input
                id="id"
                type="Number"
                min="1"
                max="100"
                value={formData.id}
                name="id"
                onChange={handleChange} />

            <label htmlFor="todo">Enter Task</label>
            <input
                id="todo"
                type="text"
                value={formData.todo}
                name="todo"
                onChange={handleChange} />

            <input type="submit" value="submit" />

        </form>
    )
}

export default NewTodoForm;
