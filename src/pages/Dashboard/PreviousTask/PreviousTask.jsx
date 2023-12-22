import React from 'react';
import useMyTasks from '../../../hooks/useMyTasks';
import TaskCard from '../AllTask/TaskCard';

const PreviousTask = () => {
    const { myAllTask, refetch, isLoading } = useMyTasks();

    const completedTasks = myAllTask.filter((tasks) => tasks?.status === 'completed');

    return (
        <div className='py-4 px-2 lg:px-4'>
            <p className='text-4xl font-bold text-center py-7'>Previous Task</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
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

    );
};

export default PreviousTask;