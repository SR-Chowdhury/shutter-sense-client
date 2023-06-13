import React from 'react';
import ReactHelmet from '../../../../Components/ReactHelmet/ReactHelmet';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import DashboardPageTtile from '../../../../Components/DashboardPageTitle/DashboardPageTtile';

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddClass = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const onSubmit = data => {
        console.log(data);
        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageResponse => {

                if (imageResponse.status) {

                    const imgeURL = imageResponse.data.display_url;
                    const { class_name, available_seats, price } = data;
                    const newClass = { class_image: imgeURL, class_name, ins_name: user?.displayName, ins_email: user?.email, available_seats: parseInt(available_seats), price: parseFloat(price), status: "pending", created_by: "instructor" };
                    // console.log(newClass);
                    axiosSecure.post('/classes', newClass)
                        .then(data => {
                            if (data.data.insertedId) {
                                Swal.fire({
                                    title: 'New Class Created Successfully',
                                    showClass: {
                                        popup: 'animate__animated animate__fadeInDown'
                                    },
                                    hideClass: {
                                        popup: 'animate__animated animate__fadeOutUp'
                                    },
                                    timer: 500
                                })
                                reset();
                            }
                        })
                }
            })
            .catch(err => console.log(err.message))
    };

    return (
        <div className='w-full px-10'>
            <ReactHelmet title={'Add Class'} />
            <DashboardPageTtile title={'Add a Class'} />

            <form onSubmit={handleSubmit(onSubmit)} className='mt-9'>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Class Name <span className='text-[red]'>*</span></span>
                    </label>
                    <input type="text" placeholder="Class Name" {...register("class_name", { required: true, maxLength: 120 })} className="input input-bordered lg:w-full" />
                    {errors.class_name && <span className='label-text-alt ms-1 mt-2 text-red-600'>Class Name is required</span>}
                </div>
                <div className='flex gap-4'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Available Seats <span className='text-[red]'>*</span></span>
                        </label>
                        <input type="number" placeholder="Item Price" {...register("available_seats", { required: true })} className="input input-bordered w-full" />
                        {errors.available_seats && <span className='label-text-alt ms-1 mt-2 text-red-600'>Available seats is required</span>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price <span className='text-[red]'>*</span></span>
                        </label>
                        <input type="number" placeholder="Item Price" {...register("price", { required: true })} className="input input-bordered w-full" />
                        {errors.price && <span className='label-text-alt ms-1 mt-2 text-red-600'>Price is required</span>}
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} readOnly className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} readOnly className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Class image <span className='text-[red]'>*</span></span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full" />
                </div>
                <button className="btn btnPrimary my-5">Add Class</button>
            </form>
        </div>
    );
};

export default AddClass;