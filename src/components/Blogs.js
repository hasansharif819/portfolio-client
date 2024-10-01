import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Blog from './Blog';
import Slider from 'react-slick/lib/slider';
// import MyEditor from './MyEditor';


const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get('https://portfolio-server-ten-eta.vercel.app/api/v1/blogs')
            .then(response => {
                setBlogs(response.data.data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch setBlogs:', error);
            });
    }, [blogs]);

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        // <div className='w-[80%] container mx-auto' id='blogs'>
        //     <h1 className='title text-3xl text-center text-gray-300 my-10'>Blogs</h1>

        //     {/* <div className='w-[100%] mx-auto my-blogs'>
        //         {blogs?.map((blog) => <Blog key={blog._id} blog={blog} />)}
        //     </div> */}

        //     <Slider {...settings}>
        //         {blogs.map((blog) => (
        //             <div key={blog._id} className="px-4">
        //                 <Blog blog={blog} />
        //             </div>
        //         ))}
        //     </Slider>
        // </div>

        <div className="w-[80%] container mx-auto" id="blogs">
            <h1 className="title text-3xl text-center text-gray-300 my-10">Blogs</h1>

            <Slider {...settings}>
                {blogs.map((blog) => (
                    <div key={blog._id} className="px-4 flex justify-center"> 
                        <div className="h-full">
                            <Blog blog={blog} />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>


    );
};

export default Blogs;