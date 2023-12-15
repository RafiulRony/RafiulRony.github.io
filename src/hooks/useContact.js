import { useForm } from 'react-hook-form'

const useContact = () => {
  const {
      register,
      handleSubmit,
      watch,
      formState: { errors }
  } = useForm()
  
  const onsubmit = ({name, email, phone, message}) => console.log({name, email, phone, message});

  return {
    register, handleSubmit, onsubmit, errors
  };
}
export default useContact

