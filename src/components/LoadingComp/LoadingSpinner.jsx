import { PulseLoader } from "react-spinners";


const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center text-[var(--primary)] h-[calc(100vh-50px)]'>
            <PulseLoader color="#00a6fb"/>
        </div>
    );
};

export default LoadingSpinner;