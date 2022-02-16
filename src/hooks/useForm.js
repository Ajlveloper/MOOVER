import { useState } from 'react'

const useForm = (valueform = {}) => {

    const [value, setValue] = useState(valueform);

    const handleChangeInput = ({ target }) => {
        setValue({
            ...value,
            [target.name]: target.value,
        });
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


    return { handleChangeInput, value, reset }
}

export default useForm