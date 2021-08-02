import React from "react";
import color from "../config/color";

function FormInput({ label, onChange, type = "text", data, name, errors }) {
    const styles = {
        container: {
            display: "flex",
            alignItems: "center",
            marginTop: 30,
        },
        label: {
            width: '33.33%',
            fontSize: 15,
            fontWeight: 600,
        },
        inputContainer: {
            width: '66.67%',
        },
        input: {
            width: "100%",
            height: 35,
            backgroundColor: color.black,
            border: "1px solid white",
            color: color.white,
            padding: 5,
        },
        alertContainer: {
            display: "flex",
        },
        alert: {
            flexGrow: 2,
            height: 30,
            backgroundColor: "#ab3a50",
            color: color.white,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
            marginTop: 1,
        },
    };

    return (
        <React.Fragment>
            <div style={styles.container}>
                <div style={styles.label}>{label}</div>
                <div style={styles.inputContainer}>
                    <input
                        name={name}
                        type={type}
                        style={styles.input}
                        value={data[name]}
                        onChange={onChange}
                        className="form-control"
                        id={name}
                    />
                </div>
            </div>
            {errors && errors[name] && (
                <div style={styles.alertContainer}>
                    <div style={{ flexGrow: 1 }}></div>
                    <div style={styles.alert}>{errors[name]}</div>
                </div>
            )}
        </React.Fragment>
    );
}

export default FormInput;
