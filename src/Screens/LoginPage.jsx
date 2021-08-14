import React from "react";
import Input from "../component/Input";
import NavBar from "../component/NavBar/NavBar";
import color from "../config/color";
import Joi from "joi";
import { useState } from "react";
import { getCurrentUser, login } from '../services/authService'

import './Login.css'
import { useEffect } from "react";

function LoginPage({ history }) {
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
        password: "",
    });
    const [errors, setErrors] = useState();
    const schema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required().label("Email"),
        password: Joi.string().required().label("First Name")
    });

    const doSubmit = async () => {
        console.log(user);
        await login(user.email, user.password)
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

    const getUser = async () => {
        const result = await getCurrentUser()
        if (result) {
            history.goBack()
        }
    }

    useEffect(() => {
        getUser()
    }, [])


    return (
        <div style={styles.container}>
            <NavBar history={history}></NavBar>
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
                        name="password"
                        label="Password"
                        onChange={handleChange}
                        errors={errors}
                        user={user}
                        type='password'
                    />
                    <button className='btn-login'>Login</button>
                    <button
                        className="btn-back"
                        onClick={() => history.push("/register")}
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
