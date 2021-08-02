import React from 'react';

function FormRadio({ label, user, onChange }) {
    const styles = {
        container: {
            display: 'flex',
            alignItems: 'center',
        },
        label: {
            width: '33.33%',
            fontSize: 15,
            fontWeight: 600,
        },
        radioContainer: {
            width: '66.67%',
            margin: '30px 0px',
        },
        input: {
            margin: '0px 10px',
            fontSize: 15
        }
    }

    const onChangeValue = event => {
        const newUser = { ...user }
        newUser.gender = event.target.value
        onChange(newUser)
    }

    return (
        <div style={styles.container}>
            <div style={styles.label}>{label}</div>
            <div style={styles.radioContainer} onChange={onChangeValue}>
                <input style={styles.input} className="form-control" type="radio" value="Male" name="gender" /> Male
                <input style={styles.input} className="form-control" type="radio" value="Female" name="gender" /> Female
                <input style={styles.input} className="form-control" type="radio" value="Other" name="gender" /> Other
            </div>
        </div>
    );
}

export default FormRadio;