// src/pages/Contact.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({
        success: false,
        error: '',
        loading: false
    });

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;

        // Reset status
        setStatus({
            success: false,
            error: '',
            loading: true
        });

        // Validation
        if (!name || !email || !subject || !message) {
            setStatus(prev => ({
                ...prev,
                error: 'All fields are required.',
                loading: false
            }));
            return;
        }

        if (!validateEmail(email)) {
            setStatus(prev => ({
                ...prev,
                error: 'Please enter a valid email address.',
                loading: false
            }));
            return;
        }

        try {
            // Send email using EmailJS
            const result = await emailjs.send(
                'service_r8zjfmy',  // Replace with your service ID
                'template_yenlgl8',  // Replace with your template ID
                formData,  // Pass the form data to the template
                'istWsLUr1dobLcgcr'  // Replace with your user ID
            );

            console.log('Form submitted:', formData);
            console.log(result);

            // Reset form and show success
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            setStatus({
                success: true,
                error: '',
                loading: false
            });
        } catch (error) {
            console.log('Error:', error);
            setStatus({
                success: false,
                error: 'Failed to send message. Please try again.',
                loading: false
            });
        }
    };

    return (
        <section id="contact" className="min-h-screen py-16 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                    <div className="p-8">
                        <h2 className="text-4xl font-bold text-gray-800 mb-2">Get in Touch</h2>
                        <p className="text-gray-600 mb-8">Have a question or want to work together?</p>

                        {status.success && (
                            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                                Thank you for your message! I&apos;ll get back to you soon.
                            </div>
                        )}

                        {status.error && (
                            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                                {status.error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                        placeholder="Oftanenus kasa"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                        placeholder="oftanenuskasa@gmail.com"
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                    placeholder="What's this about?"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="6"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status.loading}
                                className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg hover:opacity-90 transition duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status.loading ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Sending...
                                    </span>
                                ) : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
