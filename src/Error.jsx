import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Error = () => {
    return (
        <div className='w-full min-h-screen flex items-center justify-center'>
            <div className="text-[var(--primary-text)]">
                <div className="flex flex-col items-center gap-6">
                    <p className="text-7xl font-bold">4<span className="text-[var(--primary)]">0</span>4</p>
                    <Link to='/' className="w-fit py-2 px-6 rounded bg-[var(--primary)] flex items-center hover:bg-[var(--body)] border hover:border gap-2 text-xl transition-all ease-in-out">
                        <span>Back to Home</span>
                        <span><FaHome /></span></Link>
                </div>
            </div>

        </div>
    );
};

export default Error;