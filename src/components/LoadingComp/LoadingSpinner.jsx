import { PulseLoader } from "react-spinners";


const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center h-[calc(100vh-300px)]'>
            <PulseLoader/>
        </div>
    );
};

export default LoadingSpinner;