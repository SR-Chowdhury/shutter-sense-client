import React from 'react';
import Class from '../../Components/Class/Class';
import useClass from '../../Hooks/useClass';
import ReactHelmet from '../../Components/ReactHelmet/ReactHelmet';
import Banner from '../../Components/Banner/Banner';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

const Classes = () => {

    const [classes] = useClass();

    return (
        <div>
            <ReactHelmet title={'Instructors'} />
            <Banner banner_title={'Classes'} />
            <div className='screenSize'>
                <SectionTitle section_title={'Our Classess'} section_subTitle={'Our Popular Classes'} />
                <h1 className='text-2xl border-s-4 border-[#f58025]'>&nbsp;Total Classes: {classes.length}</h1>
                <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-x-4 gap-y-12 justify-between my-16'>
                    {
                        classes.map((item, index) => <Class key={index} item={item} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Classes;