import React from 'react';

const PaymentHistoryTable = ({ payments }) => {

    return (
        <table className="table w-full">
            <thead>
                <tr>
                    <th>Email</th>
                    <th>Class Name</th>
                    <th>Transaction ID</th>
                    <th>Price</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {payments.map((element, i) => {
                    return element.className.map((name, index) => (
                        <tr key={index}>
                            <td>{element.email}</td>
                            <td>{name}</td>
                            <td>{element.price}</td>
                            <td>{element.transactionId}</td>
                            <td>{element.date}</td>
                        </tr>
                    ));
                })}
            </tbody>
        </table>
    );
};

export default PaymentHistoryTable;