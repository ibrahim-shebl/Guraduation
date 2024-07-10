import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Button } from '@mui/material';
import { useState , useEffect } from 'react';
import GoogleImg from '../../assets/images/google.png';
import { useNavigate  } from 'react-router-dom';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

 import axios from 'axios';

 

const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://mohmed.testworks.top/public/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();

            if (response.ok) {
                // Login success
                localStorage.setItem('isLoggedIn', true); // Set a flag to log in in local storage
                navigate('/'); // Go to home page or any other route
            } else {
                // Error in login
                console.log("error in signin:", data.message);
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };
  
    return (
        <div className='signZoom'>
            <section className='signIn mb-5'>
                <div className="breadcrumbWrapper">
                    <div className="container-fluid">
                        <ul className="breadcrumb breadcrumb2 mb-0">
                            <li><Link to="/">Home</Link>  </li>
                            <li>Sign In</li>
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

                        <h3>Sign In</h3>
                        <form className='mt-4' onSubmit={handleSubmit}>
                            <div className='form-group mb-4 w-100'>
                                <TextField id="email" type="email" label="Email" className='w-100'
                                     onChange={(e) => setEmail(e.target.value)}  />
                            </div>
                            <div className='form-group mb-4 w-100'>
                                <div className='postion'>
                                    <TextField id="password" type={showPassword === false ? 'password' : 'text'} name='password' label="Password" className='w-100'  onChange={(e) => setPassword(e.target.value)}
                                        />
                                    <Button className='icon' onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword === false ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />
                                        }

                                    </Button>
                                </div>
                            </div>
                            



                            <div className='form-group mt-5 mb-4 w-100'>
                                <Button className='btn btn-g btn-lg w-100 ' type='submit'>Sign In</Button>
                            </div>


                            <div className='form-group mt-5 mb-4 w-100 signInOr'>
                                <p className='text-center or'>OR</p>
                                <Button className='w-100' variant="outlined"><img src={GoogleImg} />
                                    Sign In with Google</Button>
                            </div>


                            <p className='text-center or'>Not have an account ? 
                                <b className='sign'> <Link to="/signup">Sign Up</Link>
                                </b>
                            </p>

                        </form>
                    </div>
                </div>


            </section>
        </div>
    )
}

export default SignIn;



 
 