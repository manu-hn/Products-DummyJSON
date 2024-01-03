import Cookies from "js-cookie"
import { useEffect, useState } from "react";

export const useAuth = () => {
    const token = Cookies.get('accessToken');
    const [userName, setUserName] = useState(null);
    const [accessToken, setAccessToken] = useState(false)
    function tokenValidator() {
        if (token) {
            setAccessToken(true)
        } else {
            setAccessToken(false)
        }
    }
    useEffect(() => {
        tokenValidator()
    }, [])

    return { accessToken, setAccessToken, setUserName, userName };
}

