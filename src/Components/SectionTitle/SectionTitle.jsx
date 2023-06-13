import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({ section_title, section_subTitle }) => {
    return (
        <div className='text-center mt-24 mb-8 sectionTitle'>
            <h1 className='text-[#f58025] font-extrabold text-3xl'>{section_title}</h1>
            <h2 className='text-[#555] font-extrabold text-5xl'>{section_subTitle}</h2>
            <div className='w-1/2 mx-auto mt-3'>
                <p className='text-[#555]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, nemo atque fugiat sit quas eligendi perferendis a id consequuntur enim nihil consequatur similique odit fuga.</p>
            </div>
        </div>
    );
};

export default SectionTitle;