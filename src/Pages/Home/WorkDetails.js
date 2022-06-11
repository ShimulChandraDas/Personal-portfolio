import React from 'react';

const WorkDetails = () => {
    return (
        <div id='service' className="container mx-auto px-3 md:px-0">
            <div className='mb-20 text-gray-300'>
                <h4 className='font-bold text-3xl uppercase'>Services</h4>
            </div>
            <div className="rounded-lg bg-gray-900">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-10">
                    <div className="block p-6 text-gray-300 rounded-lg shadow-md bg-gray-900 max-w-sm shadow-gray-300">
                        <img src="https://i.ibb.co/S0ZZ50z/19362653.jpg" alt="" />
                        <h5 className=" mt-3 text-xl leading-tight font-medium mb-2">Frontend developer</h5>
                        <p>Html, Css, Bootstrap, Tailwind, Javascript, React.</p>
                    </div>
                    <div className="block p-6 text-gray-300 rounded-lg shadow-md bg-gray-900 max-w-sm shadow-gray-300">
                        <img src="https://5.imimg.com/data5/SELLER/Default/2021/3/JB/CY/CQ/83906125/website-developer-500x500.jpg" alt="" />
                        <h5 className="mt-3 text-xl leading-tight font-medium mb-2">Backend developer</h5>
                        <p className="text-gray-300 text-base mb-4">Node, Express, MongoDB.</p>
                    </div>
                    <div className="block p-6 rounded-lg text-gray-300 shadow-md bg-gray-900 max-w-sm shadow-gray-300">
                        <img src="https://i.ibb.co/9bz8VnM/4380747.jpg" alt="" />
                        <h5 className="mt-3 text-xl leading-tight font-medium mb-2">MERN stack developer</h5>
                        <p className="text-gray-300 text-base mb-4">Html, Css, Bootstrap, Tailwind, Javascript, React, Node, Express, MongoDB</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkDetails;