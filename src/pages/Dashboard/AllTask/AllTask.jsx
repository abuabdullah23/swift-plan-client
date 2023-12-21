import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import TaskCard from './TaskCard';
import CreateTaskModal from '../../../components/Modal/CreateTaskModal';
import useMyTasks from '../../../hooks/useMyTasks';

const AllTask = () => {
    const { myAllTask, refetch, isLoading } = useMyTasks();

    // for modal
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => {
        setIsOpen(false)
    }

    const toDoTasks = myAllTask.filter((tasks) => tasks?.status === 'to-do');
    const onGoingTasks = myAllTask.filter((tasks) => tasks?.status === 'on-going');
    const completedTasks = myAllTask.filter((tasks) => tasks?.status === 'completed');


    return (
        <div className='px-2 lg:px-4 pb-5'>
            <div className='w-full text-center font-semibold mb-3 flex items-center justify-start'>
                <button onClick={() => setIsOpen(true)} className=' py-1 px-2 flex items-center gap-3 bg-[var(--titleBg)]'>
                    <p>New Task</p>
                    <FaEdit />
                </button>

                <CreateTaskModal
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    closeModal={closeModal}
                    refetch={refetch}
                />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {/* TO Do */}
                <div className='w-full'>
                    <div className='py-2 px-4 bg-[var(--titleBg)] text-lg text-center font-semibold flex items-center justify-between mb-3'>
                        <p>To Do</p>
                        <p className='text-base font-normal py-[2px] px-3 bg-[var(--border)] rounded'>{toDoTasks?.length}</p>
                    </div>

                    <div className='flex flex-col gap-3'>
                        {
                            toDoTasks?.map((task, index) => <TaskCard
                                key={index}
                                task={task}
                                index={index}
                                refetch={refetch}
                            />)
                        }
                    </div>
                </div>

                {/* On Going */}
                <div className='w-full'>
                    <div className='py-2 px-4 bg-[var(--titleBg)] text-lg text-center font-semibold flex items-center justify-between mb-3'>
                        <p> On Going </p>
                        <p className='text-base font-normal py-[2px] px-3 bg-[var(--border)] rounded'>{onGoingTasks?.length}</p>
                    </div>

                    <div className='flex flex-col gap-3'>
                        {
                            onGoingTasks?.map((task, index) => <TaskCard
                                key={index}
                                task={task}
                                index={index}
                                refetch={refetch}
                            />)
                        }
                    </div>
                </div>

                {/* Completed */}
                <div className='w-full'>
                    <div className='py-2 px-4 bg-[var(--titleBg)] text-lg text-center font-semibold flex items-center justify-between mb-3'>
                        <p>Completed</p>
                        <p className='text-base font-normal py-[2px] px-3 bg-[var(--border)] rounded'>{completedTasks?.length}</p>
                    </div>

                    <div className='flex flex-col gap-3'>
                        {
                            completedTasks?.map((task, index) => <TaskCard
                                key={index}
                                task={task}
                                index={index}
                                refetch={refetch}
                            />)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AllTask;