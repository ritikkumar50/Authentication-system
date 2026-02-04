import { createContext, useState, useEffect } from "react"
import axios from "axios"
import { toast } from "react-toastify"

export const AppContent = createContext();

export const AppContextProvider = (props) => {

    axios.defaults.withCredentials = true;

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [isLoggedin, setIsLoggedin] = useState(false)
    const [userData, setUserData] = useState(false)

    useEffect(() => {
        axios.defaults.withCredentials = true;
    }, [])

    const getAuthState = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/auth/is-auth');

            if (data.success) {
                setIsLoggedin(true);
                getUserData();
            }
        } catch (error) {
            // Silently fail - user is just not authenticated
            console.log("User not authenticated");
        }
    };


    const getUserData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/user/data')
            data.success ? setUserData(data.userData) : toast.error(data.message)

        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong");
        }
    }

    useEffect(() => {
        getAuthState();
    }, [])

    const value = {
        backendUrl,
        isLoggedin, setIsLoggedin,
        userData, setUserData,
        getUserData

    }

    return (

        <AppContent.Provider value={value}>
            {props.children}
        </AppContent.Provider>
    )
}