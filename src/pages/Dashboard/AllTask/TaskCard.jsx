import moment from "moment";
import { MdDateRange } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const TaskCard = ({ task, index, refetch }) => {
    const { _id, name, userEmail, status, priority, deadline, createdAt, description } = task;

    const axiosSecure = useAxiosSecure();

    // handle delete my article
    const handleDeleteMyArticle = (id) => {
        Swal.fire({
            title: 'Are you sure to Delete your article?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'green',
            cancelButtonColor: 'red',
            confirmButtonText: 'Yes, Delete!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`delete-my-task/${id}`)
                    .then(res => {
                        if (res.status === 200) {
                            refetch();
                            toast.success(res.data.message);
                        }
                    })
                    .catch(error => {
                        toast.error(error.message);
                    })
            }
        })
    }

    return (
        <div className='border border-[var(--border)] rounded relative p-3 flex flex-col gap-2 hover:shadow-lg hover:scale-[103%] duration-200'>
            <h2 className='text-lg font-semibold'>{name}</h2>
            <p>{description}</p>

            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-4">
                    <p title={moment(createdAt).format("D MMMM YYYY, dddd, h:mm:ss A")} className="flex gap-2 items-center"><span><MdDateRange /></span> {moment(createdAt).format("D MMM, YYYY")}</p>
                    <button
                        onClick={() => handleDeleteMyArticle(_id)}
                        className='py-[2px] text-[#ff2929] rounded-sm hover:shadow-lg hover:shadow-[#ff2929]/50 flex flex-row items-center gap-1'><FaTrashAlt /> <span></span>
                    </button>
                </div>

                <p className="flex gap-2 items-center"><span className="bg-[#ff2929] text-white py-[1px] px-[6px] rounded-sm">Deadline</span> {moment(deadline).format("D MMM, YYYY")}</p>
            </div>
        </div>
    );
};

export default TaskCard;