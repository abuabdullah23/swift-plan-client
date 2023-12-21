import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';

const SocialLogin = () => {
    const { googleLogin, setLoading } = useAuth();

    // redirect after login to target page
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                toast.success('Login with Google Successful');
                setLoading(false);
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast.error(error.message);
                setLoading(false);
            })
    }

    return (
        <div onClick={handleGoogleLogin}
            className='p-2 rounded-md w-full border-2 border-[#00a6fb] hover:border-[#87d7ff] flex items-center justify-center gap-2 cursor-pointer'>
            <FcGoogle />
            <span className=' text-sm'>Login with Google</span>
        </div>
    );
};

export default SocialLogin;