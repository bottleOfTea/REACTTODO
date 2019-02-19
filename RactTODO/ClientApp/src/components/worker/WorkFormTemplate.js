import React from 'react';
import { Field } from 'redux-form';
import renderField from '../renders/FormField';
import { Link } from 'react-router-dom';

const required = value => value ? undefined : 'Required';
const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined

const WorkerFormTemplate = props => {
    const { handleSubmit, onSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='form-horizontal'>
            <Field
                name="name"
                type="text"
                label="First Name"
                className="form-control"
                component={renderField}
                validate={required}
            />
            <Field
                name="email"
                type="email"
                label="Email"
                className="form-control"
                component={renderField}
                validate={[required, email]}
            />
            <div className="form-group row">
                <button type="submit" className="btn btn-primary" disabled={pristine || submitting} >Submit</button>
                <Link to="/workers" >
                    <button className="btn btn-light">Cancel</button>
                </Link>
            </div>
        </form >
    )
}

export default WorkerFormTemplate