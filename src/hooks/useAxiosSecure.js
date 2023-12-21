import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL
})

const useAxiosSecure = () => {
    const { logOut, setLoading } = useAuth();
    const navigate = useNavigate();

    // 1. intercept request (client --------> server)
    axiosSecure.interceptors.request.use(function (config) {
        // console.log(config.headers.Authorization);
        const token = `Bearer ${localStorage.getItem('access-token')}`
        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    }, function (error) {
        return Promise.reject(error)
    })

    // 2. intercept response (client <-------- server)
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        // console.log('Error from interceptors:', error);
        const status = error.response.status;
        // console.log(error.response.status);
        if (status === 401 || status === 403) {
            navigate('/login');
            await logOut();
            setLoading(false);
        }
        return Promise.reject(error);
    })

    return axiosSecure
};

export default useAxiosSecure;