import moment from "moment";
import { MdDateRange } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useState } from "react";
import UpdateTaskModal from "../../../components/Modal/UpdateTaskModal";
import { useDrag } from "react-dnd";

const TaskCard = ({ task, index, refetch, sectionIdentifier }) => {
    const { _id, name, userEmail, priority, deadline, createdAt, description } = task;
    const axiosSecure = useAxiosSecure();

    // for modal
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => {
        setIsOpen(false)
    }

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'task',
        item: { id: task?._id, sectionIdentifier },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    console.log(isDragging);


    // handle delete my task
    const handleDeleteMyTask = (id) => {
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


    // handleChangeStatus
    const handleChangeStatus = (e) => {
        const updateStatus = e.target.value;
        axiosSecure.put(`/update-task-status/${_id}`, { updateStatus })
            .then(res => {
                if (res.status === 200) {
                    refetch();
                    toast.success('Updated Status Successful');
                }
            })
    }

    return (
        <div
            ref={drag}
            className={`border border-[var(--border)] rounded relative py-1.5 px-3 flex flex-col gap-2 hover:shadow-lg hover:scale-[103%] duration-200 cursor-pointer ${isDragging ? 'opacity-20' : 'opacity-100'}`}>
            <h2 className='text-2xl font-semibold'>{name}</h2>
            <p className="mt-3 mb-6">{description}</p>

            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                    <p title={moment(createdAt).format("D MMMM YYYY, dddd, h:mm:ss A")} className="flex gap-2 items-center"><span><MdDateRange /></span> {moment(createdAt).format("D MMM, YYYY")} </p>
                    <button
                        title="Edit"
                        onClick={() => setIsOpen(true)}
                        className='py-[6px] px-1 text-base text-[var(--primary-text)] rounded-sm hover:shadow-lg flex flex-row items-center gap-1'><FaEdit /> <span></span>
                    </button>
                    <button
                        title="Delete"
                        onClick={() => handleDeleteMyTask(_id)}
                        className='py-[6px] px-1 text-sm text-[var(--primary-text)] rounded-sm hover:shadow-lg flex flex-row items-center gap-1'><FaTrashAlt /> <span></span>
                    </button>
                </div>

                <div className="flex items-center gap-3">
                    <p className="flex gap-2 items-center"><span className="bg-[#ff2929] text-white text-sm py-[1px] px-[6px] rounded-sm">Deadline</span> {moment(deadline).format("D MMM, YYYY")}</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="border border-[var(--border)] rounded py-1 px-2">Priority: {priority}</p>

                    <select defaultValue={task?.status} onChange={handleChangeStatus} className={`text-base font-semibold bg-[var(--body)] outline-none border border-[var(--border)] rounded py-1 px-2`}>
                        <option value="to-do">to do</option>
                        <option value="on-going">on going</option>
                        <option value="completed">completed</option>
                    </select>
                </div>

            </div>

            <UpdateTaskModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                closeModal={closeModal}
                refetch={refetch}
                task={task}
            />
        </div>
    );
};

export default TaskCard;