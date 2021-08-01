import React from 'react';
import Input from "../component/Input";
import NavBar from "../component/NavBar/NavBar";
import color from "../config/color";
import Joi from "joi";
import { useState } from "react";

function RegisterPage({history}) {
    const styles = {
        container: {
            display: "flex",
            justifyContent: "center",
            width: "100vw",
            height: "100vh",
            backgroundColor: color.black,
        },
        form: {
            marginTop: 250,
            width: 300,
        }
    };

    const [user, setUser] = useState({
        email: "",
        name: "",
        password: "",
    });
    const [errors, setErrors] = useState();
    const schema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required().label("Email"),
        name: Joi.string().required().label('Name'),
        password: Joi.string().required().label("First Name")
    });

    const doSubmit = () => {
        console.log(user);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // for find all errors of each input

        const newErrors = validate(user);
        if (newErrors) {
            setErrors(newErrors);
            return;
        }
        setErrors();
        doSubmit();
    };

    const validate = (obj) => {
        const validation = schema.validate(obj, { abortEarly: false });
        if (!validation.error) return null;
        const newErrors = {};
        for (let item of validation.error.details) {
            newErrors[item.path[0]] = item.message;
        }
        return newErrors;
    };

    const handleChange = ({ currentTarget: input }) => {
        let newUser = { ...user };
        newUser[input.name] = input.value;
        setUser(newUser);
    };

    return (
        <div style={styles.container}>
            <NavBar></NavBar>
            <div style={styles.form}>
                <form onSubmit={handleSubmit}>
                    <Input
                        name="email"
                        label="Email"
                        onChange={handleChange}
                        errors={errors}
                        user={user}
                    />
                    <Input
                        name="name"
                        label="Name"
                        onChange={handleChange}
                        errors={errors}
                        user={user}
                    />
                    <Input
                        name="password"
                        label="Password"
                        onChange={handleChange}
                        errors={errors}
                        user={user}
                        type='password'
                    />
                    <button className='btn-login'>Register</button>
                    <button
                        className="btn-back"
                        onClick={() => history.push("/home")}
                    >
                        Back
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;