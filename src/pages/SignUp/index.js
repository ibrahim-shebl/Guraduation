import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../SignIn/style.css'
import TextField from '@mui/material/TextField';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Button } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();
    
    async function signup() {
        if (!name || !email || !password || !phone) {
            alert("Please fill in all fields");
            return;  
        }
    
        let item = { name, email, password, phone };
        let result = await fetch("https://mohmed.testworks.top/public/api/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(item)
        });
    
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        localStorage.setItem("userEmail", email);
        // Extracting name from the result
        let Email = result.data.user.email;
        console.log(Email); // Output the name to console
    
        navigate("/");
    }
    
    
     
    return (
        <div className='signZoom'>
            <section className='signIn mb-5'>
                <div class="breadcrumbWrapper res-hide">
                    <div class="container-fluid">
                        <ul class="breadcrumb breadcrumb2 mb-0">
                            <li><Link to="/">Home</Link>  </li>
                            <li>SignUp</li>
                        </ul>
                    </div>
                </div>

                <div className='loginWrapper'>
                    <div className='card shadow'>
                        <Backdrop
                            sx={{ color: '#000', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={showLoader}
                            className="formLoader"
                        >
                            <CircularProgress color="inherit" />
                        </Backdrop>

                        <h3>SignUp</h3>
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
                            <div className='form-group mb-4 w-100'>
                                <div className='position'>
                                    <TextField id="password" type={showPassword === false ? 'password' : 'text'} name='password' label="Password" className='w-100' value={password} onChange={(e) => setPassword(e.target.value)}
                                        required />
                                    <Button className='icon' onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword === false ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />
                                        }
                                    </Button>
                                </div>
                            </div>
                            <div className='form-group mt-5 mb-4 w-100'>
                                <Button className='btn btn-g btn-lg w-100' id='send' onClick={signup}>Sign Up</Button>
                            </div>

                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SignUp;
