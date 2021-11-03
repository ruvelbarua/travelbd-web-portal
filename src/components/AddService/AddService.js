import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import AddUsers from '../AddUsers/AddUsers';
import './AddService.css';


const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://ghostly-shadow-96316.herokuapp.com/services', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('Your data submitted');
                    reset();
                }
            })
    }

    return (
        <div className="my-5">
            <div className="add-service p-4">
                <h2 className="text-danger">Please Add a Service</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("place", { required: true, maxLength: 20 })} Placeholder="Place" />
                    <input {...register("day", { required: true, maxLength: 20 })} Placeholder="Day" />
                    <textarea {...register("description")} Placeholder="Description" />
                    <input type="number" {...register("price")} Placeholder="Price" />
                    <input {...register("img")} Placeholder="Image url" />
                    {/* <input className="bg-light text-danger" type="submit" /> */}
                    <Button type="submit" variant="primary">Submit</Button>
                </form>
            </div>
            <div className="my-5">
                <AddUsers></AddUsers>
            </div>
        </div>
    );
};

export default AddService;