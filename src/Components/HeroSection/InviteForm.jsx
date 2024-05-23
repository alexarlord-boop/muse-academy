import React from 'react';
import { useForm } from 'react-hook-form';

function InviteForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        alert("Welcome to the team!");
    };

    return (
        <form className="invite-form row d-flex justify-content-center" onSubmit={handleSubmit(onSubmit)} noValidate={true}>
            <div className="col-md-6 mb-2">
                <input
                    tabIndex={1}
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    placeholder="Email"
                    aria-label="Email"
                    name="email"
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Email is invalid'
                        }
                    })}
                />
                {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
            </div>
            <div className="col-md-2">
                <button
                    tabIndex={2}
                    className="btn btn-primary w-100"
                    type="submit">
                    Join <i className="bi bi-arrow-right-short"></i>
                </button>
            </div>
        </form>
    );
}

export default InviteForm;
