import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { FaCode } from 'react-icons/fa';
import { IoMdBusiness } from 'react-icons/io';
import { RiBankFill } from 'react-icons/ri';
import { PiStudentFill } from 'react-icons/pi';

const TargetAudience = () => {
    return (
        <div className="py-16">
            <SectionTitle sectionTitle={'Target Audience'} sectionSubtitle={'Who Can Benefit from Our Task Management Website?'} />
            <div className="container mx-auto text-center" data-aos="fade-down" data-aos-duration="1300">
                <h2 className="text-xl font-semibold mb-8"></h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Developer */}
                    <div className="border-2 border-[var(--border)] p-6 rounded-lg shadow-lg" data-aos="fade-up-right" data-aos-duration="1300">
                        <FaCode className='w-7 h-7 mx-auto mb-4' />
                        <h3 className="text-xl font-semibold mb-4">Developers</h3>
                        <p>
                            Streamline your project tasks, manage deadlines, and collaborate with team members efficiently.
                        </p>
                    </div>

                    {/* Corporate Professionals */}
                    <div className="border-2 border-[var(--border)] p-6 rounded-lg shadow-lg" data-aos="fade-down-right" data-aos-duration="1300">
                        <IoMdBusiness className='w-7 h-7 mx-auto mb-4' />
                        <h3 className="text-xl font-semibold mb-4">Corporate Professionals</h3>
                        <p>
                            Stay organized, prioritize tasks, and enhance your workflow for better productivity in the corporate environment.
                        </p>
                    </div>

                    {/* Bankers */}
                    <div className="border-2 border-[var(--border)] p-6 rounded-lg shadow-lg" data-aos="fade-down-left" data-aos-duration="1300">
                        <RiBankFill className='w-7 h-7 mx-auto mb-4' />
                        <h3 className="text-xl font-semibold mb-4">Bankers</h3>
                        <p>
                            Keep track of important deadlines, financial tasks, and manage your daily responsibilities seamlessly.
                        </p>
                    </div>

                    {/* Students */}
                    <div className="border-2 border-[var(--border)] p-6 rounded-lg shadow-lg" data-aos="fade-up-left" data-aos-duration="1300">
                        <PiStudentFill className='w-7 h-7 mx-auto mb-4' />
                        <h3 className="text-xl font-semibold mb-4">Students</h3>
                        <p>
                            Organize your study schedule, manage assignments, and achieve academic success with our task management platform.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TargetAudience;
