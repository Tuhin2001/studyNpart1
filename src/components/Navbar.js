import React from 'react';
import logo from "../assets/Logo.svg";
import { Link } from 'react-router-dom';
import {toast } from "react-hot-toast";


 const Navbar = (props) => {
    let loggedIn = props.loggedIn;
    let setLoggedIn = props.setLoggedIn;
  return (
    <div className='flex justify-evenly'>
        <Link to="/">
            <img src={logo} alt='logo.svg' width={160} height={32} loading='lazy' />
        </Link>

        <nav>
            <ul className='flex gap-3'>
                <li>
                    <Link to="/" >Home</Link>
                </li>
                <li>
                    <Link to="/" >About</Link>
                </li>
                <li>
                    <Link to="/" >Contact</Link>
                </li>
            </ul>
        </nav>


        {/* Login - Signup - Dashboard - */}
        <div className='flex gap-3 ml-5 mr-3'>
            { !loggedIn &&
                <Link to="/login">
                    <button>Log In</button>
                </Link>
            }

            { !loggedIn &&
                <Link to="/signup">
                    <button onClick={()=>{setLoggedIn(false);
                    toast.success("logged in");}}>Sign Up</button>
                </Link>
            }

            { loggedIn &&
                <Link to="/">
                    <button onClick={()=>{setLoggedIn(false);
                    toast.success("logged out");}}>Log Out</button>
                </Link>
            }

            { loggedIn &&
                <Link to="/Dashboard">
                    <button>Dashboard</button>
                </Link>
            }
        </div>
        

    </div>
  )
}

export default Navbar;