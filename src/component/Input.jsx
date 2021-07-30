import React from "react";
import color from "../config/color";

function Input({ name, onChange, errors, label, user, type='text' }) {
    const styles = {
        container: {
            with: '100%',

        },
        alert: {
            width: "100%",
            height: 30,
            backgroundColor: "#ab3a50",
            color: color.white,
            display: "flex",
            alignItems: "center",
            justifyContent: 'center',
            borderRadius: 5,
            marginTop: 1,
        },
        input: {
            width: '100%',
            height: 35,
            borderRadius: 5,
            marginTop: 10,
            backgroundColor: '#3b4148',
            border: 'none',
            outline: 'none',
            color: color.white,
            padding: 10,
        }
    };

    return (
        <div style={styles.container}>
            <input
                style={styles.input}
                type={type}
                className="form-control"
                id={name}
                name={name}
                onChange={onChange}
                value={user[name]}
                placeholder={label}
            />
            {errors && errors[name] && (
                <div style={styles.alert} role="alert">
                    {errors[name]}
                </div>
            )}
        </div>
    );
}

export default Input;
