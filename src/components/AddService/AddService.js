import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';


const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/services', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('Your data submitted');
                    reset();
                }
            })
    }

    return (
        <div className="add-service">
            <h2 className="text-danger">Please Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("place", { required: true, maxLength: 20 })} Placeholder="place" />
                <input {...register("day", { required: true, maxLength: 20 })} Placeholder="day" />
                <textarea {...register("description")} Placeholder="description" />
                <input type="number" {...register("price")} Placeholder="price" />
                <input {...register("img")} Placeholder="image url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;