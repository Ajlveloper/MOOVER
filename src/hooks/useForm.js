import { useState } from 'react'
import { validate } from '../helpers/Validate';

const useForm = (valueform = {}) => {

    const [value, setValue] = useState(valueform);

    const [errors, setErrors] = useState({})

    const handleChangeInput = ({ target }) => {
        setValue({
            ...value,
            [target.name]: target.value,
            estado: true
        });
        setErrors(validate({
            ...value,
            [target.name]: target.value,
        }))
    };

    const reset = () => {
         setValue(valueform);
    }

    /* const handleSubmit = (e) => {
        e.preventDefault();
        console.log(value);
    } */

    /* const handleShadow = () => {
   setFormState({
       ...formState,
       shadow: !shadow
   })
   

 }
*/


    return { handleChangeInput, value, reset, errors }
}

export default useForm