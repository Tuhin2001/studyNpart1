import React,{useState} from 'react';
import {  useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
const SignupForm = ({setLoggedIn}) => {
    const [formData,setFormData] = useState({
        firstName:"",lastName:"",email:"",password:"",confirmpassword:""
    })
    const[showPassword,setShowPassword] = useState (false);
    function changeHandler(event){
        setFormData( (prevdata) =>({
            ...prevdata,
            [event.target.name] : event.target.value
        }))
    }
    const navigate = useNavigate();
    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmpassword){
            toast.error("Check password");
            return;
        }
        setLoggedIn(true);
        toast.success("Account created");
        navigate("/dashboard")
    }
  return (
    <div>

        <div>
            <button>Student</button>
            <button>Instructor</button> 
        </div>


        <form onSubmit={submitHandler}>
            <div>
                <label>
                    <p>
                        First Name <sup>*</sup>
                    </p>
                    <input
                        required
                        type='text'
                        value={formData.firstName}
                        onChange={changeHandler}
                        placeholder='Enter First Name'
                        name='firstName'
                    />
                </label>
                <label>
                    <p>
                        Last Name <sup>*</sup>
                    </p>
                    <input
                        required
                        type='text'
                        value={formData.lastName}
                        onChange={changeHandler}
                        placeholder='Enter First Name'
                        name='lastName'
                    />
                </label>
            </div>

            <label>
            <p>
                Email Address <sup>*</sup>
            </p>
            <input
                required
                type='email'
                value={formData.email}
                onChange={changeHandler}
                placeholder='Enter email id'
                name='email'
            />
            </label>
            
            <div>
                <label>
                    <p>
                        Create Password <sup>*</sup>
                    </p>
                    <input
                        required
                        type={showPassword ? ("text") : ("password")} 
                        value={formData.password}
                        onChange={changeHandler}
                        placeholder='Enter Password'
                        name='password'
                    />
                    <span onClick={()=> {
                            setShowPassword((prev) => !prev)
                        }}>
                        {
                            showPassword ?  (<AiOutlineEyeInvisible/>) :(<AiOutlineEye />) 
                        }
                    </span>
                </label>
                <label>
                    <p>
                        Confirm Password <sup>*</sup>
                    </p>
                    <input
                        required
                        type={showPassword ? ("text") : ("password")} 
                        value={formData.confirmpassword}
                        onChange={changeHandler}
                        placeholder='Enter Password'
                        name='confirmpassword'
                    />
                    <span onClick={()=> {
                            setShowPassword((prev) => !prev)
                        }}>
                        {
                            showPassword ?  (<AiOutlineEyeInvisible/>) :(<AiOutlineEye />) 
                        }
                    </span>
                </label>
            </div>

            <button>
                Create Account
            </button>


        </form>
    </div>
  )
}

export default SignupForm