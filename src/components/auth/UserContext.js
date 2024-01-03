import Cookies from "js-cookie";
import { createContext, useState } from "react";

export const UserContext = createContext();


export const userAuthContext = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  

    const login = (newToken) => {
        if (!newToken) {
            setIsLoggedIn(false)
        }
        setIsLoggedIn(true)


    }
    const logout = () => {
        setIsLoggedIn(false)
        Cookies.remove('accessToken')
    }

    return {
        isLoggedIn, login, logout
    }
}