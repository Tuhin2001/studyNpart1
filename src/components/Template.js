import React from 'react'
import SignupForm from '../components/SignupForm';
import frameImage from "../assets/frame.png" 
import LoginForm from '../components/LoginForm';

const Template = ({title, desc1, desc2, image, formtype, setLoggedIn}) => {
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>

            {
                formtype === "signup" ?
                (<SignupForm  setLoggedIn={setLoggedIn}/>):(<LoginForm setLoggedIn={setLoggedIn} />)
            }

            <div>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>

            <button>
                Sign Up with google
            </button>
        </div>

        <div>
            <img src={frameImage} alt='frameImg' width={558} height={504} loading='lazy'/>
            <img src={image} alt='Img' width={558} height={490} loading='lazy'/>
        </div>
    </div>
  )
}
export default Template;