import React from 'react';
import './Contact.css';
const Contact = () => {
    const handleContact = event => {
        event.preventDefault();
        alert('Message success');
    };
    return (
        <div className='vc-container text-center py-5'>
            <div className="contact-text">
                <p className='vc-text1'>Let's discuss</p>
                <h1>Whatever question you have, <br /> please feel free to ask.</h1>
            </div>
            <div className="row mt-5 contact-form">
                <div className="col-lg-2 col-md-1 col-sm-0"></div>
                <div className="col-lg-8 col-md-10 col-sm-12 restock shadow">
                    <form onSubmit={handleContact} className='restock-form py-4'>
                        <div className='input-group'>
                            <div className='contact-input'>
                                <input className='w-100 ' placeholder='Your Name' type="text" name="name" />
                            </div>
                            <div className='contact-input'>
                                <input className='w-100 ' placeholder='Your email' type="email" name="email" required/>
                            </div>
                        </div>
                        <input className='w-100' placeholder='Subject' type="text" name="subject" />
                        <textarea className='w-100' placeholder='Write your message' name="text" id="" cols="10" rows="5" required></textarea>
                        <div className="inventory-btn mt-5 mb-0">
                            <button type='submit'>Send Message</button>
                        </div>
                    </form>
                </div>
                <div className="col-lg-2 col-md-1 col-sm-0"></div>
            </div>
        </div>
    );
};

export default Contact;