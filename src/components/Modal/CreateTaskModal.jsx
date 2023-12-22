import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const CreateTaskModal = ({ isOpen, closeModal, refetch }) => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const onSubmit = (data) => {
        const name = data?.name;
        const description = data?.description;
        const priority = data?.priority;
        const deadline = data?.deadline;

        const taskInfo = {
            userEmail: user?.email,
            name,
            description,
            priority,
            deadline
        }

        axiosSecure.post('/add-task', taskInfo)
            .then(res => {
                if (res.status === 200) {
                    toast.success(`Task added successful, Deadline: ${deadline}`);
                    refetch();
                    closeModal();
                    reset();
                }
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    return (
        <div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-[9999]" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl text-[var(--primary-text)] bg-[var(--body)] p-6 text-left align-middle shadow-xl border-2 border-[var(--border)] transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg text-center font-medium leading-6"
                                    >
                                        Create New Task
                                    </Dialog.Title>

                                    <div>
                                        <div className="flex flex-col gap-3 mt-2 text-base">

                                            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3'>
                                                <div className='flex flex-col items-start gap-2'>
                                                    <label className='font-semibold' htmlFor="name">Task Name</label>
                                                    <input
                                                        required
                                                        type="text"
                                                        name='name'
                                                        placeholder='Task Name'
                                                        {...register("name")}
                                                        className='w-full py-2 px-3 bg-transparent border border-[#203c79] focus:border-[#203c79] rounded outline-none' />
                                                </div>
                                                <div className='flex flex-col items-start gap-2'>
                                                    <label className='font-semibold' htmlFor="description">Description</label>
                                                    <textarea
                                                        required
                                                        type="text"
                                                        name='description'
                                                        placeholder='Task Description'
                                                        {...register("description")}
                                                        className='w-full py-2 px-3 bg-transparent border border-[#203c79] focus:border-[#203c79] rounded outline-none' />
                                                </div>
                                                <div className='flex flex-col items-start gap-2'>
                                                    <label className='font-semibold' htmlFor="">Priority</label>
                                                    <select
                                                        required
                                                        name="priority"
                                                        {...register("priority")}
                                                        className='w-full py-2 px-2 border border-[#203c79] focus:border-[#203c79] bg-[var(--body)] rounded outline-none'>
                                                        <option value="">--select--</option>
                                                        <option value="low">Low</option>
                                                        <option value="moderate">Moderate</option>
                                                        <option value="high">High</option>

                                                    </select>
                                                </div>
                                                <div className='flex flex-col items-start gap-2'>
                                                    <label className='font-semibold' htmlFor="">Deadline</label>
                                                    <input
                                                        required
                                                        type='date'
                                                        name="deadline"
                                                        {...register("deadline")}
                                                        className='w-full py-2 px-2  bg-[var(--body)] text-[var(--primary-text)] border border-[#203c79] focus:border-[#203c79] rounded outline-none' />
                                                </div>
                                                <div className='flex items-center justify-between'>
                                                    <p
                                                        onClick={closeModal}
                                                        className="cursor-pointer rounded-md border-2 border-[var(--border)] hover:border-[#203c79] py-2 px-3 font-semibold w-fit transition-all duration-300"
                                                    >
                                                        Close
                                                    </p>
                                                    <button
                                                        type='submit'
                                                        className="rounded-md bg-[var(--primary)] border-2 border-[var(--border)] text-white hover:border-[#203c79] py-2 px-3 font-semibold w-fit transition-all duration-300"
                                                    >
                                                        Create
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default CreateTaskModal;