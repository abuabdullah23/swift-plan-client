import { useEffect, useState } from "react";
import UpdateTaskModal from "../Modal/UpdateTaskModal";
import moment from "moment";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useDrag, useDrop } from "react-dnd";

const ListTasks = ({ tasks, refetch }) => {

    const [toDos, setToDos] = useState([]);
    const [onGoing, setOnGoing] = useState([]);
    const [completed, setCompleted] = useState([]);

    useEffect(() => {
        const toDoTasks = tasks.filter((myTasks) => myTasks?.status === 'to-do');
        const onGoingTasks = tasks.filter((myTasks) => myTasks?.status === 'on-going');
        const completedTasks = tasks.filter((myTasks) => myTasks?.status === 'completed');

        setToDos(toDoTasks);
        setOnGoing(onGoingTasks);
        setCompleted(completedTasks);

    }, [tasks])


    const statuses = ['to-do', 'on-going', 'completed'];

    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {
                statuses.map((status, index) => (
                    <Section
                        key={index}
                        status={status}
                        toDos={toDos}
                        onGoing={onGoing}
                        completed={completed}
                        refetch={refetch}
                    />
                ))
            }
        </div>
    );
};

export default ListTasks;


// ======================= SECTION ==========================


// Section
const Section = ({ status, toDos, onGoing, completed, refetch }) => {
    const axiosSecure = useAxiosSecure();

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'task',
        drop: (item) => addItemToSection(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }))

    const addItemToSection = (id) => {
        // console.log('Dropped task', id, status);
        const updateStatus = status;
        axiosSecure.put(`/update-task-status/${id}`, { updateStatus })
            .then(res => {
                if (res.status === 200) {
                    refetch();
                    toast.success('Updated Status Successful');
                }
            })
    };

    let text = 'ToDo';
    let bg = 'bg-slate-500';
    let tasksToMap = toDos;

    if (status === 'on-going') {
        text = 'On Going'
        bg = 'bg-purple-500'
        tasksToMap = onGoing
    }

    if (status === 'completed') {
        text = 'Completed'
        bg = 'bg-green-500'
        tasksToMap = completed
    }

    return (
        <div ref={drop} className={`w-full rounded-md p-3 ${isOver ? 'bg-[var(--drop-bg)] border border-[var(--primary)]' : ''}`}>
            <Header text={text} bg={bg} count={tasksToMap.length} />
            <div className="flex flex-col gap-5 mt-4">
                {
                    tasksToMap.length > 0 && tasksToMap?.map((task) => (
                        <SingleTask
                            key={task?._id}
                            task={task}
                            refetch={refetch}
                        />
                    ))
                }
            </div>
        </div>
    );
};

// ======================= HEADER ==========================

// Header
const Header = ({ text, bg, count }) => {
    return (
        <div className={`${bg} text-white rounded py-[6px] px-3 flex items-center justify-between`}>
            {text} <span className="w-5 h-5 bg-white text-black rounded flex items-center justify-center">{count}</span>
        </div>
    );
};


// ======================= SINGLE TASK ==========================

// Single Task
const SingleTask = ({ task, refetch }) => {
    const { _id, name, priority, deadline, createdAt, description } = task;
    const axiosSecure = useAxiosSecure();

    // for modal
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => {
        setIsOpen(false)
    }

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'task',
        item: { id: task?._id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    // console.log(isDragging);

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
            className={`border border-[var(--border)] rounded relative py-1.5 px-3 hover:shadow-lg hover:scale-[103%] duration-200 cursor-pointer ${isDragging ? 'opacity-20' : 'opacity-100'}`}>

            <div className="flex flex-col gap-2"
                data-aos="flip-right"
                data-aos-easing="linear"
                data-aos-duration="500"
            >
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