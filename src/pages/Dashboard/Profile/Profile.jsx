import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { FadeLoader } from 'react-spinners';
import Loader from '../../../components/LoadingComp/Loader';
import { FaEdit } from 'react-icons/fa';
import { HiMiniXMark } from 'react-icons/hi2';
import toast from 'react-hot-toast';
import { imageUpload } from '../../../utils/imageUpload';

const Profile = () => {
    const { user, loading, handleUpdateProfile } = useAuth();
    const [loader, setLoader] = useState(false);
    const [show, setShow] = useState(false);

    // update profile info
    const updateProfileInfo = (event) => {
        event.preventDefault();
        setLoader(true);
        const form = event.target;
        const yourName = form.yourName.value;
        const profileImage = event.target.profileImage.files[0];

        const isChange = yourName !== user?.displayName || event.target.profileImage.files.length > 0;

        if (!isChange) {
            toast.error("You didn't change anything");
            setLoader(false);
            return;
        }

        // upload image
        imageUpload(profileImage || user?.photoURL)
            .then(data => {
                const imgUrl = data.data.display_url;

                // update in firebase
                handleUpdateProfile(yourName, imgUrl)
                    .then(() => {
                        toast.success('Successfully Updated your Profile!')
                        setLoader(false)
                        setShow(false);
                    })
                    .catch(error => {
                        toast.error(error.message)
                        setLoader(false)
                        setShow(false);
                    })

            })
            .catch(error => {
                toast.error(`${error.message} to upload photo`);
                setLoader(false);
            })
    }

    return (
        <div className='py-4 px-2 lg:px-4'>
            {
                loader && <div className='w-screen h-screen flex justify-center items-center fixed left-0 top-0 bg-[#38303033] z-[999]'>
                    <FadeLoader />
                </div>
            }

            <h2 className='text-2xl font-semibold text-center'>{`${user?.displayName}'s Profile`}</h2>
            <div className='w-full flex flex-col md:flex-row items-center justify-start gap-8 my-16'>
                <div className='w-full md:w-1/2 flex items-center justify-center'>
                    {
                        loader && <div className='w-screen h-screen flex justify-center items-center fixed left-0 top-0 bg-[#38303033] z-[999]'>
                            <FadeLoader />
                        </div>
                    }
                    <div className='w-[200px] h-[200px]'>
                        <img className='w-full h-full rounded object-cover object-center' src={user?.photoURL} alt="user photo" />
                    </div>
                </div>

                <div className='w-full md:w-1/2 text-lg font-light border border-slate-600 p-3 md:p-5 lg:p-8 transition-all duration-300 rounded flex flex-col gap-1'>
                    <h3>Name: <span className='font-normal'>{user?.displayName}</span> </h3>
                    <p>Email: <span className='font-normal'>{user?.email}</span></p>

                    {/* Update profile */}
                    <div className='relative'>
                        <div className='flex items-center justify-end'>
                            <button onClick={() => setShow(!show)} className='text-center w-fit py-[5px] px-[5px] rounded-sm bg-[var(--primary)] hover:bg[var(--primary)] text-white hover:text-white flex items-center justify-start gap-2 z-10 transition-all duration-500'>
                                {show
                                    ?
                                    <> <HiMiniXMark /> </>
                                    :
                                    <> <FaEdit />

                                    </>
                                }
                            </button>
                        </div>

                        <div className={`transition-all duration-300 ease-in-out absolute right-1 top-4 bg-[var(--body)] rounded-md border border-slate-500 overflow-y-auto w-full ${!show ? 'w-[0px] h-[0px]' : 'h-[220px]'}`}>
                            <form
                                onSubmit={updateProfileInfo}
                                className='flex flex-col gap-3 p-4 text-base font-normal'>
                                <div className='flex flex-col w-full gap-1'>
                                    <label htmlFor="yourName">Name</label>
                                    <input className='px-4 py-[6px] text-[15px] border border-slate-700 focus:border-indigo-500 outline-none bg-transparent rounded-md' name='yourName' id='yourName' defaultValue={user?.displayName} type="text" placeholder='Your Name' required />
                                </div>
                                <div className='flex flex-col w-full gap-1'>
                                    <label htmlFor='profileImage' className='block'> Select Image </label>
                                    <input type='file' id='profileImage' name='profileImage' accept='image/*' className='px-4 py-1 text-[15px] border border-slate-700 focus:border-indigo-500 outline-none bg-transparent rounded-md' />
                                </div>

                                <button
                                    disabled={loader ? true : false}
                                    type="submit"
                                    className={`py-1 px-3 w-fit bg-[var(--primary)] hover:shadow-cyan-500/20 hover:shadow-lg text-white rounded ${loader && 'bg-cyan-400'} `}>
                                    {
                                        loading ? <Loader loadingText={'Updating Info...'} /> : 'Update Info'
                                    }
                                </button>
                            </form>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Profile;