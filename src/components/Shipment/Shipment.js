import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './Shipment.css'

const Shipment = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <div className="container text-center">

            < form className="ship-form" onsubmit={handleSubmit(onSubmit)} >

                < input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Enter your name" />
                {errors.name && <span className="error"> Name is required</span>}
                < input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Enter your Email" />
                {errors.email && <span className="error"> Name is required</span>}
                < input name="address" ref={register({ required: true })} placeholder="Enter your Address" />
                {errors.address && <span className="error"> Address is required</span>}
                < input name="phone" ref={register({ required: true })} placeholder="Enter your phone Number" />
                {errors.phone && <span className="error"> Phone is required</span>}

                <input type="submit" />
            </ form>
        </div>
    );
};

export default Shipment;