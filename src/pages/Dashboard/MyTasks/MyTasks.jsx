import { useEffect, useState } from 'react';
import CreateTask from '../../../components/CreateTask/CreateTask';
import ListTasks from '../../../components/CreateTask/ListTasks';
import useMyTasks from '../../../hooks/useMyTasks';

const MyTasks = () => {
    const { myAllTask, refetch, isLoading } = useMyTasks();

    const [tasks, setTasks] = useState(myAllTask);

    useEffect(() => {
        // using database
        setTasks(myAllTask)
    }, [myAllTask])


    return (
        <div className='py-4 px-2 lg:px-4 flex flex-col items-center gap-4'>
            <CreateTask />
            <ListTasks tasks={tasks} refetch={refetch} />
        </div>
    );
};

export default MyTasks;