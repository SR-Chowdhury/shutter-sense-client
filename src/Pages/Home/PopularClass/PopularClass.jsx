import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useClass from '../../../Hooks/useClass';
import Class from '../../../Components/Class/Class';
import './PopularCass.css';

const PopularClass = () => {
    const [classes] = useClass();
    const topClasses = classes?.filter(item => item.available_seats > 0);
    const classToDisplay = topClasses.slice(0, 6);
    return (
        <div className='screenSize popularClassSection'>
            <SectionTitle section_title={'Popular Classes'} section_subTitle={'Our Top Most Classes'} />
            <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-x-4 gap-y-12 justify-between my-16'>
                {
                    classToDisplay.map((item, index) => <Class key={index} item={item} />)
                }
            </div>
        </div>
    );
};

export default PopularClass;