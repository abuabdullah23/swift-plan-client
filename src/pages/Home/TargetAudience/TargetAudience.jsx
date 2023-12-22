import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const TargetAudience = () => {
    return (
        <div className="py-16">
            <SectionTitle sectionTitle={'Target Audience'} sectionSubtitle={'Who Can Benefit from Our Task Management Website?'}/>
            <div className="container mx-auto text-center">
                <h2 className="text-xl font-semibold mb-8"></h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Developer */}
                    <div className="border-2 border-[var(--border)] p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Developers</h3>
                        <p className="">
                            Streamline your project tasks, manage deadlines, and collaborate with team members efficiently.
                        </p>
                    </div>

                    {/* Corporate Professionals */}
                    <div className="border-2 border-[var(--border)] p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Corporate Professionals</h3>
                        <p className="">
                            Stay organized, prioritize tasks, and enhance your workflow for better productivity in the corporate environment.
                        </p>
                    </div>

                    {/* Bankers */}
                    <div className="border-2 border-[var(--border)] p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Bankers</h3>
                        <p className="">
                            Keep track of important deadlines, financial tasks, and manage your daily responsibilities seamlessly.
                        </p>
                    </div>

                    {/* Students */}
                    <div className="border-2 border-[var(--border)] p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Students</h3>
                        <p className="">
                            Organize your study schedule, manage assignments, and achieve academic success with our task management platform.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TargetAudience;
