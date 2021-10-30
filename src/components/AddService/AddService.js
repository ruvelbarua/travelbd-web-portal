import axios from 'axios';
import React from 'react';
// import { Placeholder } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddService.css';


const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('toursdata.json', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Your data submitted');
                    reset();
                }
            })
    }

    return (
        <div className="add-service">
            <h2>Please Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} Placeholder="name" />
                <textarea{...register("description")} Placeholder="description" />
                <input type="number" {...register("price")} Placeholder="price" />
                <input {...register("img")} Placeholder="image url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;