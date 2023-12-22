import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import TaskCard from './TaskCard';
import CreateTaskModal from '../../../components/Modal/CreateTaskModal';
import useMyTasks from '../../../hooks/useMyTasks';
import { useDrop } from 'react-dnd';
import LoadingSpinner from '../../../components/LoadingComp/LoadingSpinner';

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

    const taskType = [
        { label: 'To Do', identifier: 'to-do', task: toDoTasks },
        { label: 'On Going', identifier: 'on-going', task: onGoingTasks },
        { label: 'Completed', identifier: 'completed', task: completedTasks },
    ];

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'task',
        drop: (item) => addItemToSection(item.id, item?.sectionIdentifier),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }))

    const addItemToSection = (id, sectionIdentifier) => {
        console.log('Dropped task', id, 'into section', sectionIdentifier);
    };

    return (
        <>
            {
                isLoading ? <LoadingSpinner /> : <>
                    <div className='px-2 lg:px-4 pb-5'>
                        <div className='w-full text-center font-semibold mb-3 flex items-center justify-start gap-6'>
                            <h3>Total: {myAllTask?.length}</h3>

                            <button onClick={() => setIsOpen(true)} className=' py-1 px-2 flex items-center gap-3 bg-[var(--titleBg)] hover:scale-[102%] duration-200'>
                                <p>New Task</p>
                                <FaEdit />
                            </button>

                        </div>
                        <CreateTaskModal
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            closeModal={closeModal}
                            refetch={refetch}
                        />

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                            {
                                taskType?.map((tasks, i) => (
                                    <div
                                        ref={drop}
                                        key={i}
                                        className='w-full'>
                                        <div className='py-2 px-4 bg-[var(--titleBg)] text-lg text-center font-semibold flex items-center justify-between mb-3'>
                                            <p>{tasks?.label}</p>
                                            <p className='text-base font-normal py-[2px] px-3 bg-[var(--border)] rounded'>{tasks?.task?.length}</p>
                                        </div>

                                        <div className='flex flex-col gap-5'>
                                            {
                                                tasks?.task?.map((task, index) => <TaskCard
                                                    key={index}
                                                    task={task}
                                                    index={index}
                                                    refetch={refetch}
                                                    sectionIdentifier={tasks?.identifier}
                                                />)
                                            }
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </>
            }
        </>

    );
};

export default AllTask;