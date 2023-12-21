import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import TaskCard from './TaskCard';
import CreateTaskModal from '../../../components/Modal/CreateTaskModal';

const AllTask = () => {

    // for modal
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => {
        setIsOpen(false)
    }


    const tasks = [1, 2, 3, 4]

    return (
        <div className='px-2 lg:px-4'>
            <div className='w-full text-center font-semibold mb-3 flex items-center justify-start'>
                <button onClick={() => setIsOpen(true)} className=' py-1 px-2 flex items-center gap-3 bg-[var(--titleBg)]'>
                    <p>New Task</p>
                    <FaEdit />
                </button>

                <CreateTaskModal
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    closeModal={closeModal}
                />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {/* TO Do */}
                <div className='w-full'>
                    <div className='py-2 px-4 bg-[var(--titleBg)] text-lg text-center font-semibold flex items-center justify-between'>
                        <p>To Do</p>
                        <p className='text-base font-normal py-[2px] px-3 bg-[var(--border)] rounded'>{tasks?.length}</p>
                    </div>

                    <div className='flex flex-col gap-2'>
                        {
                            tasks?.map((task, index) => <TaskCard
                                key={index}
                                task={task}
                                index={index}
                            />)
                        }
                    </div>
                </div>

                {/* On Going */}
                <div className='w-full'>
                    <div className='py-2 px-4 bg-[var(--titleBg)] text-lg text-center font-semibold flex items-center justify-between'>
                        <p> On Going </p>
                        <p className='text-base font-normal py-[2px] px-3 bg-[var(--border)] rounded'>{tasks?.length}</p>
                    </div>

                </div>

                {/* Completed */}
                <div className='w-full'>
                    <div className='py-2 px-4 bg-[var(--titleBg)] text-lg text-center font-semibold flex items-center justify-between'>
                        <p>Completed</p>
                        <p className='text-base font-normal py-[2px] px-3 bg-[var(--border)] rounded'>{tasks?.length}</p></div>

                </div>

            </div>
        </div>
    );
};

export default AllTask;