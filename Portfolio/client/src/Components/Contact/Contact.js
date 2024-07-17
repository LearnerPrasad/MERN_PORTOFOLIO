import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact({ id }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = true;
    if (!formData.email) newErrors.email = true;
    if (!formData.message) newErrors.message = true;
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error('Please enter all fields');
      return;
    }

    try {
      await axios.post('http://localhost:8080/api/v1/portfolio/sendEmail', formData);
      toast.success('Email sent successfully');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setErrors({});
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Failed to send email');
      }
      console.log(error);
    }
  };

  const handleWhatsAppMessage = () => {
    const phoneNumber = '9515195173';
    const message = encodeURIComponent('Hello! I visited your portfolio site and would like to connect.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleLinkedInMessage = () => {
    const linkedInProfile = 'https://www.linkedin.com/in/durgaprasad-buddhala/';
    const message = encodeURIComponent('Hello! I visited your portfolio site and would like to connect.');
    const linkedInUrl = `${linkedInProfile}?message=${message}`;
    window.open(linkedInUrl, '_blank');
  };

  const handleMailClick = () => {
    const subject = encodeURIComponent('Subject of the Email');
    const body = encodeURIComponent('Hello! I visited your portfolio site and would like to connect.');
    const mailtoUrl = `mailto:prasadbuddhala1638@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className='container' id={id}>
      <div className='row m-4 contact'>
        <h2 className='col-12 text-center text-uppercase'>Contact</h2>
        <hr className='col-12' />
        <p className='text-center col-12'>👉 Connect Me</p>
        <div className='col-md-6 p-0 h-100'>
          <img
            src='https://t4.ftcdn.net/jpg/00/88/74/49/360_F_88744916_2d10nlc9o5pYt7maCIQjZyePT7zL6Ujz.jpg'
            alt='Contact'
            className='contact-img'
          />
        </div>
        <div className='col-md-6 p-4'>
          <div>
            <div>
              <div className='d-flex justify-content-center align-items-center'>
                <h6>
                  Contact with Icons
                  <LinkedInIcon style={{ color: 'blue', marginLeft: '10px', cursor: 'pointer' }} onClick={handleLinkedInMessage} />
                  <WhatsAppIcon style={{ color: 'green', marginLeft: '10px', cursor: 'pointer' }} onClick={handleWhatsAppMessage} />
                  <MailIcon style={{ color: 'red', marginLeft: '10px', cursor: 'pointer' }} onClick={handleMailClick} />
                </h6>
              </div>
              <div className='d-flex justify-content-center align-items-center'>
                <div className='line'></div>
                <small className='or'>OR</small>
                <div className='line'></div>
              </div>
              <form onSubmit={handleSubmit} className='d-flex flex-column'>
                <div className='m-2 w-100'>
                  <input
                    style={errors.name ? { borderColor: 'red' } : {}}
                    className='form-control'
                    type='text'
                    name='name'
                    placeholder='Enter your Name'
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className='m-2 w-100'>
                  <input
                    style={errors.email ? { borderColor: 'red' } : {}}
                    className='form-control'
                    type='email'
                    name='email'
                    placeholder='Enter your Email Address'
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className='m-2 w-100'>
                  <textarea
                    style={errors.message ? { borderColor: 'red' } : {}}
                    className='form-control'
                    name='message'
                    placeholder='Write your message'
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <button className='w-100 border-0 button' type='submit'>Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
