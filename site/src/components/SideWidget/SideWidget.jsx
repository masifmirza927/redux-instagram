import React, { useState } from 'react'
import "./styles.css";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { BsFillSignpostSplitFill } from "react-icons/bs";
import { RiUserSettingsFill } from "react-icons/ri";
import { MdCreateNewFolder } from "react-icons/md";
import { BiAtom } from "react-icons/bi";
import PostModal from '../PostModal/PostModal';


const SideWidget = ({ image, name, bio }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };


    return (

        <div className='mt-4 pt-3 p-4'>
            <PostModal isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}  />
            <div className='mx-auto text-center'>
                <img src={image} className='d-inline sidewidget__photo object-fit-cover' />
            </div>
            <h3 className='fs-4 text-center mt-4'>{name}</h3>
            <p className='fs-6 text-center w-75 mx-auto'>{bio}</p>

            <div className='mt-4 d-flex justify-content-around'>
                <div className='text-center'>
                    <h6>123</h6>
                    <p>Posts</p>
                </div>
                <div className='text-center'>
                    <h6>454</h6>
                    <p>Followers</p>
                </div>
                <div className='text-center'>
                    <h6>213</h6>
                    <p>Following</p>
                </div>
            </div>

            <div className='navLinks py-2'>
                <Link to='/' className="btn btn-outline-dark fs-5 px-3 py-2 align-items-center gap-2 text-start d-flex mb-2 ">
                    <IoMdHome />
                    <span>Home</span>
                </Link>
                <Link to='/' className="btn btn-outline-dark fs-5 px-3 py-2 align-items-center gap-2 text-start d-flex mb-2">
                    <BsFillSignpostSplitFill />
                    <span>My Posts</span>
                </Link>
                <Link to='/' className="btn btn-outline-dark fs-5 px-3 py-2 align-items-center gap-2 text-start d-flex mb-2">
                    <RiUserSettingsFill />
                    <span>Edit Profile</span>
                </Link>
                <button onClick={showModal} className="btn btn-outline-danger w-100 fs-5 px-3 py-2 align-items-center gap-2 text-start d-flex mb-2">
                    <MdCreateNewFolder />
                    <span>New Post</span>
                </button>
                {/* <input type="file" accept="capture=camera,image/*" /> */}
            </div>
        </div>
    )
}

export default SideWidget