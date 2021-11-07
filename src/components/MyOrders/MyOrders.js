import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './MyOrders.css';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import { Button } from 'react-bootstrap';


const MyOrder = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const email = setUser?.getItem("email");
    const { serviceId } = useParams();
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`https://ghostly-shadow-96316.herokuapp.com/myOrder/${serviceId}`)
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, [])

    return (
        <div className="text-center">
            <h2 className="text-success">ORDER DETAILS</h2>
            <div className="row">
                <div className="col-md-6 container">
                    <ServiceDetails></ServiceDetails>
                </div>
                <div className="col-md-6 border my-3">
                    <div className="text-center add-user">

                        <form >
                            <input className="p-2 m-2" {...register("name")} placeholder="name" />
                            <br />
                            <select {...register("gender")}>
                                <option value="female">female</option>
                                <option value="male">male</option>
                                <option value="other">other</option>
                            </select>
                            <br />
                            <input className="p-2 m-2" {...register("email")} placeholder="email" />
                            <br />
                            <input {...register("price", { required: true })}
                                defaultValue="" />
                            <br />
                            <input className="p-2 m-2" {...register("address")} placeholder="address" />
                            {errors.exampleRequired && <span>This field is required</span>}
                            <br />
                            <input className="p-1 mt-3 btn btn-danger" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;