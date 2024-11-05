import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormComponent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        if (!name) tempErrors.name = "Name is required";
        if (!email) {
            tempErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            tempErrors.email = "Email is invalid";
        }
        if (!age) {
            tempErrors.age = "Age is required";
        } else if (isNaN(age)) {
            tempErrors.age = "Age must be a number";
        }
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Form submitted successfully!");
            console.log("Name:", name);
            console.log("Email:", email);
            console.log("Age:", age);
            setName('');
            setEmail('');
            setAge('');
        }
    };

    return (
        <Box
            className="d-flex justify-content-center align-items-center vh-100 bg-primary-subtle"
        >
            <div
                className="p-4 rounded shadow bg-white border border-4 border-primary"
                style={{ width: '500px' }}
            >
                <Typography variant="h5" component="h2" gutterBottom className="text-center fw-bold fs-2 text-primary">
                    Registration Form
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        error={!!errors.name}
                        helperText={errors.name}
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={!!errors.email}
                        helperText={errors.email}
                    />
                    <TextField
                        label="Age"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        error={!!errors.age}
                        helperText={errors.age}
                    />
                    <Button className='bg-primary text-white mt-4 fw-bold fs-5'type="submit" fullWidth>
                        Submit
                    </Button>
                </form>
            </div>
        </Box>
    );
};

export default FormComponent;
