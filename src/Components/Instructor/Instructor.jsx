import React from 'react';
import { Slide } from 'react-awesome-reveal';

const Instructor = ({ instructor }) => {

    const { ins_name, ins_image, ins_email } = instructor;

    return (
        <Slide>
            <div className="card w-96 bg-base-100 shadow-xl border-1 transition-shadow delay-250">
                <figure className="px-10 pt-10">
                    <img src={ins_image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{ins_name}</h2>
                    <h2 className="card-title">{ins_email}</h2>
                </div>
            </div>
        </Slide>
    );
};

export default Instructor;