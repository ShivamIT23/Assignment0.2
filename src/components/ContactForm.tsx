import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const validateForm = () => {
    const errors: FormErrors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      setSubmitting(true);
      
      // Simulate API call
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Form submitted:', formData);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setSubmitting(false);
      }
    }
  };
  
  return (
    <section id="contact" className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Contact Us</h2>
      {submitSuccess ? (
        <div className="max-w-3xl mx-auto px-5 py-12 bg-gray-50 rounded-xl shadow-md text-center">
          <p className="text-xl text-green-600 mb-6">Thank you for your message! We'll get back to you soon.</p>
          <button 
            onClick={() => setSubmitSuccess(false)}
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-medium transition-colors"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form 
          className="max-w-3xl mx-auto px-5 py-12 bg-gray-50 rounded-xl shadow-md"
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 transition-all ${formErrors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'}`}
            />
            {formErrors.name && <span className="text-red-500 text-sm mt-1 block">{formErrors.name}</span>}
          </div>
          
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 transition-all ${formErrors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'}`}
            />
            {formErrors.email && <span className="text-red-500 text-sm mt-1 block">{formErrors.email}</span>}
          </div>
          
          <div className="mb-6">
            <label htmlFor="subject" className="block mb-2 font-semibold">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 font-semibold">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 transition-all ${formErrors.message ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200 focus:border-blue-500'}`}
            ></textarea>
            {formErrors.message && <span className="text-red-500 text-sm mt-1 block">{formErrors.message}</span>}
          </div>
          
          <button 
            type="submit" 
            className={`w-full p-3 rounded-md text-white font-semibold transition-colors ${submitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
            disabled={submitting}
          >
            {submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </section>
  );
}

export default ContactForm;