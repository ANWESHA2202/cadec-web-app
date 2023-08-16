import { useState } from 'react';

const useForm = (values, setValues, callback, validate) => {

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        if ((Object.values(errors).every(value => value === '') || Object.values(errors).length == 0) && isSubmitting) {
            setIsSubmitting(false);
            console.log(errors, 'error')
            callback()
        }
    };

    const handleChange = (event) => {
        event.persist();
        setValues(values => ({...values, [event.target.name]: event.target.value }));
        setErrors(errors => ({...errors, ...validate(event.target) }));
    };

    return {
        handleChange,
        handleSubmit,
        values,
        setValues,
        errors
    }
};

export default useForm;