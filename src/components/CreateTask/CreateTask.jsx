import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import CreateMyTaskModal from '../Modal/CreateMyTaskModal';
import useMyTasks from '../../hooks/useMyTasks';

const CreateTask = () => {
    const {myAllTask, refetch } = useMyTasks();

    // for modal
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <div>
            <div className='w-full text-center font-semibold mb-3 flex items-center justify-start gap-6'>
                <h3>Total: {myAllTask?.length}</h3>

                <button onClick={() => setIsOpen(true)} className='py-1 px-2 rounded flex items-center gap-3 bg-[var(--titleBg)] hover:scale-[102%] duration-200'>
                    <p>Create Task</p>
                    <FaEdit />
                </button>

            </div>
            <CreateMyTaskModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                closeModal={closeModal}
                refetch={refetch}
            />
        </div>
    );
};

export default CreateTask;