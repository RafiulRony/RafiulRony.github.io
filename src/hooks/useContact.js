import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const useContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  
  const onsubmit = async ({ name, email, phone, message }) => {
    try {
      const templateParams = {
        from_name: name,
        from_email: email,
        to_name: 'Rafiul',
        phone: phone,
        message: message,
      };

      await emailjs.send(
        'service_3vxqlvp',
        'template_odypazj',
        templateParams,
        'SkLvOP0wdKFuyGZee'
      );

      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return {
    register,
    handleSubmit,
    onsubmit,
    errors
  };
};

export default useContact;
