import React, { useContext, useState } from 'react'
import { LOGIN_URL } from '../../Constants.js';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "./UserContext.js";


const Login = () => {
    const { isLoggedIn, login, logout } = useContext(UserContext);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
   

    //! The Function Which Handles Login Request
    //!  Saves the token in Cookies
    //! invokes login method which sets user login as true
    async function loginHandler(e) {
        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL, { username, password }, { headers: { 'Content-Type': 'application/json' } });
            const msg = "Welcome " + response.data.firstName + " " + response.data.lastName;
            setMessage(msg);
            
            Cookies.set("accessToken", response.data.token);
            login(response.data.token);

            setTimeout(() => {
                setMessage('')
                navigate('/')
            }, 1000)

        } catch (error) {
            setMessage(error.response.data.message);
            setTimeout(() => {
                setMessage('')
            }, 1000)
        }
    }

    return (
        <div className="flex justify-center w-full bg-white">

            <form className="flex flex-col items-center border border-green-500 w-1/3 m-8" onSubmit={loginHandler}>
                <h1>{message}</h1>
                <div className="m-3">
                    <label htmlFor="username">Username : </label>
                    <input autoComplete='username' value={username} className="border px-4 w-2/3 border-black outline-none rounded-md" type="text" name="" id="username"
                        onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="m-3">
                    <label htmlFor="password">Password : </label>
                    <input value={password} className="border ml-1 px-4 w-2/3 border-black outline-none rounded-md" type="password" name="" id="password"
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <input autoComplete='current-password' className="border text-center m-4 px-8 py-1 rounded-md border-black" type="submit" value={"Login"} />
            </form>

        </div>
    )
}

export default Login