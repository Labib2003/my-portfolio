import React from 'react';
import { motion } from 'framer-motion';

const ContactMe = () => {
    return (
        <motion.div
            id='contact'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="hero mb-32"
        >
            <div className="hero-content grid grid-cols-1 lg:grid-cols-5 p-0">
                <div className="text-center lg:text-left col-span-5 lg:col-span-2">
                    <div className='mb-5'>
                        <h1 className="text-5xl font-semibold mb-5">Get in touch</h1>
                        <p className="text-xl leading-relaxed">Send me an email if you think I can help you out with any of your web related projects.</p>
                    </div>
                    <div className='mb-5 lg:mb-0'>
                        <h1 className="text-5xl font-semibold mb-5">My socials</h1>
                        <div className='grid grid-cols-4'>
                            <a
                                className='lg:ml-0 mx-auto'
                                target='_blank'
                                rel="noreferrer"
                                href="https://github.com/Labib2003"
                            >
                                <img
                                    className='hover:scale-110'
                                    src="images/icons/github.svg"
                                    alt="my GitHub"
                                />
                            </a>
                            <a
                                className='lg:ml-0 mx-auto'
                                target='_blank'
                                rel="noreferrer"
                                href="https://www.linkedin.com/in/labib2003/"
                            >
                                <img
                                    className='hover:scale-110'
                                    src="images/icons/linkedin.svg"
                                    alt="my LinkedIn"
                                />
                            </a>
                            <a
                                className='lg:ml-0 mx-auto'
                                target='_blank'
                                rel="noreferrer"
                                href="https://www.facebook.com/profile.php?id=100074531298092"
                            >
                                <img
                                    className='hover:scale-110'
                                    src="images/icons/facebook.svg"
                                    alt="my Facebook"
                                />
                            </a>
                            <a
                                className='lg:ml-0 mx-auto'
                                target='_blank'
                                rel="noreferrer"
                                href="https://stackoverflow.com/users/18109395/labib-amir-salimi?tab=profile"
                            >
                                <img
                                    className='hover:scale-110'
                                    src="images/icons/stackoverflow.svg"
                                    alt="my Stackoverflow"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card w-full shadow-2xl bg-base-100 col-span-5 lg:col-span-3">
                    <form
                        action="https://formsubmit.co/labib.salimi30@gmail.com"
                        method="POST"
                        className="card-body"
                    >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Email"
                                name="name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                name="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Body</span>
                            </label>
                            <textarea
                                type="text"
                                placeholder="Your message"
                                name="message"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Send Email" />
                        </div>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactMe;