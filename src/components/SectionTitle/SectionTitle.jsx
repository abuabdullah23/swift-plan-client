import React from 'react';

const SectionTitle = ({ sectionTitle, sectionSubtitle }) => {
    return (
        <div className='mt-20 mb-12 flex flex-col items-center gap-2' data-aos="fade-down" data-aos-duration="1300">
            <h3 className='text-center text-4xl font-semibold'>
                {sectionTitle}
            </h3>
            <p className="text-center text-base mt-4">{sectionSubtitle}</p>
            <span className='w-[100px] border-b-2 rounded-md border-[var(--border)] mt-6'></span>
        </div>
    );
};

export default SectionTitle;