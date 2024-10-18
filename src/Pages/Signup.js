// Form.js
import React, { useState } from 'react';
function Form() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm(formData);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Form submission logic here
            console.log('Form submitted successfully!');
              // Clear the form data after successful submission
              setFormData({
                username: '',
                email: '',
                mobile: '',
                password: '',
                confirmPassword: '',});
        } else {
            console.log('Form submission failed due to validation errors.');
        }
    };

    const validateForm = (data) => {
        const errors = {};

        if (!data.username.trim()) {
            errors.username = 'Username is required';
        } else if (data.username.length < 4) {
            errors.username = 'Username must be at least 4 characters long';
        }

        if (!data.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Email is invalid';
        }
        if (!data.mobile) {
          errors.mobile = 'Mobile_Number is required';
      } else if (data.mobile.length < 11) {
          errors.mobile = 'Mobile_Number must be at least 11 characters long';
      }

        if (!data.password) {
            errors.password = 'Password is required';
        } else if (data.password.length < 8) {
            errors.password = 'Password must be at least 8 characters long';
        }

        if (data.confirmPassword !== data.password) {
            errors.confirmPassword = 'Passwords do not match';
        }

        return errors;
    };

    return (
    <>
     <div className="page-content">
  <div className="form-v4-content">
    <div className="form-left">
      <img src="img/img-01.png" alt="image" style={{marginTop: 100}} />
    </div>
            <form className="form-detail" onSubmit={handleSubmit}>
            <h2>REGISTER FORM</h2>
            <div>
                    <label className="form-label">
                        Username:
                    </label>
                    <input
                        className="form-input"
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    {errors.username && (
                        <span className="error-message">
                            {errors.username}
                        </span>
                    )}
                </div>

                <div>
                    <label className="form-label">
                        Email:
                    </label>
                    <input
                        className="form-input"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && (
                        <span className="error-message">
                            {errors.email}
                        </span>
                    )}
                </div>
                <div>
                    <label className="form-label">
                        Mobile_Number:
                    </label>
                    <input
                        className="form-input"
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                    />
                    {errors.mobile && (
                        <span className="error-message">
                            {errors.mobile}
                        </span>
                    )}
                </div>
                <div>
                    <label className="form-label">
                        Password:
                    </label>
                    <input
                        className="form-input"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && (
                        <span className="error-message">
                            {errors.password}
                        </span>
                    )}
                </div>
                <div>
                    <label className="form-label">
                        Confirm Password:
                    </label>
                    <input
                        className="form-input"
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    {errors.confirmPassword && (
                        <span className="error-message">
                            {errors.confirmPassword}
                        </span>
                    )}
                </div>
                <div className="form-row-last">
        <input type="submit" name="register" className="register mt-3" defaultValue="Register"/>
      </div>
     </form>
        </div>
        </div>
        </>
    );
}

export default Form;
