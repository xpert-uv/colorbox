import React, { useState } from 'react'
import '../css/form.css'
const NewBoxForm = ({ divData }) => {
    const initialState = [{
        width: "",
        height: "",
        bgColor: ""
    }]
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        divData(formData.bgColor, formData.width, formData.height);
        setFormData(initialState);

    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="bgColor"> Background Color</label>
            <input type="text" placeholer="name" id="bgColor" name="bgColor" value={formData.bgColor} onChange={handleChange} />
            <label htmlFor="width"> Width</label>
            <input type="Number" placeholer="Width" id="width" name="width" value={formData.width} onChange={handleChange} />
            <label htmlFor="height"> Height</label>
            <input type="Number" placeholer="height" id="height" name="height" value={formData.height} onChange={handleChange} />
            <input type="submit" value="submit" />
        </form>
    )
}

export default NewBoxForm
