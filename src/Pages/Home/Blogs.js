import React from 'react';
import BlogsImage from '../../Utilities/pic/blogs.gif';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-2xl lg:text-6xl font-bold text-white'>Blogs Are Coming Soon......  </h1>
            <div className="flex pt-10 justify-center items-center my-10 md:my-0">
                <img className='h-80' src={BlogsImage} alt="" />
            </div>
        </div>
    );
};

export default Blogs;