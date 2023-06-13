import React from 'react';
import { Link } from 'react-router-dom';

const ClassRow = ({i, item}) => {

    const {_id, class_image, class_name, available_seats, status} = item;

    return (
        <tr>
            <td>{i + 1}</td>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={class_image} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>{class_name}</td>
            <td>0</td>
            <td>{status}</td>
            <td>{item?.feedback || 'No Feedback'}</td>
            <th>
                <Link to={`/dashboard/updateclass/${_id}`}><button className="btn btn-ghost btn-xs">Update</button></Link>
            </th>
        </tr>
    );
};

export default ClassRow;