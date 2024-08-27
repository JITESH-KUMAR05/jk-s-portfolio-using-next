'use client';

import React, { useRef } from 'react';

const SendEmailButton = () => {
    const form = useRef(null);

    const sendEmail = async (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = Object.fromEntries(formData.entries());

        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        console.log(result);
    };

    return (
        <div className='w-full mx-auto px-20'>
            <h1 className='text-4xl p-5 font-bold text-white'>Contact Me</h1>
            <div className="flex  w-full justify-center items-center">
                <div className=" w-full flex justify-center p-3   text-white">
                    <form className=" w-[80%]  text-white border-white" ref={form} onSubmit={sendEmail}>
                        <div className=' py-2  flex flex-col '>
                            <label className=" text-xl py-1 text-white">Name</label>
                            <input type="text" className=" w-[90%] p-1 text-black" name="user_name" />
                        </div>
                        <div className='py-2 flex flex-col ' >
                            <label className=" text-xl py-1 text-white">Email</label>
                            <input type="email" className="w-[90%] p-1 text-black" name="user_email" />
                        </div>
                        <div className='py-2 flex flex-col ' >
                            <label className=" text-xl py-1 text-white">Have an Idea or message?</label>
                            <textarea className="w-[90%] p-1 text-black" name="message" />
                        </div>
                        <input type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SendEmailButton;