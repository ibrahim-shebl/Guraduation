 import React, { useState } from "react";
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import '../SignIn/style.css';

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate(); // Initialize navigate function

    async function form() {
        // Check if fields are not empty
        if (!name || !email || !phone) {
            alert("Please fill in all fields");
            return;
        }
    
        let item = { name, email, phone };
        try {
            let response = await fetch("https://mohmed.testworks.top/public/api/add-customer", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": 'application/json'
                },
                body: JSON.stringify(item)
            });

            if (response.ok) {
                // Clear form fields
                setName("");
                setEmail("");
                setPhone("");

                // Redirect to home page after successful save
                navigate("/");
            } else {
                // Handle error case
                alert("Failed to save data");
            }
        } catch (error) {
            console.error("Error saving form data:", error);
            alert("Failed to save form data");
        }
    }

    return (
        <div className='signZoom'>
            <section className='signIn mb-5'>
                <div className='loginWrapper'>
                    <div className='card shadow'>
                        <h3>Fill Form.</h3>
                        <form className='mt-4'>
                            <div className='form-group mb-4 w-100'>
                                <TextField id="name" label="Enter Your Name" className='w-100' type="text" value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required />
                            </div>
                            <div className='form-group mb-4 w-100'>
                                <TextField id="email" type="email" name='email' label="Enter Your Email" className='w-100' value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required />
                            </div>
                            <div className='form-group mb-4 w-100'>
                                <TextField id="phone" type="number" name='phone' label="Enter Your Phone" className='w-100' value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required />
                            </div>
                            <div className='form-group mt-5 mb-4 w-100'>
                                <Button className='btn btn-g btn-lg w-100' id='send' onClick={form}>Save</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Form;
