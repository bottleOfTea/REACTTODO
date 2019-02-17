import React from 'react'
import {Field, reduxForm} from 'redux-form'

const FormTemplate = props => {
    console.log(Field)
    return (
        <form onSubmit={() => {
        }}>
            <div>
                <label>First Name</label>
                <div>
                </div>
            </div>
        </form>
    )
};

export default reduxForm({
    form: 'InvoiceForm'
})(FormTemplate);



