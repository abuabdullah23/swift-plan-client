import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiEye, FiEyeOff } from 'react-icons/fi';
import FadeLoader from 'react-spinners/FadeLoader'
import toast from "react-hot-toast";
import Loader from "../../components/LoadingComp/Loader";
import SocialLogin from "./SocialLogin";
import useAuth from "../../hooks/useAuth";
import BackToHome from "../../components/BackToHome/BackToHome";

const Login = () => {
    const { loading, setLoading, user, login } = useAuth();
    const [seePass, setSeePass] = useState(false);

    // redirect after login to target page
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';


    // handle login form value
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(res => {
                toast.success('Login Successful!');
                navigate(from, { replace: true });
                setLoading(false);
            })
            .catch(error => {
                toast.error(error.message);
                setLoading(false);
            })
    }

    return (
        <div>
            {
                loading && <div className='w-screen h-screen flex justify-center items-center fixed left-0 top-0 bg-[#38303033] z-[999]'>
                    <FadeLoader />
                </div>
            }
            <BackToHome />
            <div className='py-5 flex items-center justify-center'>
                <div className='w-full justify-center items-center p-5 md:p-10'>
                    <div className='w-full rounded-md flex flex-col md:flex-row items-center justify-center'>
                        <div className='w-full md:w-[50%] px-0 lg:px-20'>
                            <h2 className='text-center w-full text-xl  font-bold'>Login</h2>
                            <div className="flex flex-col gap-7">
                                <form onSubmit={handleLogin} className=''>
                                    <div className='flex flex-col gap-1 mb-2'>
                                        <label htmlFor="email">Email</label>
                                        <input 
                                        autoComplete='username'
                                        required type="email" className='w-full px-3 py-2 border border-slate-200 outline-none focus:border-[#00a6fb] rounded-md bg-transparent' id='email' name='email' placeholder='email' />
                                    </div>
                                    <div className='flex flex-col gap-1 mb-4'>
                                        <label htmlFor="password">Password</label>
                                        <div className="relative">
                                            <input
                                                autoComplete="current-password"
                                                required
                                                type={!seePass ? 'password' : 'text'}
                                                className='w-full px-3 py-2 border border-slate-200 outline-none focus:border-[#00a6fb] rounded-md bg-transparent' id='password' name='password' placeholder='password' />
                                            <div
                                                onClick={() => setSeePass(!seePass)}
                                                className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2">
                                                {
                                                    !seePass ? <FiEye /> : <FiEyeOff />
                                                }
                                            </div>
                                        </div>
                                    </div>

                                    {/* submit button */}
                                    <button
                                        disabled={loading ? true : false}
                                        type="submit"
                                        className={`px-8 w-full py-2 text-white bg-[#00a6fb] shadow-lg hover:shadow-[#00a6fb]/30 rounded-md ${loading && 'bg-[#00a6fb]'} `}>
                                        {
                                            loading ? <Loader loadingText={'Logging in'} /> : 'Login'
                                        }
                                    </button>
                                </form>

                                <SocialLogin />
                            </div>
                            <div className='text-center pt-1'>
                                <p>You have no account ? <Link className='text-blue-500' to='/register'>Register</Link></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;