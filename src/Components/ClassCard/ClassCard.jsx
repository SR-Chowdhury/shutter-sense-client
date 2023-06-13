import React from 'react';

const ClassCard = ({ payments }) => {

    return (
        <>
            {payments.map((element, i) => {
                return element.className.map((name, index) => (
                    <div key={index} className="card w-48 bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/7QNH7xB/enrolled.jpg" alt="Icon" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {name}
                            </h2>
                        </div>
                    </div>
                ));
            })}
        </>
    );
};

export default ClassCard;