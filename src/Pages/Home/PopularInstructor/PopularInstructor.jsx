import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useInstructor from '../../../Hooks/useInstructor';
import Instructor from '../../../Components/Instructor/Instructor';

const PopularInstructor = () => {

    const [instructors] = useInstructor();
    const instructorToDisplay = instructors.slice(0, 6);

    return (
        <div className='screenSize'>
            <SectionTitle section_title={'Popular Instructors'} section_subTitle={'Our Top Most Instructors'} />
            <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-x-4 gap-y-12 justify-between my-16'>
                {
                    instructorToDisplay.map((instructor, index) => <Instructor key={index} instructor={instructor} />)
                }
            </div>
        </div>
    );
};

export default PopularInstructor;