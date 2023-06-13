import React from 'react';
import Instructor from '../../Components/Instructor/Instructor';
import ReactHelmet from '../../Components/ReactHelmet/ReactHelmet';
import Banner from '../../Components/Banner/Banner';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import useInstructor from '../../Hooks/useInstructor';

const Instructors = () => {

    const [instructors] = useInstructor();

    return (
        <div>
            <ReactHelmet title={'Instructors'} />
            <Banner banner_title={'Instructors'} />
            <div className='screenSize'>
                <SectionTitle section_title={'Our Instructors'} section_subTitle={'Our Popular Instructor'}/>
                <h1 className='text-2xl border-s-4 border-[#f58025]'>&nbsp;Total Teacher: {instructors.length}</h1>                
                <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-x-4 gap-y-12 justify-between my-16'>
                    {
                        instructors.map((instructor, index) => <Instructor key={index} instructor={instructor} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Instructors;