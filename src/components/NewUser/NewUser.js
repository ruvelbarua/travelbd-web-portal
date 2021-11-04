import React from 'react';
import { useForm } from "react-hook-form";
import './NewUser.css';

const NewUser = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <h2>Thi is AddUser</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input className="p-2 m-2" {...register("name")} placeholder="name" />

                <select {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>

                <input className="p-2 m-2" {...register("email")} placeholder="email" />

                <input className="p-2 m-2" type="password" {...register("price", { required: true })} placeholder="password" />

                <input type="number" {...register("mobile", { required: true })} />

                <input className="p-2 m-2" {...register("address")} placeholder="address" />

                {errors.exampleRequired && <span>This field is required</span>}

                <input className="p-1 mt-3 btn btn-danger" type="submit" />
            </form>
        </div>
    );
};

export default NewUser;