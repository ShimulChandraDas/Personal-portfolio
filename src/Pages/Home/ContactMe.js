import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import image from '../../Utilities/about/animation_500_l48va9oi.gif'

const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_aby3ax2', 'template_7sh73ih', form.current, 'ExXAqjU9tu7QyhGCs')
            .then((result) => {
                console.log(result.text);
                toast.success('Your email send successfully')
                e.target.reset();
            }, (error) => {
                toast.error(error.text);
            });
    };
    return (
        <div id='contact'>
            <div className='mb-20 text-gray-300'>
                <h4 className='text-3xl font-bold uppercase'>Contact me</h4>
                <p className='px-10 pt-5'>If you have any questions, please feel free to contact me or you can contact me using other social media.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2  px-3 md:px-0'>
                <div className="flex justify-center items-center my-10 md:my-0">
                    <img className='h-80' src={image} alt="" />
                </div>
                <div className="block p-6 rounded-lg shadow-md bg-gray-900 shadow-gray-300 max-w-md">
                    <form ref={form} onSubmit={sendEmail}>
                        <label className='text-gray-300'>Name</label>
                        <input type="text" name="user_name" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-900 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-300 focus:border-blue-600 focus:outline-none" required />
                        <label className='text-gray-300'>Email</label>
                        <input type="email" name="user_email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-900 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-300 focus:border-blue-600 focus:outline-none" required />
                        <label className='text-gray-300'>Message</label>
                        <textarea name="message" className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-300 bg-gray-900 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-300  focus:border-blue-600 focus:outline-none" />
                        <input type="submit" value="Send" className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mt-5" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;