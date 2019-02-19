import React from 'react';

const FormField = ({ input, label, type, meta: { touched, error } }) => (
    <div className="form-group row">
        <label className='col-sm-2 col-form-label'>{label}</label>
        <div className="col-sm-5">
            <input {...input} placeholder={label} className="form-control" type={type} />
        </div>
        {touched && error && <span className="col-sm-3 text-danger">{error}</span>}
    </div>
);

export default FormField;